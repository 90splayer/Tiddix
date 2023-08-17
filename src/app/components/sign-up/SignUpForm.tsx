import { useEffect } from 'react';
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
  IconButton,
  Stack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import tiddix from '../../assets/images/tiddix.png';
import signUpBg from '../../assets/images/signup/signup.png';
import google from '../../assets/images/signup/google.png';
import facebook from '../../assets/images/signup/facebook.png';
import { object, string, ref } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import api from 'app/api/tiddix';
import { chkToaster } from '../common/Toaster';
import { MdOutlineClose } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';

type SignUpInputT = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

const schema = object().shape({
  email: string().email().required('Email is Required'),
  firstName: string().required('Your First Name is Required'),
  lastName: string().required('Your Last Name is Required'),
  password: string().min(8).max(32).required(),
  confirmPassword: string()
    .oneOf([ref('password')], "Passwords Don't Match")
    .required(),
});

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState('none');
  const closeMenu = () => setIsMobile('none');
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    // reset,
    formState: { errors },
  } = useForm<SignUpInputT>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    },
  });

  const onSubmitHandler = (data: SignUpInputT) => {
    setLoading(true);
    const { email, firstName, lastName, password } = data;
    api
      .post('/register', {
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password,
      })
      .then((response: any) => {
        setLoading(false);
        chkToaster.success({
          title: 'Account created successfully',
          description: 'Please check your email for verification link',
        });

        setTimeout(() => {
          navigate('/login', { replace: true });
        }, 3000);
      })
      .catch((error: any) => {
        setLoading(false);
        chkToaster.error({
          title: error.response.data.message,
        });
      });
  };

  return (
    <Flex w="full" flexDir={{ base: 'column', md: 'row' }}>
      <Flex
        w={{ base: '100%', md: '40%' }}
        flexDir="column"
        // align="center"
        p={{ base: '2.1rem 2rem 10rem', md: '5.1rem 3rem 16rem' }}
      >
        <Flex
          align="center"
          justify={{ base: 'space-between', md: 'unset' }}
          gap={{ base: 'unset', md: '2rem', lg: '4.8rem' }}
          fontSize={{ md: '1.4rem', lg: '1.6rem' }}
          color="#99A1AA"
          mb={{ base: '7rem', md: '13rem' }}
        >
          <NavLink to="/">
            <Image
              src={tiddix}
              alt="tiddix logo"
              maxW={{ base: '120px', md: '100px' }}
            />
          </NavLink>
          <HStack
            display={{ base: 'none', md: 'flex' }}
            gap={{ base: '1.5rem', md: '2rem', lg: '4.8rem' }}
            whiteSpace="nowrap"
          >
            <NavLink to="/explore">
              <Text
                // display={{ base: 'none', md: 'flex', lg: 'flex' }}
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
                // display={{ base: 'none', md: 'flex', lg: 'flex' }}
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
                // display={{ base: 'none', md: 'flex', lg: 'flex' }}
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

          <Box
            display={{ base: 'block', md: 'none' }}
            _hover={{ opacity: '0.7' }}
          >
            <IconButton
              onClick={() => setIsMobile('flex')}
              color="white"
              bg="#232629"
              border="none"
              borderRadius="10px"
              p="1.2rem"
              size="md"
              aria-label="hamburger menu"
              transition="0.5s ease-in-out"
              fontSize="2.8rem"
              icon={<RxHamburgerMenu />}
            />
          </Box>

          <Flex
            bgColor="#15181d"
            pos="fixed"
            top={0}
            left={0}
            h="100vh"
            w="full"
            zIndex={20}
            overflowY="auto"
            transition="0.8s ease-in-out"
            // justify="center"
            flexDir="column"
            display={isMobile}
          >
            <Box
              mt="2rem"
              ml="2rem"
              pos="absolute"
              top={0}
              left={0}
              onClick={() => {
                if (isMobile === 'flex') closeMenu();
              }}
            >
              <NavLink to="/">
                <Image src={tiddix} alt="tiddix logo" maxW="120px" />
              </NavLink>
            </Box>
            <Flex
              mt="2rem"
              mr="2rem"
              pos="absolute"
              top={0}
              right={0}
              color="black"
            >
              <IconButton
                onClick={() => setIsMobile('none')}
                icon={<MdOutlineClose />}
                transition="0.5s ease-in-out"
                bg="#232629"
                border="none"
                borderRadius="10px"
                p="1.2rem"
                size="md"
                _hover={{ bgColor: '#dbd9d9' }}
                fontSize="24px"
                aria-label="close button"
                isRound={true}
              />
            </Flex>
            <Stack
              mt="14rem"
              spacing="25px"
              alignItems="center"
              fontWeight="600"
              color="white"
              px="2rem"
            >
              <Text
                onClick={() => {
                  if (isMobile === 'flex') closeMenu();
                }}
                transition="0.5s ease-in-out"
                _hover={{ textDecoration: 'underline' }}
              >
                <NavLink to="/">Home</NavLink>
              </Text>
              <Text
                onClick={() => {
                  if (isMobile === 'flex') closeMenu();
                }}
                transition="0.5s ease-in-out"
                _hover={{ textDecoration: 'underline' }}
              >
                <NavLink to="/explore">Explore</NavLink>
              </Text>
              <Text
                onClick={() => {
                  if (isMobile === 'flex') closeMenu();
                }}
                transition="0.5s ease-in-out"
                _hover={{ textDecoration: 'underline' }}
              >
                <NavLink to="/creatives">Creatives</NavLink>
              </Text>
              <Text
                onClick={() => {
                  if (isMobile === 'flex') closeMenu();
                }}
                transition="0.5s ease-in-out"
                _hover={{ textDecoration: 'underline' }}
              >
                <NavLink to="/investors">Investors</NavLink>
              </Text>

              <Text
                onClick={() => {
                  if (isMobile === 'flex') closeMenu();
                }}
                transition="0.5s ease-in-out"
                _hover={{ textDecoration: 'underline' }}
              >
                <NavLink to="/teams">Our Team</NavLink>
              </Text>
              <Text
                onClick={() => {
                  if (isMobile === 'flex') closeMenu();
                }}
                transition="0.5s ease-in-out"
                _hover={{ textDecoration: 'underline' }}
              >
                <NavLink to="/corporate-profile">Corporate Profile</NavLink>
              </Text>

              <Text
                onClick={() => {
                  if (isMobile === 'flex') closeMenu();
                }}
                transition="0.5s ease-in-out"
                _hover={{ textDecoration: 'underline' }}
              >
                <NavLink to="/code-of-conduct">Code of Conduct</NavLink>
              </Text>
            </Stack>
          </Flex>
        </Flex>

        <Flex flexDir="column" align="center">
          <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
            <VStack spacing="2rem" maxW="39rem">
              <Box mb="3.6rem">
                <Heading as="h4" fontSize="2.4rem" textAlign="center" mb="9px">
                  Create an account
                </Heading>
                <Text color="#99A1AA" maxW="32rem" textAlign="center">
                  Get started by creating your creative account.
                </Text>
              </Box>
              <Flex gap="1.4rem">
                <FormControl isRequired isInvalid={!!errors.firstName}>
                  <Input
                    size="lg"
                    placeholder="First Name"
                    {...register('firstName')}
                  />
                  {errors.firstName && (
                    <Text color="#C21E56" fontSize="1.5rem">
                      {errors.firstName.message}
                    </Text>
                  )}
                </FormControl>

                <FormControl isRequired isInvalid={!!errors.firstName}>
                  <Input
                    size="lg"
                    placeholder="Last Name"
                    {...register('lastName')}
                  />
                  {errors.lastName && (
                    <Text color="#C21E56" fontSize="1.5rem">
                      {errors.lastName.message}
                    </Text>
                  )}
                </FormControl>
              </Flex>

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

              <FormControl isRequired isInvalid={!!errors.password}>
                <Input
                  size="lg"
                  placeholder="Password"
                  type="password"
                  {...register('password')}
                />
                {errors.password && (
                  <Text color="#C21E56" fontSize="1.5rem">
                    {errors.password.message}
                  </Text>
                )}
              </FormControl>

              <FormControl isRequired isInvalid={!!errors.confirmPassword}>
                <Input
                  size="lg"
                  placeholder="Confirm Password"
                  type="password"
                  {...register('confirmPassword')}
                />
                {errors.confirmPassword && (
                  <Text color="#C21E56" fontSize="1.5rem">
                    {errors.confirmPassword.message}
                  </Text>
                )}
              </FormControl>

              <Button
                variant="multicolor"
                w="100%"
                size="md"
                type="submit"
                isLoading={loading}
              >
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
                <Link
                  to={`${import.meta.env.VITE_APP_TIDDIX_BASE_URL}auth/google`}
                >
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
                <Link
                  to={`${
                    import.meta.env.VITE_APP_TIDDIX_BASE_URL
                  }auth/facebook`}
                >
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
      </Flex>
      <Flex
        display={{ base: 'none', md: 'flex' }}
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

export default SignUpForm;
