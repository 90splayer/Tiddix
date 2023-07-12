import { Flex, Container, VStack, Text, Heading } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import { FaMedal } from 'react-icons/fa';
import { MdOutlineManageHistory } from 'react-icons/md';
import { GiTakeMyMoney, GiTeamIdea } from 'react-icons/gi';

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
        pb="15.3rem"
      >
        <Container
          maxW="144rem"
          pos="relative"
          m="0 auto"
          px={{ base: '3rem', md: '7rem', lg: '18.6rem' }}
        >
          <Heading
            as="h2"
            mb="4.7rem"
            textAlign="center"
            fontWeight="700"
            fontSize={{ base: '3.6rem', md: '4.8rem' }}
          >
            Our Impact
          </Heading>
          <Flex align="center" justify="space-between" flexWrap="wrap">
            <VStack>
              <Box mb="3rem">
                <FaMedal size="2.4rem" color="white" />
              </Box>
              <Heading as="h2" textAlign="center" fontWeight="700" size="body1">
                {counterOn && (
                  <CountUp start={0} end={45} duration={2} delay={0} />
                )}
                %
              </Heading>
              <Text>Success Rate</Text>
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
              <Heading as="h2" textAlign="center" fontWeight="700" size="body1">
                7000
              </Heading>
              <Text>Projects Launched</Text>
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
              <Heading as="h2" textAlign="center" fontWeight="700" size="body1">
                £
                {counterOn && (
                  <CountUp start={100} end={500} duration={3} delay={0} />
                )}
                k+
              </Heading>
              <Text>Raised Amount</Text>
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
              <Heading as="h2" textAlign="center" fontWeight="700" size="body1">
                1
              </Heading>
              <Text>Years of Service</Text>
            </VStack>
          </Flex>
        </Container>
      </Flex>
    </ScrollTrigger>
  );
};

export default Impact;
