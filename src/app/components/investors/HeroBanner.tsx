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
import { Bounce, Fade } from 'react-reveal';

const HeroBanner = () => {
  return (
    <Flex
      align="center"
      justify="center"
      flexDir="column"
      w="full"
      h={{ base: ' auto', md: 'calc(100vh - 100px)' }}
    >
      <Container
        maxW="144rem"
        m="0 auto"
        pt={{ base: '9rem', md: '0' }}
        pos="relative"
      >
        <VStack spacing="48px">
          <Text
            fontSize={{ base: '1.6rem', md: '2.6rem' }}
            bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
            bgClip="text"
          >
            INVESTORS
          </Text>
          <Bounce duration="2500">
            <Heading
              size="display1sub"
              textAlign="center"
              maxW={{ base: '35rem', sm: '59rem' }}
            >
              The catalyst of dream making!
            </Heading>
          </Bounce>

          <Fade duration="2500">
            <Text maxW="70rem" size="body1" mt="5px" textAlign="center">
              There are fewer things rewarding in life than making people’s
              dreams come true. With small amounts of money sitting in your bank
              account, you can be part of a budding creatives’ success story.
            </Text>
          </Fade>
        </VStack>

        <Box
          pos="absolute"
          right={{ base: 10, md: 53 }}
          bottom={{ base: -100, md: 30 }}
        >
          <Image src={art} alt="art" w={{ base: '80px', md: '100%' }} />
        </Box>
        <Box
          pos="absolute"
          left={35}
          bottom={{ base: 130, md: 30 }}
          display={{ base: 'none', md: 'unset' }}
        >
          <Image src={photography} alt="photography" />
        </Box>
        <Box pos="absolute" left={{ base: 30, md: 100, lg: 161 }} top={10}>
          <Image
            src={piechart}
            alt="piechart"
            maxW={{ base: '80px', md: '100%' }}
          />
        </Box>
        <Box
          pos="absolute"
          right={{ base: 50, md: 170, lg: 272 }}
          top={{ base: 10, md: '-50px' }}
        >
          <Image src={music} alt="music" maxW={{ base: '80px', md: '100%' }} />
        </Box>
        <Box
          pos="absolute"
          left={{ base: '3%', md: '30%' }}
          bottom={{ base: '-25%', md: '-40%' }}
        >
          <Image
            w={{ base: '80px', md: '100%' }}
            src={paint}
            alt="paint face"
          />
        </Box>
      </Container>
      <Flex
        align="center"
        pos="absolute"
        top={0}
        display={{ base: 'none', md: 'unset' }}
      >
        <Image src={circle} alt="cicle" />
      </Flex>
    </Flex>
  );
};

export default HeroBanner;
