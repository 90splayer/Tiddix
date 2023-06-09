import { Flex, Box, Container, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateProjHeader = () => {
  const navigate = useNavigate();
  return (
    <Box mt="2rem">
      <Container maxW="144rem" p={0}>
        <Flex align="center" justify="space-between" pb="6rem">
          <Flex gap="50px" align="center">
            <Button onClick={() => navigate(-1)} variant="borderless">
              Back
            </Button>

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
