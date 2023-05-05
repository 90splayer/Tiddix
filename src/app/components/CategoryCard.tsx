import {
  Avatar,
  Box,
  Card,
  Text,
  Flex,
  Image,
  Progress,
  Stack,
  HStack,
} from '@chakra-ui/react';
import { verify } from 'app/assets/svgs/home';
import React, { FC } from 'react';

const CategoryCard: FC = () => {
  return (
    <Card
      maxW="63.6rem"
      bgColor="#232629"
      borderRadius="30px"
      p="17px 15px 30px"
    >
      <Box borderRadius="20px" mb="15px">
        <Image
          w="59rem"
          h="26.8rem"
          borderRadius="20px"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="image"
        />
      </Box>
      <Stack spacing="1.1rem">
        <Flex justify="space-between" align="center">
          <HStack spacing="1rem">
            <Avatar
              boxSize="25px"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />
            <Flex gap="3px" align="center">
              <Text fontSize="1.6rem" color="#fff">
                Segun Adebayo
              </Text>
              <Box w="16.58px" h="16.58px">
                {verify}
              </Box>
            </Flex>
          </HStack>
          <Text>
            Target:{' '}
            <Text
              as="span"
              bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
              bgClip="text"
            >
              $4,000
            </Text>
          </Text>
        </Flex>
        <Flex justify="space-between" align="center">
          <Text fontSize="2rem" color="#fff" fontWeight="700">
            The Plant Picazzo
          </Text>
          <Progress
            borderRadius="10px"
            bgColor="#485155"
            colorScheme="navy"
            // bgGradient="linear(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%)"
            w="8.8rem"
            size="md"
            value={25}
          />
        </Flex>
        <Flex justify="space-between" align="center">
          <Text fontSize="1.4rem">Art</Text>
          <Text>45%</Text>
        </Flex>
      </Stack>
    </Card>
  );
};

export default CategoryCard;
