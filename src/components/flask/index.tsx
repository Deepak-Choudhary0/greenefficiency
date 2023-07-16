import { Box, Button } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import EnergyGraph from '../graph';

const Flask = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
        const response = await axios.get('http://127.0.0.1:5000/predict');
        console.log(response.data.result,response.data.time);
        setData(
            response.data.result.map((value: any, index: string | number) => {
              const date = response.data.time[index].split(',')[1].trim(); // Extract the date part
              return {
                Timestamp: `${date} ${index.toString().padStart(2, '0')}:00:00`,
                Energy_Consumption_Prediction: value,
                Time: response.data.time[index],
              };
            })
          );
        console.log(data);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };

  return (
    <div>
        <br />
        <Button colorScheme="teal" onClick={fetchData}>
            Fetch Data
          </Button>
        {data.length > 0 && (
            <Box mt={4}>
                <EnergyGraph data={data} />
            </Box>
        )}

    </div>
  );
};

export default Flask;
