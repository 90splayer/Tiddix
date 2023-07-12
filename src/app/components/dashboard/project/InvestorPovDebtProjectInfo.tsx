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
      {/* BEFORE WALLET CONFIRMATION */}
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

      {/* AFTER WALLET COMFIRMATION  */}
      <Stack
        spacing="3rem"
        p="3rem"
        bg="#232629"
        borderRadius="20px"
        mb="1.9rem"
        maxW="55rem"
      >
        <Flex align="center" justify="space-between">
          <Box>
            <Text size="body2"> Repayment Amount</Text>
            <Heading fontSize="3.2rem">$ 20,000</Heading>
          </Box>
          <Box>
            <Text size="body2"> Moratorium period</Text>
            <Heading textAlign="right" fontSize="1.6rem">
              2 Months
            </Heading>
          </Box>
        </Flex>

        <Flex maxW="49rem" justify="space-between">
          <Stack spacing="3rem">
            <Box maxW="143px">
              <Text size="body2">Interest</Text>
              <Text size="body2" color="#fff">
                20%
              </Text>
            </Box>
            <Box>
              <Text size="body2">Next repayment </Text>
              <Text size="body2" color="#fff">
                2 January 2023
              </Text>
            </Box>
          </Stack>
          <Stack spacing="3rem">
            <Box maxW="143px">
              <Text size="body2">Period </Text>
              <Text size="body2" color="#fff">
                5 Months
              </Text>
            </Box>
            <Box>
              <Text size="body2">Next Due </Text>
              <Text size="body2" color="#fff">
                $4000
              </Text>
            </Box>
          </Stack>
          <Stack spacing="3rem">
            <Box maxW="143px">
              <Text size="body2">Interest Payment </Text>
              <Text size="body2" color="#fff">
                $2000
              </Text>
            </Box>
            <Box>
              <Text size="body2">Due date </Text>
              <Text size="body2" color="#fff">
                12 April 2023
              </Text>
            </Box>
          </Stack>
        </Flex>

        <Box>
          <Button bg="#485155" border="0px" size="lg" w="100%">
            Proceed to Agreement
          </Button>
        </Box>
      </Stack>

      <Flex p="3rem" bg="#232629" borderRadius="20px">
        <HStack spacing="2rem">
          <Avatar
            src="https://bit.ly/sage-adebayo"
            border="3px solid pink"
            boxSize="40px"
          />
          <Box>
            <Heading fontSize="1.6rem">Smith Nicole</Heading>
            <Text size="body2">Investor</Text>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default InvestorPovDebtProjectInfo;
