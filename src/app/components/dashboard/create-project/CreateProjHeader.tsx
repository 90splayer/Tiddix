import { Flex, Box, Container, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const CreateProjHeader = () => {
  return (
    <Box mt="2rem">
      <Container maxW="144rem" p={0}>
        <Flex align="center" justify="space-between" pb="6rem">
          <Flex gap="50px" align="center">
            <Link to="/dashboard">
              <Button variant="borderless">Back</Button>
            </Link>
            <Text color="white" size="body1">
              Create a Project
            </Text>
          </Flex>
          <Button variant="borderless">Save for later</Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default CreateProjHeader;
