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
import art from '../../assets/images/investor/art.png';
import photography from '../../assets/images/investor/photography.png';
import piechart from '../../assets/images/investor/piecart.png';
import music from '../../assets/images/investor/music.png';
import paint from '../../assets/images/investor/paint-art.png';
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
      <Container maxW="144rem" m="0 auto" pos="relative">
        <VStack spacing="48px">
          <Text
            fontSize="2.6rem"
            bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
            bgClip="text"
          >
            INVESTORS
          </Text>
          <Heading size="display1sub" textAlign="center" maxW="50rem">
            The catalyst of dream making!
          </Heading>
          <Text maxW="70rem" size="body1" mt="5px" textAlign="center">
            There are fewer things rewarding in life than making people’s dreams
            come true. With small amounts of money sitting in your bank account,
            you can be part of a budding creatives’ success story.
          </Text>
        </VStack>

        <Box pos="absolute" right={53} bottom={30}>
          <Image src={art} alt="art" />
        </Box>
        <Box pos="absolute" left={35} bottom={30}>
          <Image src={photography} alt="photography" />
        </Box>
        <Box pos="absolute" left={161} top={10}>
          <Image src={piechart} alt="piechart" />
        </Box>
        <Box pos="absolute" right={272} top="-50px">
          <Image src={music} alt="music" />
        </Box>
        <Box pos="absolute" left="30%" bottom="-40%">
          <Image src={paint} alt="paint face" />
        </Box>
      </Container>
      <Flex align="center" pos="absolute" top={0}>
        <Image src={circle} alt="cicle" />
      </Flex>
    </Flex>
  );
};

export default HeroBanner;
