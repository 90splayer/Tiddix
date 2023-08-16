import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  Button,
  Icon,
} from '@chakra-ui/react';
import noproject from '../../../assets/images/dashboard/no-project.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { EmptyTableIcon } from 'app/assets/icons';

const NoUserProjects = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      height="100%"
      gap="1rem"
    >
      <Icon as={EmptyTableIcon} boxSize={'8rem'} />
      <Heading size="h3">No projects found</Heading>
      <Text maxW="59rem" textAlign="center" pb="1rem" size="body2">
        Looks like you haven't created a project yet! Project information will
        appear here as soon as you create your first project
      </Text>

      <Link to="/dashboard/create-project">
        <Button variant="multicolor" size="sm">
          Create Project
        </Button>
      </Link>
    </Flex>
  );
};

export default NoUserProjects;
