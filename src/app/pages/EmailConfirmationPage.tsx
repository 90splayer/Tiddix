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
  Spinner,
  Center,
} from '@chakra-ui/react';
import { CheckIcon } from 'app/assets/icons';
import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from 'app/layout/Header';
import { Footer } from 'app/layout/Footer';
import { useParams } from 'react-router-dom';
import api from 'app/api/tiddix';
import { chkToaster } from 'app/components/common/Toaster';
import { ErrorMessage } from 'formik';
import useAuth from 'app/hooks/useAuth';

const EmailConfirmationPage: FC = () => {
  const { token } = useParams();
  const [emailConfirmed, setEmailConfirmed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const authContext = useAuth();

  useEffect(() => {
    api
      .get(`/email-confirmation/${token}`)
      .then(({ data }) => {
        setEmailConfirmed(true);
        const {
          accessToken,
          firstName,
          lastName,
          profilePicture,
          bio,
          walletBalance,
        } = data;
        authContext?.setAuth({
          accessToken,
          firstName,
          lastName,
          profilePicture,
          bio,
          walletBalance,
        });
      })
      .catch((err) => {
        if (emailConfirmed) return;
        setErrorMessage(err.response.data.message);
      });
  }, []);

  if (!(errorMessage || emailConfirmed)) {
    <Box>
      <Header />
      <Center>
        <Spinner size="xl" minH="50vh" />
      </Center>
      <Footer />
    </Box>;
  }

  return (
    <Box>
      <Header />
      <Box mb="100"></Box>
      {emailConfirmed ? (
        <Container
          maxW="144rem"
          p={{
            base: '3.5rem 2rem',
            sm: '3rem 5rem',
            md: '3rem 5.2rem 5rem',
            lg: '3rem 7.2rem 5rem',
          }}
          mb="100"
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
                Your email has been confirmed successfully
              </Text>
            </Stack>
            <Box mt="1.4rem" w="39rem">
              <Link to="/dashboard">
                <Button
                  variant="multicolor"
                  size="md"
                  fontSize="1.6rem"
                  w="100%"
                >
                  Go to my dashboard
                </Button>
              </Link>
            </Box>
          </VStack>
        </Container>
      ) : (
        <Center mb="100" minH="50vh">
          <Text>{errorMessage}</Text>
        </Center>
      )}

      <Footer />
    </Box>
  );
};

export default EmailConfirmationPage;
