import React from 'react';
import {
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import ProjectCard from '../ProjectCard';
import { Link } from 'react-router-dom';

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
      <Flex justify="center" align="center" flexDir="column">
        <Grid templateColumns="repeat(4, 1fr)" gap="2rem" mb="15rem">
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
        <Link to="/explore">
          <Button
            border="1px solid #fff"
            borderRadius="10rem"
            w="22rem"
            h="59px"
            fontSize="1.6rem"
            transition="0.5s ease"
            boxShadow="0px 4px 50px rgba(0, 0, 0, 0.15)"
            _hover={{
              opacity: 0.8,
            }}
            bg="transparent"
            color="#fff"
          >
            Explore More Project
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default TrendingProject;
