import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from 'app/utils/helpers';
import useApiPrivate from 'app/hooks/useApiPrivate';
import useAuth from 'app/hooks/useAuth';

export default function LoginButton({ colorMode, onMobile }: any) {
  const api = useApiPrivate();
  const authContext = useAuth();

  console.log('LOGGED IN?????', isAuthenticated(), authContext?.auth);

  const logout = (e: any) => {
    e.preventDefault();
    authContext?.setAuth(null);
    api.post('/logout').then(() => {
      console.log('LOGGED OUT SUCCESSFULLY');
    });
  };

  return !isAuthenticated() ? (
    <>
      <Link to="/login">
        <Button
          // isLoading={isLoading}
          spinnerPlacement="start"
          // mr={onMobile ? '' : '4.5rem'}
          fontFamily="medium"
          color={colorMode === 'light' ? '#2E0249' : '#FAA1E1'}
          fontSize={onMobile ? '2.4rem' : '1.4rem'}
          _hover={
            colorMode === 'light' ? { color: '#FAA1E1' } : { color: '#FFF' }
          }
        >
          Sign In
        </Button>
      </Link>
      <Link to="/signup">
        <Text
          bg={colorMode === 'light' ? '#F806CC' : '#F806CC'}
          borderRadius={0}
          fontSize={onMobile ? '2.2rem' : '1.4rem'}
          fontFamily="light"
          p={onMobile ? '2rem' : '1rem 2rem'}
          _hover={colorMode === 'light' ? { bg: '#FAA1E1' } : { bg: '#FAA1E1' }}
        >
          Create Account
        </Text>
      </Link>
    </>
  ) : (
    <Button
      onClick={logout}
      mr={onMobile ? '' : '4.5rem'}
      fontFamily="medium"
      color={colorMode === 'light' ? '#2E0249' : '#FAA1E1'}
      fontSize={onMobile ? '2.4rem' : '1.4rem'}
      _hover={colorMode === 'light' ? { color: '#FAA1E1' } : { color: '#FFF' }}
    >
      Sign Out
    </Button>
  );
}
