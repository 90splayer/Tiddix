import { Text, VStack, Container, Button } from '@chakra-ui/react';
import React from 'react';

const SignUpBanner = () => {
  return (
    <Container maxW="144rem" p="7.5rem 7.2rem 15rem">
      <VStack
        borderRadius="40px"
        justify="center"
        spacing="9rem"
        h="45.8rem"
        bgGradient="radial(170.01% 203.82% at 137.98% -39.33%, #FF2727 0%, #FF8CDF 44.52%, #448FFF 100%)"
      >
        <Text
          fontSize="4.8rem"
          lineHeight="54.62px"
          textAlign="center"
          color="#fff"
          fontWeight="700"
        >
          Join the world's largest digital
          <br /> platform and start getting funds.
        </Text>
        <Button
          borderRadius="10rem"
          w="14.9rem"
          h="59px"
          bg="#fff"
          color="#000"
          fontSize="1.6rem"
          transition="0.5s ease"
          boxShadow="0px 4px 50px rgba(0, 0, 0, 0.15)"
          _hover={{
            opacity: 0.8,
          }}
        >
          Sign up
        </Button>
      </VStack>
    </Container>
  );
};

export default SignUpBanner;
