import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { verify } from 'app/assets/svgs/home';
import { IoWallet } from 'react-icons/io5';
import React, { FC } from 'react';
import { MdSettings } from 'react-icons/md';
import { IoShareSocialSharp } from 'react-icons/io5';

const Overview: FC = () => {
  return (
    <Box>
      <Container
        maxW="144rem"
        zIndex={3}
        p={{
          base: '3.5rem 2rem',
          sm: '4rem 5rem',
          md: '5rem 5.2rem',
          lg: '5rem 7.2rem',
        }}
      >
        <Flex justify="space-between">
          <Flex gap="4rem">
            <Box>
              <Avatar
                border="2px solid pink"
                boxSize="159px"
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
              />
            </Box>
            <Stack spacing="15px" maxW="403px">
              <HStack spacing="12px">
                <Text fontWeight="700" color="#fff">
                  Segun Adebayo
                </Text>
                <Box>{verify}</Box>
              </HStack>
              <Text>
                Brand / Graphic Design, UI / Visual Design, Product Design
              </Text>
              <Flex gap="12px">
                <Button variant="secondary" size="sm">
                  Edit Profile
                </Button>

                <Flex
                  bg="#232629"
                  align="center"
                  justify="center"
                  borderRadius="100%"
                  w="60px"
                  h="60px"
                >
                  <Icon as={MdSettings} fontSize="2rem" color="#fff" />
                </Flex>

                <Flex
                  bg="#232629"
                  align="center"
                  justify="center"
                  borderRadius="100%"
                  w="60px"
                  h="60px"
                >
                  <Icon as={IoShareSocialSharp} fontSize="2rem" color="#fff" />
                </Flex>
              </Flex>
            </Stack>
          </Flex>
          <Flex
            borderRadius="30px"
            w="41.1rem"
            gap="2.2rem"
            px="3rem"
            align="center"
            h="145px"
            bgGradient="radial-gradient(170.01% 203.82% at 137.98% -39.33%, #FF2727 0%, #FF8CDF 44.52%, #448FFF 100%)'"
          >
            <Flex
              bg="#fff"
              align="center"
              justify="center"
              borderRadius="100%"
              w="70px"
              h="70px"
            >
              <Icon as={IoWallet} fontSize="3.4rem" color="#000" />
            </Flex>
            <Flex align="center" gap="1.2rem">
              <Stack spacing="1rem">
                <Text size="body3" color="#fff">
                  Wallet Balance
                </Text>
                <Text fontSize="3.2rem" fontStyle="700" color="#fff">
                  $50,000
                </Text>
              </Stack>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Overview;
