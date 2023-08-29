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
import shakes from '../../assets/images/investor/golden-goose1.png';
import { Zoom, Fade } from 'react-reveal';

const Sharks: FC = () => {
  return (
    <Box>
      <Container
        maxW="144rem"
        pt="6.2rem"
        pos="relative"
        px={{ base: '2rem', sm: '5rem', md: ' 7.2rem' }}
      >
        <Flex
          bgColor="#232629"
          align="center"
          flexDir={{ base: 'column', md: 'row' }}
          gap={10}
          // justify="space-between"
          borderRadius="4rem"
          pl={{ base: '3rem', md: '7.2rem', lg: '9.8rem' }}
          pr={{ base: '3rem', md: '7.5rem', lg: '8.9rem' }}
          pt={{ base: '5rem', md: '0' }}
          pb={{ base: '7rem', md: '0' }}
          w="full"
          h={{ md: '60rem', lg: '66.4rem' }}
        >
          <Stack>
            <Text
              fontSize={{ base: '1.6rem', md: '2.6rem' }}
              bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
              bgClip="text"
              mb="1.8rem"
            >
              Sharks
            </Text>
            <Fade duration="2500">
              <Heading
                maxW="45.8rem"
                size="display1sub"
                pb={{ base: '3rem', md: '5rem', lg: '6.6rem' }}
              >
                Finding the Golden Goose
              </Heading>
            </Fade>

            <Text maxW="52.8rem">
              <Fade duration="3500">
                Do you believe in the future of the creative economy?
                <br /> Do you want to be an early stage investor in some of the
                world's coolest creatives and their projects?
              </Fade>
              <br />
              <Fade duration="4500">
                Tiddix will be bringing you daily opportunities from about the
                globe, vetted with our algorithm for a trusted evaluation.
              </Fade>
            </Text>
          </Stack>
          <Zoom>
            <Box>
              <Image src={shakes} alt="investors-img" />
            </Box>
          </Zoom>
        </Flex>
      </Container>
    </Box>
  );
};

export default Sharks;
