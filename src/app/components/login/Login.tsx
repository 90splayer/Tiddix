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
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import tiddix from '../../assets/images/tiddix.png';
import signUpBg from '../../assets/images/signup/signup.png';
import google from '../../assets/images/signup/google.png';
import facebook from '../../assets/images/signup/facebook.png';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import api from 'app/api/tiddix';
import { chkToaster } from '../common/Toaster';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from 'app/hooks/useAuth';
import { AuthUserT } from 'app/context/AuthProvider';

type LoginInputT = {
  email: string;
  password: string;
};

const schema = object().shape({
  email: string().email().required('Email is Required'),
  password: string().min(8).max(32).required(),
});

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const authContext = useAuth();

  // get where the user wanted to go before they got redirected to the login page
  const from = location.state?.from.pathname || '/';

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<LoginInputT>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitHandler = (data: LoginInputT) => {
    setLoading(true);
    const { email, password } = data;

    api
      .post<AuthUserT>('/login', { email, password })
      .then(({ data }) => {
        const { accessToken, firstName, lastName } = data;
        authContext?.setAuth({ accessToken, firstName, lastName });

        setLoading(false);
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        chkToaster.error({
          title: error.response.data.message || 'Unable to login',
        });

        setLoading(false);
      });
  };

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
            <Image src={tiddix} alt="tiddix logo" w="100px" />
          </NavLink>
          <NavLink to="/explore">
            <Text
              display={{ base: 'none', md: 'flex', lg: 'flex' }}
              size="body2"
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
              size="body2"
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
              size="body2"
              _hover={{
                bgGradient: 'linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)',
                bgClip: 'text',
              }}
            >
              Investors
            </Text>
          </NavLink>
        </HStack>
        <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
          <VStack spacing="2rem" maxW="39rem">
            <Box mb="3.6rem">
              <Heading as="h4" fontSize="2.4rem" textAlign="center" mb="9px">
                Welcome Back
              </Heading>
              <Text color="#99A1AA" maxW="32rem" textAlign="center">
                Login to your account
              </Text>
            </Box>
            <Box w="39rem">
              <FormControl isRequired isInvalid={!!errors.email}>
                <Input
                  size="lg"
                  placeholder="Email Address"
                  {...register('email')}
                />
                {errors.email && (
                  <Text color="#C21E56" fontSize="1.5rem">
                    {errors.email.message}
                  </Text>
                )}
              </FormControl>
            </Box>
            <Box w="39rem">
              <FormControl isRequired isInvalid={!!errors.password}>
                <Input
                  size="lg"
                  type="password"
                  placeholder="Password"
                  {...register('password')}
                />
                {errors.password && (
                  <Text color="#C21E56" fontSize="1.5rem">
                    {errors.password.message}
                  </Text>
                )}
              </FormControl>
              <Text
                mt="2rem"
                textAlign="right"
                color="#fff"
                _hover={{ textDecoration: 'underline' }}
              >
                <Link to="#">Forgot Password?</Link>
              </Text>
            </Box>

            <Button
              variant="multicolor"
              size="md"
              w="100%"
              type="submit"
              isLoading={loading}
            >
              Login
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
                <Link to="/signup">
                  <Text
                    _hover={{ textDecoration: 'underline', opacity: '0.7' }}
                    fontWeight="700"
                    as="span"
                    bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
                    bgClip="text"
                  >
                    Sign up
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
