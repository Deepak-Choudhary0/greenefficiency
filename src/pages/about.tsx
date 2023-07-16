import { ChakraProvider, Stack } from '@chakra-ui/react';
import Head from 'next/head';
import About from '@/components/about';
const HomePage = () => {
  return (
    <ChakraProvider>
      <Head>
        <title>About GreenEfficiency</title>
        <link rel="icon" href="/weather.png" />
      </Head>
      <Stack margin={3}>
        <About/>
      </Stack>
    </ChakraProvider>
  );
};

export default HomePage;