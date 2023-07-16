import React from 'react';
import { Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import About from '@/components/about';

const Header = () => {
  return (
    <Box bg="white.800" py={4} px={8}>
      {/* <Flex justifyContent="space-between" alignItems="center"> */}
        <Heading as="h1" color="teal" fontSize="2xl">
          GreenEfficiency
        </Heading>
        <br />
        <Tabs colorScheme="teal">
          <TabList>
            <Tab>
                Home
            </Tab>
            <Tab>
                About
            </Tab>
            <Tab>Services</Tab>
            <Tab>Contact</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Home content goes here</p>
            </TabPanel>
            <TabPanel>
                
            </TabPanel>
            <TabPanel>
              <p>Services content goes here</p>
            </TabPanel>
            <TabPanel>
              <p>Contact content goes here</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      {/* </Flex> */}
    </Box>
  );
};

export default Header;
