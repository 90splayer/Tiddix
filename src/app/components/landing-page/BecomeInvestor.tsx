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
import graphImg from '../../assets/images/home/graph.png';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const BecomeInvestor: FC = () => {
  return (
    <Box>
      <Container
        maxW="144rem"
        p={{ base: '7.5rem 2rem 4rem', md: '9.5rem 6.9rem 7.5rem 7.2rem' }}
      >
        <Flex
          align="center"
          flexDir={{ base: 'column', md: 'row' }}
          justify="space-between"
        >
          <Stack
            spacing="46px"
            w={{ base: '100%', md: '50%' }}
            mb={{ base: '5rem', md: 0 }}
            letterSpacing="1px"
          >
            <Fade duration={3500}>
              <Heading
                as="h2"
                textAlign={{ base: 'center', md: 'inherit' }}
                maxW={{ base: '100%', md: '35.4rem' }}
                size="display1sub"
              >
                Become an investor
              </Heading>
            </Fade>

            <Fade>
              <Text
                size="body1"
                maxW={{ base: '100%', md: '475px' }}
                textAlign={{ base: 'center', md: 'inherit' }}
              >
                Be the catalyst and spark to ignite the flame in the journey of
                a creative. You just might be funding the next big thing!
              </Text>
            </Fade>

            <Flex gap="24px" flexDir={{ base: 'column', md: 'row' }}>
              <Link to="/dashboard">
                <Button
                  variant="whitebg"
                  size="lg"
                  w={{ base: '100%', md: '20.5rem' }}
                  h="59px"
                  transition="0.5s ease"
                  _hover={{
                    opacity: 0.8,
                    transform: 'scale(1.02)',
                  }}
                >
                  Become an investor
                </Button>
              </Link>{' '}
              <Link to="/corporate-profile">
                <Button size="lg" h="59px" w={{ base: '100%', md: '14.7rem' }}>
                  Learn More
                </Button>
              </Link>
            </Flex>
          </Stack>

          <Box>
            <Image src={graphImg} alt="hero image" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default BecomeInvestor;
