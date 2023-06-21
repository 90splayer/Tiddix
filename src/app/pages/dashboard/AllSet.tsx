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

const AllSet: FC = () => {
  return (
    <Box mt="2rem">
      <Container
        maxW="144rem"
        p={{
          base: '3.5rem 2rem',
          sm: '3rem 5rem',
          md: '3rem 5.2rem 5rem',
          lg: '3rem 7.2rem 5rem',
        }}
      >
        <VStack spacing="4rem">
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
            <Heading as="h2" textAlign="center">
              You are all set
            </Heading>
            <Text textAlign="center" size="body2" mb="1.4rem" maxW="321px">
              You have successfully created your investor account on Tiddix
              Platform
            </Text>
          </Stack>
          <Box mt="1.4rem" w="39rem">
            <Link to="/dashboard">
              <Button variant="multicolor" size="md" fontSize="1.6rem" w="100%">
                Go to my dashboard
              </Button>
            </Link>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default AllSet;
