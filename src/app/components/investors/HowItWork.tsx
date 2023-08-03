import React from 'react';
import {
  Container,
  Flex,
  Heading,
  Box,
  Image,
  Text,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import icon from '../../assets/images/creatives/raise-fund.png';

const HowItWork = () => {
  return (
    <Container maxW="144rem" p="7.5rem 7.2rem">
      <Flex align="center" flexDir="column">
        <Fade duration={3500}>
          <Heading as="h2" size="display1sub" textAlign="center" mb="6rem">
            How it works
          </Heading>
        </Fade>

        <Fade>
          <Text maxW="635px" mb="10rem">
            Be the catalyst and spark to ignite the flame in the journey of a
            creative. You just might be funding the next big thing!
          </Text>
        </Fade>
        <Flex
          p="7.5rem 15rem 7.4rem 8.7rem"
          align="center"
          justify="space-between"
          w="100%"
          borderRadius="4rem"
          bgColor="rgb(152 151 151 / 25%)"
          filter="drop-shadow(2px 4px 6px black)"
          sx={{ WebkitBackdropFilter: 'blur(8px)' }}
          boxShadow="inset 0 0 0 100% rgba(255,255,255,0.08)"
        >
          <Stack>
            <Heading size="display1" color="#485155">
              01
            </Heading>
            <Heading size="display2" maxW="37.5rem">
              Pick your path, debt or equity
            </Heading>
          </Stack>

          <Box>
            <Image src={icon} zIndex={50000} alt="journey-step-img" />
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default HowItWork;
