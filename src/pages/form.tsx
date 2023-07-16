import { Button, CSSReset, ChakraProvider, Menu, MenuButton, MenuIcon, MenuItem, MenuList, Stack } from '@chakra-ui/react';
// import { useState } from 'react';
import Head from 'next/head';
import Form from '@/components/form';

// import Try from '@/components/try';
const HomePage = () => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Head>
        <title>Login GreenEfficiency</title>
        <link rel="icon" href="/weather.png" />
      </Head>
      {/* <Header/> */}
      <Stack margin={10}>
        <Form/>
      </Stack>
    </ChakraProvider>
  );
};

export default HomePage;