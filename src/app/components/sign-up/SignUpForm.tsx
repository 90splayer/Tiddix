import { Box, Flex, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import signUpBg from '../../assets/images/signup/signup.png';

const SignUpForm = () => {
  return (
    <Flex w="full" h="100vh">
      <Flex w="40%" flexDir="column" align="center" p="5.1rem 3rem 16rem">
        <HStack
          spacing={{ base: '1.5rem', md: '2rem', lg: '4.8rem' }}
          fontSize={{ md: '1.4rem', lg: '1.6rem' }}
          color="#99A1AA"
          mb="13rem"
        >
          <NavLink to="/">
            <Heading
              pr="10px"
              transition="0.2s ease-in-out"
              fontSize="3.6rem"
              bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
              bgClip="text"
              fontWeight="700"
            >
              tiddix
            </Heading>
          </NavLink>
          <NavLink to="/explore">
            <Text
              display={{ base: 'none', md: 'flex', lg: 'flex' }}
              transition="0.2s ease-in-out"
              _hover={{
                bgGradient: 'linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)',
                bgClip: 'text',
              }}
            >
              Explore
            </Text>
          </NavLink>
          <NavLink to="/about">
            <Text
              display={{ base: 'none', md: 'flex', lg: 'flex' }}
              transition="0.2s ease-in-out"
              _hover={{
                bgGradient: 'linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)',
                bgClip: 'text',
              }}
            >
              About Us
            </Text>
          </NavLink>
          <NavLink to="/invest">
            <Text
              display={{ base: 'none', md: 'flex', lg: 'flex' }}
              transition="0.2s ease-in-out"
              _hover={{
                bgGradient: 'linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)',
                bgClip: 'text',
              }}
            >
              Investors
            </Text>
          </NavLink>
        </HStack>
        <form>
          <VStack spacing="2rem">
            <Box mb="3.6rem">
              <Heading as="h4" fontSize="2.4rem" textAlign="center" mb="9px">
                Create an account
              </Heading>
              <Text color="#99A1AA" maxW="32rem" textAlign="center">
                Get started by creating your creative account.
              </Text>
            </Box>
          </VStack>
        </form>
      </Flex>
      <Flex
        w="60%"
        bgImage={signUpBg}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="center"
        flexDir="column"
        justify="end"
        pl="6.8rem"
        pb="8.9rem"
      >
        <Heading
          as="h2"
          fontSize="4rem"
          pb="4rem"
          lineHeight="52px"
          fontWeight="700"
          maxW="53rem"
        >
          “We are a reliable and innovative digital platform that provides
          hassle-free, quick debt and equity funding.”
        </Heading>
        <Text fontSize="2.4rem" mb="8px">
          {' '}
          Ifeoma Adeoye
        </Text>
        <Text fontSize="1.6rem"> Founder CEO</Text>
      </Flex>
    </Flex>
  );
};

export default SignUpForm;
