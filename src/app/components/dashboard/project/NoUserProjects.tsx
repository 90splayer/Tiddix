import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  Button,
} from '@chakra-ui/react';
import noproject from '../../../assets/images/dashboard/no-project.png';
import React from 'react';
import { Link } from 'react-router-dom';

const NoUserProjects = () => {
  return (
    <Box>
      <VStack spacing="3rem">
        <Image maxW="12rem" src={noproject} alt="no-project img" />
        <Heading size="display4">No projects found</Heading>
        <Text maxW="59rem" textAlign="center" pb="1rem">
          Looks like you haven't created a project yet! Project information will
          appear here as soon as you create your first project
        </Text>

        <Link to="/dashboard/create-project">
          <Button variant="multicolor" size="sm">
            Create Project
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default NoUserProjects;
