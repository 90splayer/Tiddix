import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  Flex,
  Stack,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import creativeDreams from '../../assets/images/creatives/creative.png';
import raisedFund from '../../assets/images/creatives/raise-fund.png';
import { Bounce, Fade } from 'react-reveal';

const Intro: FC = () => {
  return (
    <Box>
      <Container
        maxW="144rem"
        pt={{ base: '9rem', md: '10.7rem' }}
        pb={{ base: '5rem', md: '7.2rem' }}
        px={{ bae: '2rem', sm: '5rem', md: '7.1rem' }}
      >
        <Flex
          bgColor="#232629"
          align="center"
          flexDir={{ base: 'column', md: 'row' }}
          mb="4.2rem"
          justify="space-between"
          borderRadius="4rem"
          pt={{ base: '5rem', md: '0' }}
          pl={{ base: '3rem', sm: '5rem', md: '9.3rem' }}
          pr={{ base: '2rem', sm: '4rem', md: '8.4rem' }}
          w="full"
          h={{ base: 'auto', md: '47.6rem' }}
        >
          <Stack mb={{ base: '3rem', md: '0' }}>
            <Text
              fontSize="2.6rem"
              bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
              bgClip="text"
              mb="1.8rem"
            >
              Creatives
            </Text>
            <Bounce duration="3500">
              <Heading
                maxW="51rem"
                size="display1sub"
                pb={{ base: '3rem', md: '4.6rem' }}
              >
                Achieving your dreams starts here!
              </Heading>
            </Bounce>

            <Fade duration="3500">
              <Text maxW="47.4rem">
                Your talent, projects, and general musings are valid and the
                world should see it
              </Text>
            </Fade>
          </Stack>
          <Fade duration="1500" right>
            <Flex flexDir="column" alignSelf="end">
              <Image src={creativeDreams} alt="creatives-dreams" />
            </Flex>
          </Fade>
        </Flex>

        <Flex
          bgColor="#232629"
          align="center"
          mb="4.2rem"
          flexDir={{ base: 'column-reverse', md: 'row' }}
          justify="space-between"
          borderRadius="4rem"
          pos="relative"
          pt={{ base: '5rem', md: '0' }}
          px={{ base: '3rem', sm: '5rem', md: '9.3rem' }}
          w="full"
          h={{ base: 'auto', md: '47.6rem' }}
        >
          <Fade duration="2500" left>
            <Flex flexDir="column" alignSelf="end">
              <Image src={raisedFund} alt="fund-raising-image" />
            </Flex>
          </Fade>

          <Fade duration="2500">
            <Heading
              fontSize="2.8rem"
              maxW="50.6rem"
              mb={{ base: '6rem', md: '0' }}
            >
              Tiddix offers you the easiest way to raise funds to support your
              career, aspirations, ideas and projects.
            </Heading>
          </Fade>

          <Box
            w="32rem"
            h="32rem"
            pos="absolute"
            display={{ base: 'none', lg: 'unset' }}
            bottom={0}
            left={0}
            borderRadius="32rem"
            bgColor="#817BEF"
            opacity="0.8"
            filter="blur(250px)"
          ></Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Intro;
