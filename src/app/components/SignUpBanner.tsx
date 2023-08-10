import { Text, VStack, Container, Button, Heading } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUpBanner = () => {
  return (
    <Container
      maxW="144rem"
      p={{ base: '3.5rem 2rem 3.5rem', md: '7.5rem 7.2rem 15rem' }}
    >
      <VStack
        borderRadius="40px"
        justify="center"
        px="2rem"
        spacing={{ base: '6rem', md: '9rem' }}
        h="45.8rem"
        bgGradient="radial(170.01% 203.82% at 137.98% -39.33%, #FF2727 0%, #FF8CDF 44.52%, #448FFF 100%)"
      >
        <Heading
          size="display2"
          maxW={{ base: '31.6rem', sm: '48.8rem', md: '75rem' }}
          textAlign="center"
        >
          Join the world's largest digital platform and start getting funds.
        </Heading>
        <Link to="/signup">
          <Button
            variant="whitebg"
            size="lg"
            _hover={{
              opacity: 0.8,
            }}
          >
            Sign up now
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default SignUpBanner;
