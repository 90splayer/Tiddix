import React, { useState } from 'react';
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
import useApiPrivate from 'app/hooks/useApiPrivate';
import { chkToaster } from 'app/components/common/Toaster';

const InvestorPovDebtProjectInfo = ({ id, amount, interest }: any) => {
  const [loading, setLoading] = useState(false);
  const [balanceConfirmed, setBalanceConfirmed] = useState(false);

  const apiPrivate = useApiPrivate();

  const handleSubmit = () => {
    setLoading(true);

    let url: string;

    if (balanceConfirmed) {
      url = `/projects/${id}/invest`;
    } else {
      url = `/projects/${id}/confirm-investor-balance`;
    }

    apiPrivate
      .post(url, { amount })
      .then(({ data }) => {
        if (balanceConfirmed) {
          chkToaster.success({ title: 'Investment Successful' });
          setBalanceConfirmed(false);
        } else {
          if (data.status) {
            setBalanceConfirmed(data.status);
          } else {
            chkToaster.error({ title: 'Wallet balance insufficient' });
          }
        }
        setLoading(false);
      })
      .catch(() => {
        chkToaster.error({ title: 'Something went wrong, please try again' });
        setLoading(false);
      });
  };

  return (
    <Box>
      {balanceConfirmed ? (
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
            <Button
              variant="multiradial"
              w="100%"
              fontSize="1.6rem"
              onClick={handleSubmit}
              isLoading={loading}
            >
              Complete Investment
            </Button>
          </Box>
        </Stack>
      ) : (
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
            <Heading fontSize="3.2rem">${amount}</Heading>
          </Box>

          <Flex maxW="49rem" flexDir="column">
            <Flex justify="space-between" pb="3rem">
              <Stack>
                <Box maxW="143px">
                  <Text size="body2">Interest</Text>
                  <Text size="body2" color="#fff">
                    {interest}%
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
              <Button
                variant="multiradial"
                w="100%"
                fontSize="1.6rem"
                onClick={handleSubmit}
                isLoading={loading}
              >
                Make Investment
              </Button>
              <Button variant="primary" w="100%" fontSize="1.6rem">
                Gift Creatives
              </Button>
            </Flex>
          </Flex>
        </Stack>
      )}

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
