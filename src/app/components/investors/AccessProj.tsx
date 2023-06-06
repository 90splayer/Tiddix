import {
  Flex,
  Stack,
  Heading,
  Text,
  Box,
  Container,
  HStack,
  Image,
  Avatar,
  Progress,
} from '@chakra-ui/react';
import { verify } from 'app/assets/svgs/home';
import React from 'react';
import { Link } from 'react-router-dom';

const AccessProj = () => {
  return (
    <Box>
      <Container maxW="144rem" p="12.5rem 12rem 7.5rem 7.2rem">
        <Flex
          align="center"
          flexDir={{ base: 'column', md: 'row' }}
          justify="space-between"
          gap={17}
        >
          <Stack
            spacing="54px"
            w={{ base: '100%', md: '50%' }}
            mb={{ base: '5rem', md: 0 }}
          >
            <Heading
              as="h2"
              color="#fff"
              maxW="41.4rem"
              lineHeight="54px"
              fontWeight={700}
              fontSize={{ base: '3.6rem', md: '4.8rem' }}
            >
              Access unlimited projects
            </Heading>
            <Text size="body1" maxW="475px">
              We invite investors to the creative space where creator metrics
              (views, engagements, followers, rankings etc) can be used to
              properly determine a creator’s value and prospects for
              investments.
            </Text>
          </Stack>

          <Flex
            p="1.5rem"
            justify="center"
            align="center"
            maxW="60rem"
            bg="#232629"
          >
            <HStack spacing="14px">
              <Text></Text>
              <Box>
                <Image borderRadius="16px" maxW="76px" h="76px" src="" alt="" />
              </Box>
              <Stack spacing="8.5px">
                <HStack>
                  <Avatar
                    boxSize="19px"
                    ml="8px"
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Text size="body3" color="#fff">
                    Segun Adebayo {''}
                  </Text>
                  <Box>{verify}</Box>
                </HStack>
                <Heading as="h5"></Heading>
                <Text fontSize="1rem"></Text>
              </Stack>
            </HStack>
            <HStack spacing="2.3rem">
              <Text></Text>
              <Box>
                <Progress
                  value={80}
                  size="md"
                  colorScheme="transparent"
                  borderRadius="20px"
                  background="linear-gradient(transparent, transparent) padding-box, linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%) border-box"
                />
              </Box>
            </HStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default AccessProj;
