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
import angels from '../../assets/images/investor/angel.png';
import { Zoom, Fade } from 'react-reveal';

const Angels: FC = () => {
  return (
    <Box>
      <Container
        maxW="144rem"
        pt="6.2rem"
        px={{ base: '2rem', sm: '5rem', md: ' 7.2rem' }}
      >
        <Flex
          bgColor="#232629"
          align="center"
          flexDir={{ base: 'column-reverse', md: 'row' }}
          gap={10}
          justify="space-between"
          borderRadius="4rem"
          pl={{ base: '3rem', md: '7.2rem', lg: '9.8rem' }}
          pr={{ base: '3rem', md: '7.5rem', lg: '8.9rem' }}
          pt={{ base: '5rem', md: '0' }}
          pb={{ base: '7rem', md: '0' }}
          w="full"
          h={{ md: '60rem', lg: '66.4rem' }}
        >
          <Zoom>
            <Box>
              <Image src={angels} alt="angels-img" />
            </Box>
          </Zoom>

          <Stack>
            <Text
              fontSize={{ base: '1.6rem', md: '2.6rem' }}
              bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
              bgClip="text"
              mb="1.8rem"
            >
              Heros
            </Text>
            <Fade duration="2500">
              <Heading
                maxW="45.8rem"
                size="display1sub"
                pb={{ base: '3rem', md: '5rem', lg: '6.6rem' }}
              >
                The gift that keeps on giving!
              </Heading>
            </Fade>

            <Text maxW="53.8rem">
              <Fade duration="3500">
                At Tiddix we recognise our everyday heroes that are selfless and
                just desire to bask in the joy of fully supporting dreams, no
                strings attached!
              </Fade>
              <br />
              <Fade duration="4500">
                Our Heros invest in projects and dreams and require nothing but
                success back from the creatives.
              </Fade>
            </Text>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Angels;
