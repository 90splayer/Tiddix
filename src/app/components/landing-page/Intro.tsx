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

const Intro: FC = () => {
  const authContext = useAuth();
  console.log('AUTH', authContext);

  return (
    <Box pos="relative">
      <Container
        maxW="144rem"
        p={{
          base: '7rem 2.5rem 5rem ',
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
            mb={{ base: '5rem', md: 0 }}
          >
            <Heading
              size="display1"
              mb={{ base: '3rem', md: '5rem' }}
              maxW="52.6rem"
            >
              Get all the <br />
              <Heading
                as="span"
                bgGradient="linear(to-tr, #448FFF,#FF8CDF)"
                bgClip="text"
                size="display1"
              >
                support
              </Heading>{' '}
              you need as a creative.
            </Heading>
            <Text size="body1" maxW="550px" pb={{ base: '38px', md: '76px' }}>
              We are a reliable and innovative digital platform that provides
              hassle-free, quick debt and equity funding.
            </Text>
            <Flex gap="24px">
              <Link to="/signup">
                <Button variant="multicolor" size="lg">
                  Get Started
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg">Learn More</Button>
              </Link>
            </Flex>
          </Stack>

          <Box zIndex={2}>
            <Image src={heroImg} alt="hero image" />
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
