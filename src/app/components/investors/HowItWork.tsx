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
import { investPathData } from '../data/investPath';
import HowItWorkCard from './HowItWorkCard';

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
          <Text maxW="635px" mb="10rem" textAlign="center">
            Be the catalyst and spark to ignite the flame in the journey of a
            creative. You just might be funding the next big thing!
          </Text>
        </Fade>
      </Flex>
      <Stack spacing="3.2rem" mb="13.1rem">
        {investPathData.map((path) => (
          <Box key={path.id}>
            <HowItWorkCard
              icon={path.img}
              count={path.id}
              desc={path.desc}
              w={''}
            />
          </Box>
        ))}
      </Stack>

      <Flex justify="center">
        <Fade duration={3500}>
          <Heading maxW="89.1rem" size="display1" textAlign="center">
            You fund their dreams, they fund your wallet and it’s win-win for
            all!🤑
          </Heading>
        </Fade>
      </Flex>
    </Container>
  );
};

export default HowItWork;
