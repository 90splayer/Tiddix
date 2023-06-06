import {
  Box,
  Text,
  Container,
  Heading,
  VStack,
  Flex,
  Image,
  calc,
} from '@chakra-ui/react';
import circle from '../../assets/images/investor/circle.png';
import React from 'react';

const HeroBanner = () => {
  return (
    <Flex
      align="center"
      justify="center"
      flexDir="column"
      w="full"
      className="hero"
    >
      <Container maxW="144rem">
        <VStack spacing="48px">
          <Text
            size="body2"
            bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
            bgClip="text"
          >
            INVESTORS
          </Text>
          <Heading size="display2" textAlign="center" maxW="65rem">
            This should have an investor tag line for this page
          </Heading>
          <Text maxW="70rem" size="body1" mt="5px" textAlign="center">
            We invite investors to the creative space where creator metrics
            (views, engagements, followers, rankings etc) can be used to
            properly determine a creator’s value and prospects for investments.
          </Text>
        </VStack>
      </Container>
      <Flex align="center" pos="absolute" top={0}>
        <Image src={circle} alt="cicle" />
      </Flex>
    </Flex>
  );
};

export default HeroBanner;
