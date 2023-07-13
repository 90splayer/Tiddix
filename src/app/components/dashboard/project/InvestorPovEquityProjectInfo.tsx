import {
  Stack,
  Flex,
  Box,
  Text,
  Heading,
  Progress,
  Button,
  Input,
  HStack,
  Avatar,
  Td,
  Tbody,
  TableContainer,
  Table,
  Tr,
  Th,
  Thead,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { CustomInput } from 'app/components/common/CustomInput';
import { thousandsSeparators } from 'app/utils/helpers';
import { chkToaster } from 'app/components/common/Toaster';
import useApiPrivate from 'app/hooks/useApiPrivate';

const InvestorPovEquityProjectInfo = ({
  id,
  amount: target,
  equityBought,
  progress,
}: any) => {
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [balanceConfirmed, setBalanceConfirmed] = useState(false);

  const apiPrivate = useApiPrivate();

  const handleChange = (e: any) => {
    const numWithoutComma = e.target.value.replace(/,|\$/gi, '');
    if (
      Number.isNaN(+numWithoutComma) ||
      Number(numWithoutComma) > 1000000000
    ) {
      return;
    }

    setAmount(Number(numWithoutComma));
  };

  const handleSubmit = () => {
    if (!amount) {
      chkToaster.error({ title: 'Please input a valid amount' });
      return;
    }
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
          setAmount(0);
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
              <Text pb="8px" size="body2">
                Equity bought
              </Text>
              <Heading fontSize="3.2rem">
                ${thousandsSeparators(equityBought)}
              </Heading>
            </Box>
            <Box>
              <Text size="body2" pb="3rem">
                {' '}
                (${thousandsSeparators(equityBought)}) {progress}%
              </Text>
              <Progress
                value={progress}
                borderRadius="2rem"
                background="blackShade.3"
                sx={{
                  '& > div': {
                    background: 'gradientStyle.1',
                  },
                }}
                flex="2"
              />
            </Box>
          </Flex>

          <Flex maxW="49rem" justify="space-between">
            <Stack spacing="3rem">
              <Box maxW="143px">
                <Text size="body2">Moratorium period</Text>
                <Text size="body2" color="#fff">
                  2 Months
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
            </Stack>
            <Stack spacing="3rem">
              <Box maxW="143px">
                <Text size="body2">Value </Text>
                <Text size="body2" color="#fff">
                  1% = £1
                </Text>
              </Box>
            </Stack>
          </Flex>

          <Box>
            <Button
              bg="#485155"
              border="0px"
              size="lg"
              w="100%"
              variant="primary"
            >
              View Agreement
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
          mb="1.9rem"
          maxW="55rem"
        >
          <Flex align="center" justify="space-between">
            <Box>
              <Text pb="8px" size="body2">
                Target
              </Text>
              <Heading fontSize="3.2rem">
                ${thousandsSeparators(target)}
              </Heading>
            </Box>
            <Box>
              <Text size="body2" pb="3rem">
                {' '}
                (${thousandsSeparators(equityBought)}) {progress}%
              </Text>
              <Progress
                value={progress}
                borderRadius="2rem"
                background="blackShade.3"
                sx={{
                  '& > div': {
                    background: 'gradientStyle.1',
                  },
                }}
                flex="2"
              />
            </Box>
          </Flex>

          <Box>
            <CustomInput
              placeholder="Enter Amount"
              size="lg"
              value={amount === 0 ? '' : `\$${thousandsSeparators(amount)}`}
              onChange={handleChange}
            />
          </Box>

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
        </Stack>
      )}

      {/* FUND RAISING INOFORMATION */}
      <Flex
        p="3rem"
        bg="#232629"
        flexDir="column"
        borderRadius="20px"
        mb="1.9rem"
      >
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

      {/* TABLE COMPONENT */}
      <TableContainer borderRadius="30px" bg="#232629" p="3rem">
        <Box pb="3rem">
          <Text size="body2">Investors </Text>
        </Box>
        <Table size="md">
          <Thead>
            <Tr bg="#000">
              <Th
                py="1.5rem"
                color="#fff"
                textTransform="capitalize"
                fontSize="1.6rem"
              >
                Date
              </Th>
              <Th
                py="1.5rem"
                color="#fff"
                textTransform="capitalize"
                fontSize="1.6rem"
              >
                Investor
              </Th>
              <Th color="#fff" textTransform="capitalize" fontSize="1.6rem">
                %
              </Th>
              <Th color="#fff" textTransform="capitalize" fontSize="1.6rem">
                Value
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td
                py="2.5rem"
                color="#fff"
                textTransform="capitalize"
                fontSize="1.6rem"
              >
                Dec 08, 2022
              </Td>
              <Td color="#fff" textTransform="capitalize" fontSize="1.6rem">
                <HStack spacing="5px">
                  <Avatar
                    boxSize="30px"
                    border="2px solid pink"
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />

                  <Text size="body2" color="#fff">
                    John Doe
                  </Text>
                  {''}
                </HStack>
              </Td>
              <Td color="#fff" textTransform="capitalize" fontSize="1.6rem">
                5%
              </Td>
              <Td color="#fff" textTransform="capitalize" fontSize="1.6rem">
                $20,000
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InvestorPovEquityProjectInfo;
