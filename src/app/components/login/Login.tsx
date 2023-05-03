import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Input,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import signUpBg from '../../assets/images/signup/signup.png';
import google from '../../assets/images/signup/google.png';
import facebook from '../../assets/images/signup/facebook.png';

const LoginForm = () => {
  return (
    <Flex w="full">
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
          <VStack spacing="2rem" maxW="39rem">
            <Box mb="3.6rem">
              <Heading as="h4" fontSize="2.4rem" textAlign="center" mb="9px">
                Welcome Back
              </Heading>
              <Text color="#99A1AA" maxW="32rem" textAlign="center">
                Login to your account
              </Text>
            </Box>
            <Box>
              <Input
                width="100%"
                h="6.3rem"
                placeholder="Email Address"
                _placeholder={{ color: '#99A1AA', fontSize: '16px' }}
                fontSize="14px"
                borderRadius="20px"
                // padding={'20px 15px'}
                _hover={{ border: '2px solid #FF8CDF' }}
                focusBorderColor="#FF8CDF"
                border="1px solid #94A3B8"
                transition="0.7 ease-in-out"
              />
            </Box>
            <Box>
              <Input
                w="100%"
                h="6.3rem"
                placeholder="Password"
                _placeholder={{ color: '#99A1AA', fontSize: '16px' }}
                fontSize="14px"
                borderRadius="20px"
                // padding={'20px 15px'}
                _hover={{ border: '2px solid #FF8CDF' }}
                focusBorderColor="#FF8CDF"
                border="1px solid #94A3B8"
                transition="0.7 ease-in-out"
              />
            </Box>

            <Flex align="end" justify="end">
              <Link to="#">
                <Text color="#fff" _hover={{ textDecoration: 'underline' }}>
                  Forgot Password?
                </Text>
              </Link>
            </Flex>

            <Button variant="multicolor" w="100%" size="xl">
              Create Account
            </Button>

            <Flex
              align="center"
              justify="center"
              w="100%"
              bg="#232629"
              borderRadius="100px"
              h="6rem"
              transition="0.5 ease-in-out"
              _hover={{
                cursor: 'pointer',
                boxShadow: '0px 92px 40px -59px rgba(108, 76, 223, 0.15)',
                transform: 'scale(1.03)',
              }}
            >
              <Link to="#">
                <HStack justify="center" spacing="10px">
                  <Box>
                    <Image src={google} alt="google" />
                  </Box>
                  <Text color="#99A1AA" fontWeight="700">
                    or continue with Google
                  </Text>
                </HStack>
              </Link>
            </Flex>

            <Flex
              align="center"
              justify="center"
              w="100%"
              bg="#232629"
              transition="0.5 ease-in-out"
              borderRadius="100px"
              h="6rem"
              _hover={{
                cursor: 'pointer',
                boxShadow: '0px 92px 40px -59px rgba(108, 76, 223, 0.15)',
                transform: 'scale(1.03)',
              }}
            >
              <Link to="#">
                <HStack justify="center" spacing="10px">
                  <Box>
                    <Image src={facebook} alt="facebook" />
                  </Box>
                  <Text color="#99A1AA" fontWeight="700">
                    or continue with Facebook
                  </Text>
                </HStack>
              </Link>
            </Flex>

            <Box>
              <Text fontWeight="700">
                Already Have an account?{' '}
                <Link to="/login">
                  <Text
                    _hover={{ textDecoration: 'underline', opacity: '0.7' }}
                    fontWeight="700"
                    as="span"
                    bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
                    bgClip="text"
                  >
                    Login
                  </Text>
                </Link>
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
        pb="11.9rem"
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

export default LoginForm;
