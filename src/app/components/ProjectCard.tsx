import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Text,
  Flex,
  Image,
  Progress,
  Heading,
  HStack,
} from '@chakra-ui/react';
import { debt } from 'app/assets/svgs/dashboard/dashboard';
import { verify } from 'app/assets/svgs/home';
import React from 'react';

const ProjectCard = () => {
  return (
    <Card maxW="30rem" bgColor="#232629" borderRadius="30px" p="16px 14px 37px">
      <CardHeader p="0">
        <Flex gap="1rem" alignItems="center">
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
        </Flex>
      </CardHeader>
      <Box borderRadius="20px" my="20px" pos="relative">
        <Image
          borderRadius="20px"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="image"
        />
        <Box pos="absolute" bottom={15} left={15}>
          <Text fontWeight={700} fontSize="2rem" color="#fff">
            The Plant Picazzo
          </Text>
          <Text color="#99A1AA" fontSize="1.4rem">
            Art
          </Text>
        </Box>
      </Box>
      <Flex justify="space-between" align="center" color="#fff">
        <Box>
          <HStack mb="15px">
            <Box>{debt}</Box>
            <Heading fontSize="1.6rem">Equity</Heading>
          </HStack>

          <Heading fontSize="2.4rem">$ 2,000</Heading>
        </Box>
        <Box>
          <Text mb="15px" fontSize="1.6rem" textAlign="right" color="#99A1AA">
            25%
          </Text>
          <Progress
            value={25}
            size="md"
            colorScheme="transparent"
            borderRadius="20px"
            background="linear-gradient(transparent, transparent) padding-box, linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%) border-box"
            w="8.8rem"
          />
        </Box>
      </Flex>
    </Card>
  );
};

export default ProjectCard;
