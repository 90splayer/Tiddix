import React, { FC } from 'react';
import {
  Avatar,
  Box,
  Flex,
  Image,
  Text,
  HStack,
  Heading,
  Stack,
  Button,
} from '@chakra-ui/react';
import ProjectCard from 'app/components/ProjectCard';
import { projectData } from 'app/components/data/ProjectData';
import { verify } from 'app/assets/svgs/home';

const MainInvestment: FC = () => {
  return (
    <Box w="100%" borderLeft="1px solid #485155" pl="4rem" py="3rem" h="auto">
      <Flex
        align="center"
        gap="3rem"
        borderBottom="1px solid #485155"
        py="2rem"
      >
        <Box>
          <Text>1</Text>
        </Box>
        <Flex w="100%" justify="space-between" align="center">
          <HStack spacing="19px">
            <Box boxSize="10rem">
              <Image
                w="100%"
                h="10rem"
                borderRadius="2rem"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="dan"
              />
            </Box>
            <Stack>
              <HStack>
                <Avatar
                  boxSize="25px"
                  name="dan abramov"
                  src="https://bit.ly/dan-abramov"
                />
                <Text size="body2" color="#fff">
                  Dan Abramov
                </Text>
                <Box>{verify}</Box>
              </HStack>
              <Heading size="h3">Plant Pizzaro</Heading>
              <Text fontSize="1.4rem">Debt</Text>
            </Stack>
          </HStack>
          <Stack>
            <Text size="body2">Repayment Amount</Text>
            <Text color="#fff">£ 20,000</Text>
          </Stack>
          <Stack>
            <Text size="body2">Interest</Text>
            <Text color="#fff">20%</Text>
          </Stack>
          <Stack>
            <Text size="body2">Period</Text>
            <Text color="#fff">5 Month</Text>
          </Stack>
          <Stack>
            <Text size="body2">Interest Payment</Text>
            <Text color="#fff">£ 2000</Text>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainInvestment;
