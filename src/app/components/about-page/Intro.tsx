import { Box, Container, Heading, Text, VStack, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import Hero from '../../assets/images/about/heroImg.png';

const Intro: FC = () => {
  return (
    <Box>
      <Container maxW="144rem" pt="12.2rem" px="0">
        <VStack>
          <Heading
            size="display2"
            textAlign="center"
            maxW="68.4rem"
            pb="3.5rem"
          >
            We take advantage of the shift towards decentralisation in finance
          </Heading>
          <Text size="body1" maxW="72.9rem" textAlign="center" pb="10.7rem">
            We invite investors to the creative space where creator metrics
            (views, engagements, followers, rankings etc) can be used to
            properly determine a creator’s value and prospects for investments.
          </Text>
          <Box>
            <Image src={Hero} alt="hero image" />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Intro;
