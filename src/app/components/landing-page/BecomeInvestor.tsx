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
      <Container maxW="144rem" p="9.5rem 6.9rem 7.5rem 7.2rem">
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
              <Heading as="h2" maxW="35.4rem" size="display1sub">
                Become an investor
              </Heading>
            </Fade>

            <Fade>
              <Text size="body1" maxW="475px">
                Be the catalyst and spark to ignite the flame in the journey of
                a creative. You just might be funding the next big thing!
              </Text>
            </Fade>

            <Flex gap="24px">
              <Link to="/dashboard">
                <Button
                  bg="#fff"
                  borderRadius="10rem"
                  w="20.5rem"
                  h="59px"
                  outline="none"
                  border="none"
                  color="#000"
                  fontSize="1.6rem"
                  transition="0.5s ease"
                  boxShadow="0px 4px 50px rgba(0, 0, 0, 0.15)"
                  _hover={{
                    opacity: 0.8,
                    transform: 'scale(1.02)',
                  }}
                >
                  Become an investor
                </Button>
              </Link>{' '}
              <Link to="/about">
                <Button
                  border="1px solid #fff"
                  borderRadius="10rem"
                  w="14.7rem"
                  h="59px"
                  fontSize="1.6rem"
                  transition="0.5s ease"
                  boxShadow="0px 4px 50px rgba(0, 0, 0, 0.15)"
                  _hover={{
                    opacity: 0.8,
                    transform: 'scale(1.02)',
                  }}
                  bg="transparent"
                  color="#fff"
                >
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
