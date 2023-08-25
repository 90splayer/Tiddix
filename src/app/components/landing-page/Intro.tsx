import React, { FC } from 'react';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Image,
  Text,
  Container,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/home/heroImg.png';
import useAuth from 'app/hooks/useAuth';
import { Zoom, Fade } from 'react-reveal';

const Intro: FC = () => {
  const authContext = useAuth();

  return (
    <Box pos="relative">
      <Container
        maxW="144rem"
        p={{
          base: '7rem 1.8rem 5rem ',
          md: '7rem 3rem 5rem ',
          lg: '11.7rem 10.2rem 8.4rem 7.2rem',
        }}
      >
        <Flex
          align="center"
          flexDir={{ base: 'column', md: 'row' }}
          justify="space-between"
        >
          <Stack
            w={{ base: '100%', md: '50%' }}
            zIndex={3}
            mb={{ base: '7.7rem', md: 0 }}
          >
            <Fade duration={3500}>
              <Heading
                size="display1"
                mb={{ base: '3rem', md: '5rem' }}
                maxW="52.6rem"
              >
                Funding for
                <br />
                <Heading
                  as="span"
                  bgGradient="linear(to-tr, #448FFF,#FF8CDF)"
                  bgClip="text"
                  size="display1"
                >
                  Creativity{' '}
                  <Heading as="span" size="display1">
                    {' '}
                    and
                  </Heading>
                </Heading>{' '}
                 {''}
                <Heading
                  as="span"
                  bgGradient="linear(to-tr, #448FFF,#FF8CDF)"
                  bgClip="text"
                  size="display1"
                >
                  Talent
                </Heading>{' '}
              </Heading>
            </Fade>

            <Fade duration={4500}>
              <Text size="body1" maxW="550px" pb={{ base: '45px', md: '76px' }}>
                We provide a hassle-free digital platform that serves as a
                launchpad for dreams, creativity and talent! Join us today and
                show the world who you really are
              </Text>
            </Fade>

            <Flex gap={{ base: '1.5rem', sm: '2.4rem' }}>
              <Link to="/signup">
                <Button variant="multicolor" size="lg">
                  Get Started
                </Button>
              </Link>
              <Link to="/creatives">
                <Button size="lg">Learn More</Button>
              </Link>
            </Flex>
          </Stack>

          <Box zIndex={2}>
            <Zoom>
              <Image src={heroImg} alt="hero image" />
            </Zoom>
          </Box>

          <Box
            w="46.6rem"
            h="46.6rem"
            pos="absolute"
            display={{ base: 'none', lg: 'unset' }}
            right="-292"
            bgColor="#F806CC"
            opacity="0.7"
            filter="blur(250px)"
          ></Box>
          <Box
            w="46.6rem"
            h="46.6rem"
            pos="absolute"
            display={{ base: 'none', lg: 'unset' }}
            bottom={0}
            left="-292"
            bgColor="#6E35FF"
            opacity="0.7"
            filter="blur(250px)"
          ></Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Intro;
