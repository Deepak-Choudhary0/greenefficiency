import { Box, Button, CSSReset, ChakraProvider, Flex, Heading, Menu, MenuButton, MenuIcon, MenuItem, MenuList, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Head from 'next/head';
import CSVUploader from '@/components/csv';
import About from '@/components/about';

const handleFileUpload = (file: File | null) => {
  // Handle the file upload logic here
  console.log('File uploaded:', file?.name ?? 'null');
  // You can perform further processing with the file, such as parsing or sending it to a server
};

const HomePage = () => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Head>
        <title>GreenEfficiency</title>
        {/* <link rel="icon" href="/weather.png" /> */}
      </Head>
      <Stack margin={10}>
        {/* <Form/> */}
        <Box p={4} bg='lightgreen' rounded={5} textAlign={'center'}>
          <Heading as="h1" size="xs" mb={4} color="teal" fontSize="2xl" >
            GreenEfficiency
          </Heading>
          <CSVUploader onFileUpload={handleFileUpload}></CSVUploader>
        </Box>
        <Box bg="white.800" >
            <About/>
        </Box>
      </Stack>
    </ChakraProvider>
  );
};

export default HomePage;