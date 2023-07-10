import {
  Stack,
  Flex,
  Heading,
  Button,
  Box,
  Text,
  HStack,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';

const InvestorPovDebtProjectInfo = () => {
  return (
    <Box>
      <Stack
        spacing="3rem"
        p="3rem"
        bg="#232629"
        borderRadius="20px"
        mb="2rem"
        maxW="55rem"
      >
        <Box>
          <Text size="body2"> Loan Amount</Text>
          <Heading fontSize="3.2rem">$ 20,000</Heading>
        </Box>

        <Flex maxW="49rem" flexDir="column">
          <Flex justify="space-between" pb="3rem">
            <Stack>
              <Box maxW="143px">
                <Text size="body2">Interest</Text>
                <Text size="body2" color="#fff">
                  20%
                </Text>
              </Box>
            </Stack>
            <Stack>
              <Box maxW="143px">
                <Text size="body2">Period </Text>
                <Text size="body2" color="#fff">
                  5 Months
                </Text>
              </Box>
            </Stack>
            <Stack>
              <Box maxW="143px">
                <Text size="body2">Interest Payment </Text>
                <Text size="body2" color="#fff">
                  $2000
                </Text>
              </Box>
            </Stack>
          </Flex>
          <Flex gap={16} justify="space-between">
            <Button variant="multiradial" w="100%" fontSize="1.6rem">
              Make Investment
            </Button>
            <Button variant="primary" w="100%" fontSize="1.6rem">
              Gift Creatives
            </Button>
          </Flex>
        </Flex>
      </Stack>

      <Flex p="3rem" bg="#232629" flexDir="column" borderRadius="20px">
        <Text size="body2" pb="3rem">
          Fundraising ends 6 July 2023 at 5:30pm
        </Text>
        <Flex align="center" justify="space-between">
          <Stack maxW="100px">
            <Heading fontSize="2.4rem">6</Heading>
            <Text size="body2">Days</Text>
          </Stack>
          <Stack maxW="100px">
            <Heading fontSize="2.4rem">5</Heading>
            <Text size="body2">Hours</Text>
          </Stack>
          <Stack maxW="100px">
            <Heading fontSize="2.4rem">11</Heading>
            <Text size="body2">Minutes</Text>
          </Stack>
          <Stack maxW="100px">
            <Heading fontSize="2.4rem">25</Heading>
            <Text size="body2">Seconds</Text>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default InvestorPovDebtProjectInfo;
