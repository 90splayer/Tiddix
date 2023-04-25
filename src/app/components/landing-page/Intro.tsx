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

const Intro: FC = () => {
  return (
    <Box>
      <Container maxW="144rem" p="11.7rem 0 8.4rem 7.2rem">
        <Flex
          align="center"
          flexDir={{ base: 'column', md: 'row' }}
          justify="space-between"
        >
          <Stack w={{ base: '100%', md: '50%' }} mb={{ base: '5rem', md: 0 }}>
            <Heading
              as="h2"
              color="#fff"
              mb={{ base: '3rem', md: '5rem' }}
              maxW="52.6rem"
              lineHeight={{ base: '48px', sm: '67px', lg: '73px' }}
              fontWeight={700}
              fontSize={{ base: '4.2rem', md: '6.4rem' }}
            >
              Get all the <br />
              <Heading
                as="span"
                bgGradient="linear(to-tr, #448FFF,#FF8CDF)"
                bgClip="text"
                lineHeight={{ base: '48px', sm: '67px', lg: '73px' }}
                fontWeight={700}
                fontSize={{ base: '4.2rem', md: '6.4rem' }}
              >
                support
              </Heading>{' '}
              you need as a creative.
            </Heading>
            <Text
              color="#99A1AA"
              fontSize={{ base: '1.6rem', sm: '2rem' }}
              maxW="550px"
              pb={{ base: '38px', md: '76px' }}
            >
              We are a reliable and innovative digital platform that provides
              hassle-free, quick debt and equity funding.
            </Text>
            <Flex gap="24px">
              <Button
                bgGradient="linear(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%)"
                borderRadius="10rem"
                w="14.7rem"
                h="59px"
                fontSize="1.6rem"
                transition="0.5s ease"
                boxShadow="0px 4px 50px rgba(0, 0, 0, 0.15)"
                _hover={{
                  opacity: 0.8,
                }}
              >
                Get Started
              </Button>
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
                }}
                bg="transparent"
                color="#fff"
              >
                Learn More
              </Button>
            </Flex>
            <Link to="/contact"></Link>
          </Stack>

          <Box>
            <Image src={heroImg} alt="hero image" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Intro;
