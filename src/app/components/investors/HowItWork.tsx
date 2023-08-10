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
import { Fade } from 'react-reveal';
import { investPathData } from '../data/investPath';
import HowItWorkCard from './HowItWorkCard';

const HowItWork = () => {
  return (
    <Container
      maxW="144rem"
      p={{
        base: '5rem 1.9rem 7rem',
        sm: '7rem 5rem ',
        md: '7.5rem 7.2rem',
      }}
    >
      <Flex align="center" flexDir="column">
        <Fade duration={3500}>
          <Heading
            as="h2"
            size="display1sub"
            textAlign="center"
            mb={{ base: '3rem', md: '6rem' }}
          >
            How it works
          </Heading>
        </Fade>

        <Fade>
          <Text
            maxW="635px"
            mb={{ base: '6rem', md: '10rem' }}
            textAlign="center"
          >
            Be the catalyst and spark to ignite the flame in the journey of a
            creative. You just might be funding the next big thing!
          </Text>
        </Fade>
      </Flex>
      <Stack spacing="3.2rem" mb={{ base: '8rem', sm: '13.1rem' }}>
        {investPathData.map((path) => (
          <Box key={path.id}>
            <HowItWorkCard icon={path.img} count={path.id} desc={path.desc} />
          </Box>
        ))}
      </Stack>

      <Flex justify="center">
        <Fade duration={3500}>
          <Heading maxW="69.1rem" size="display1sub" textAlign="center">
            You fund their dreams, they fund your wallet and it’s win-win for
            all!🤑
          </Heading>
        </Fade>
      </Flex>
    </Container>
  );
};

export default HowItWork;
