import { Flex, Container, VStack, Text, Heading } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import { FaMedal } from 'react-icons/fa';
import { MdOutlineManageHistory } from 'react-icons/md';
import { GiTakeMyMoney, GiTeamIdea } from 'react-icons/gi';
import { Fade } from 'react-reveal';

const Impact: FC = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <Flex
        flexDir="column"
        justify="center"
        align="center"
        w="full"
        pt="5.8rem"
        pb={{ base: '7.5rem', md: '15.3rem' }}
      >
        <Container
          maxW="144rem"
          pos="relative"
          m="0 auto"
          px={{ base: '2rem', md: '7rem', lg: '18.6rem' }}
        >
          <Fade duration={3500}>
            <Heading as="h2" mb="4.7rem" textAlign="center" size="display1sub">
              Our Impact
            </Heading>
          </Fade>

          <Flex align="center" gap="1rem" justify="space-between">
            <VStack>
              <Box mb="3rem">
                <FaMedal size="2.4rem" color="white" />
              </Box>
              <Heading
                as="h2"
                textAlign="center"
                fontWeight="700"
                fontSize={{ base: '2rem', md: '4.8rem' }}
              >
                {counterOn && (
                  <CountUp start={0} end={45} duration={2} delay={0} />
                )}
                %
              </Heading>
              <Text
                fontSize={{ base: '1.6rem', md: '2rem' }}
                textAlign="center"
              >
                Success Rate
              </Text>
            </VStack>
            <Box
              h="139px"
              w="4px"
              bg="linear-gradient(180deg, rgba(218, 218, 218, 0.00) 1.04%, #B584C6 53.65%, rgba(217, 217, 217, 0.00) 100%)"
            ></Box>
            <VStack>
              <Box mb="3rem">
                <GiTeamIdea size="2.4rem" color="white" />
              </Box>
              <Heading
                as="h2"
                textAlign="center"
                fontWeight="700"
                fontSize={{ base: '2rem', md: '4.8rem' }}
              >
                7000
              </Heading>
              <Text
                fontSize={{ base: '1.6rem', md: '2rem' }}
                textAlign="center"
              >
                Projects Launched
              </Text>
            </VStack>
            <Box
              h="139px"
              w="4px"
              bg="linear-gradient(180deg, rgba(218, 218, 218, 0.00) 1.04%, #B584C6 53.65%, rgba(217, 217, 217, 0.00) 100%)"
            ></Box>
            <VStack>
              <Box mb="3rem">
                <GiTakeMyMoney size="2.4rem" color="white" />
              </Box>
              <Heading
                as="h2"
                textAlign="center"
                fontWeight="700"
                fontSize={{ base: '2rem', md: '4.8rem' }}
              >
                £
                {counterOn && (
                  <CountUp start={100} end={500} duration={3} delay={0} />
                )}
                k+
              </Heading>
              <Text
                fontSize={{ base: '1.6rem', md: '2rem' }}
                textAlign="center"
              >
                Raised Amount
              </Text>
            </VStack>
            <Box
              h="139px"
              w="4px"
              bg="linear-gradient(180deg, rgba(218, 218, 218, 0.00) 1.04%, #B584C6 53.65%, rgba(217, 217, 217, 0.00) 100%)"
            ></Box>
            <VStack>
              <Box mb="3rem">
                <MdOutlineManageHistory size="2.4rem" color="white" />
              </Box>
              <Heading
                as="h2"
                textAlign="center"
                fontWeight="700"
                fontSize={{ base: '2rem', md: '4.8rem' }}
              >
                1
              </Heading>
              <Text
                fontSize={{ base: '1.6rem', md: '2rem' }}
                textAlign="center"
              >
                Years of Service
              </Text>
            </VStack>
          </Flex>
        </Container>
      </Flex>
    </ScrollTrigger>
  );
};

export default Impact;
