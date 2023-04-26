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

const BecomeInvestor: FC = () => {
  return (
    <Box>
      <Container maxW="144rem" p="7.5rem 6.9rem 7.5rem 7.2rem">
        <Flex
          align="center"
          flexDir={{ base: 'column', md: 'row' }}
          justify="space-between"
        >
          <Stack
            spacing="46px"
            w={{ base: '100%', md: '50%' }}
            mb={{ base: '5rem', md: 0 }}
          >
            <Heading
              as="h2"
              color="#fff"
              maxW="25.4rem"
              lineHeight="54px"
              fontWeight={700}
              fontSize={{ base: '3.6rem', md: '4.8rem' }}
            >
              Become an investor
            </Heading>
            <Text
              color="#99A1AA"
              fontSize={{ base: '1.6rem', sm: '2rem' }}
              maxW="395px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Flex gap="24px">
              <Button
                bg="#fff"
                borderRadius="10rem"
                w="20.5rem"
                h="59px"
                fontSize="1.6rem"
                transition="0.5s ease"
                boxShadow="0px 4px 50px rgba(0, 0, 0, 0.15)"
                _hover={{
                  opacity: 0.8,
                }}
              >
                Become an investor
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
