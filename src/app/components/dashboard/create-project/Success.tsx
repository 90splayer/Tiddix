import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  Progress,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from 'app/assets/icons';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import CreateProjHeader from './CreateProjHeader';

const Success: FC = () => {
  return (
    <Box borderTop="1px solid grey" mt="2rem">
      <Container
        maxW="144rem"
        p={{
          base: '3.5rem 2rem',
          sm: '3rem 5rem',
          md: '3rem 5.2rem 5rem',
          lg: '3rem 7.2rem 5rem',
        }}
      >
        <CreateProjHeader />
        <Flex justify="space-between" gap={6}>
          <VStack w="70%" spacing="4rem">
            <Flex
              bg="#232629"
              align="center"
              justify="center"
              borderRadius="full"
              w="125px"
              h="125px"
            >
              <CheckIcon />
            </Flex>
            <Stack spacing="1rem">
              <Heading as="h2">Your Project Has Been Submitted</Heading>
              <Text textAlign="center" size="body2" mb="1.4rem" maxW="321px">
                Your project has been uploaded and you can access it from your
                dashboard.
              </Text>
            </Stack>
            <Box maxW="39rem">
              <Link to="/dashboard">
                <Button variant="multicolor" size="md" w="100%">
                  Go to my dashboard
                </Button>
              </Link>
            </Box>
          </VStack>
          <Flex flexDir="column" w="25%">
            <Flex align="center" justify="space-between" mb="2rem">
              <Text size="body2" color="white">
                Progress Status
              </Text>
              <Text size="body2" fontWeight="700">
                100%
              </Text>
            </Flex>
            <Box mb="3rem">
              <Progress
                value={80}
                size="md"
                colorScheme="transparent"
                borderRadius="20px"
                background="linear-gradient(transparent, transparent) padding-box, linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%) border-box"
              />
            </Box>
            <Stack
              mb="5.4rem"
              borderRadius="20px"
              spacing="4rem"
              w="100%"
              p="2rem"
              bg="#232629"
              border="1px solid #485155"
            >
              <Checkbox variant="circular">
                <Text
                  size="body2"
                  bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
                  bgClip="text"
                >
                  Project Description
                </Text>
              </Checkbox>
              <Checkbox variant="circular">
                <Text size="body2">Portfolio Upload</Text>
              </Checkbox>
              <Checkbox variant="circular">
                <Text size="body2">Connect social Media</Text>
              </Checkbox>
              <Checkbox variant="circular">
                <Text size="body2">Project Type</Text>
              </Checkbox>
              <Checkbox variant="circular">
                <Text size="body2">Finish</Text>
              </Checkbox>
            </Stack>
            <Box>
              <Button variant="multicolor" size="md" w="100%">
                Next
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Success;
