import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const About = () => {
  return (
    <Box p={4} bg="gray.200" rounded="md">
      <Heading as="h1" size="md" mb={4} textAlign="center">
        About GreenEfficiency
      </Heading>
      <Text fontSize="lg" textAlign="center" mt={2}>
        GreenEfficiency is a cutting-edge solution that revolutionizes energy efficiency in buildings. Our platform leverages advanced technologies to optimize energy usage, reduce carbon footprint, and create a greener and more sustainable future.
      </Text>
      
      <Text fontSize="lg" mt={4}>
        At GreenEfficiency, we understand the urgent need to address the significant energy consumption and environmental impact of buildings. Our mission is to empower building owners, managers, and occupants with the tools and insights they need to make smarter energy decisions and drive positive change.
      </Text>

      <Text fontSize="lg" mt={4}>
        With our innovative platform, users gain a comprehensive view of their building's energy performance and actionable recommendations to enhance efficiency. By integrating real-time data, machine learning algorithms, and intuitive visualizations, GreenEfficiency offers a user-friendly experience that enables users to make informed decisions and track their progress towards sustainability goals.
      </Text>

      <Heading as="h2" size="md" mt={6}>
        Key Features of GreenEfficiency:
      </Heading>

      <UnorderedList mt={4} spacing={2}>
        <ListItem fontSize="lg">Real-time Energy Monitoring: GreenEfficiency provides a live view of energy consumption, allowing users to monitor usage patterns and identify areas of inefficiency.</ListItem>
        <ListItem fontSize="lg">Intelligent Insights and Recommendations: Our platform utilizes advanced machine learning algorithms to analyze energy data and generate personalized recommendations.</ListItem>
        <ListItem fontSize="lg">Benchmarking and Goal Setting: GreenEfficiency enables users to compare their building's energy performance against industry benchmarks and set achievable goals for improvement.</ListItem>
        <ListItem fontSize="lg">Interactive Dashboards and Reporting: Our interactive dashboards present energy data in a visually engaging and intuitive format.</ListItem>
        <ListItem fontSize="lg">Collaboration and Engagement: GreenEfficiency promotes a culture of collaboration and engagement among building occupants and stakeholders.</ListItem>
      </UnorderedList>

      <Text fontSize="lg" mt={4}>
        At GreenEfficiency, we envision a world where every building contributes to a more sustainable future. Join us on the journey toward a greener tomorrow. Together, we can achieve GreenEfficiency.
      </Text>
    </Box>
  );
};

export default About;
