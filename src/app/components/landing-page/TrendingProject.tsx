import React from 'react';
import {
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

const TrendingProject = () => {
  return (
    <Container maxW="144rem" p="7.5rem 7.2rem">
      <Heading
        as="h2"
        fontSize="4.8rem"
        textAlign="center"
        pb="2rem"
        lineHeight="54.62px"
        fontWeight="700"
        color="#fff"
      >
        Trending Projects
      </Heading>
      <Text fontSize="2rem" textAlign="center" color="#99A1AA" pb="11rem">
        Check out our weekly updated trending Projects
      </Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={2}>
        <GridItem w="100%">
          <ProjectCard />
        </GridItem>
        <GridItem w="100%">
          <ProjectCard />
        </GridItem>
        <GridItem w="100%">
          <ProjectCard />
        </GridItem>
        <GridItem w="100%">
          <ProjectCard />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default TrendingProject;
