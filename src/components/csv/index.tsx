import { Box, Button, Text, useToast } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import Papa from 'papaparse';
import Flask from '../flask';

interface CSVUploaderProps {
  onFileUpload: (file: File | null) => void;
}

const readCSVFile = (file: File): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = (event) => {
      const csvData = event.target?.result as string;
      const parsedData = Papa.parse(csvData, {
        header: true, // Assumes the first row contains headers
        dynamicTyping: true, // Automatically converts strings to numbers, etc.
        skipEmptyLines: true, // Skip empty lines in the CSV file
      });

      // Remove rows with NaN or null values
      const cleanedData = parsedData.data.filter((row) =>
        Object.values(row as any).every(
          (value) => value instanceof Date || typeof value === 'number' || typeof value === 'string'
        )
      );

      const hasNaNOrNull = cleanedData.length < parsedData.data.length;

      if (hasNaNOrNull) {
        console.log('The CSV file contains NaN or null values.');

        // Log the rows with NaN or null values
        parsedData.data.forEach((row, index) => {
          const hasNaNOrNullInRow = Object.values(row as any).some(
            (value) => value === null || (typeof value === 'number' && isNaN(value))
          );
          if (hasNaNOrNullInRow) {
            console.log('NaN or null values in row:', index, row);
          }
        });
      } else {
        console.log('The CSV file does not contain NaN or null values.');
      }

      resolve(hasNaNOrNull);
    };

    fileReader.onerror = (event) => {
      reject(event.target?.error);
    };

    fileReader.readAsText(file);
  });
};

const CSVUploader: React.FC<CSVUploaderProps> = ({ onFileUpload }) => {
  const [isUpload, setIsUpload] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const toast = useToast();

  const handleRemoveFile = () => {
    setSelectedFile(null);
    onFileUpload(null);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onFileUpload(file);
      toast({
        title: 'File Uploaded Successfully',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      readCSVFile(file)
        .then((hasNaNOrNull) => {
          setIsUpload(!hasNaNOrNull);
        })
        .catch((error) => {
          console.error('Error reading CSV file:', error);
        });
    } else {
      setSelectedFile(null);
      onFileUpload(null);
      toast({
        title: 'No file selected',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="csvUploader"
      />
      <label htmlFor="csvUploader">
        <Button colorScheme="yellow" as="span">
          Select CSV File
        </Button>
      </label>
      {selectedFile && (
        <>
          <Text mt={2}>Selected File: {selectedFile.name}</Text>
          <Flask />
          <br />
          <Button colorScheme="red" onClick={handleRemoveFile}>
            Remove File
          </Button>
        </>
      )}
    </Box>
  );
};

export default CSVUploader;
