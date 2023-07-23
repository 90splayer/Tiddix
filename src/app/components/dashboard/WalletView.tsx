import React, { FC, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { IoWallet } from 'react-icons/io5';

import { BiRefresh } from 'react-icons/bi';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { GoChevronDown } from 'react-icons/go';
import DepositModal from './DepositModal';
import WithdrawalModal from './WithdrawalModal';
import useAuth from 'app/hooks/useAuth';
import { thousandsSeparators } from 'app/utils/helpers';
import useApiPrivate from 'app/hooks/useApiPrivate';
import { chkToaster } from '../common/Toaster';

type TransactionT = {
  amount: string;
  created_at: string;
  description: string;
  destination: string;
  id: string;
  source: string;
  status: string;
  type: string;
};

const WalletView: FC = () => {
  const [transactions, setTransactions] = useState<TransactionT[]>([]);

  const authContext = useAuth();
  const apiPrivate = useApiPrivate();

  const {
    isOpen: isDepositOpen,
    onOpen: onDepositOpen,
    onClose: onDepositClose,
  } = useDisclosure();
  const {
    isOpen: isWithdrawOpen,
    onOpen: onWithdrawOpen,
    onClose: onWithdrawClose,
  } = useDisclosure();

  const walletBalance = authContext?.auth?.walletBalance;

  useEffect(() => {
    apiPrivate
      .get('/user/wallet/transactions')
      .then(({ data }) => {
        console.log('RESPONSE', data.transactions);
        setTransactions(data.transactions);
      })
      .catch(() => {
        chkToaster.error({ title: 'Something went wrong' });
      });
  }, []);

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
        <Flex justify="space-between" align="center" mb="4rem">
          <Flex
            borderRadius="30px"
            w="41.1rem"
            gap="2.2rem"
            px="3rem"
            align="center"
            h="145px"
            bg="#232629"
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
            <Flex align="flex-end" gap="1.3rem">
              <Stack spacing="1rem">
                <Text size="body2" color="#fff">
                  Wallet Balance
                </Text>
                <Text fontSize="3.2rem" fontWeight="700" color="#fff">
                  £{thousandsSeparators(String(walletBalance))}
                </Text>
              </Stack>

              <Icon
                as={BiRefresh}
                fontSize="2.4rem"
                fontWeight="100"
                color="#fff"
                cursor="pointer"
              />
            </Flex>
          </Flex>

          <Flex gap="12px" align="center">
            <Button
              variant="secondary"
              onClick={onDepositOpen}
              fontSize="1.6rem"
              size="md"
            >
              Deposit
            </Button>

            <Button
              variant="secondary"
              onClick={onWithdrawOpen}
              fontSize="1.6rem"
              size="md"
            >
              Withdraw
            </Button>
          </Flex>
        </Flex>
        {/* DEPOSIT MODAL */}
        <DepositModal
          isOpen={isDepositOpen}
          onClose={onDepositClose}
          title="Deposit"
        />
        {/* Withdraw modal */}
        <WithdrawalModal
          isOpen={isWithdrawOpen}
          onClose={onWithdrawClose}
          title="Withdraw"
        />
        {/* TABLE COMPONENT */}
        <TableContainer borderRadius="30px" bg="#232629" pt="3rem" px="3.5rem">
          <Flex justify="space-between" align="center" pb="1.8rem">
            <Text color="#fff">Transaction</Text>
            <Box>
              <Button
                borderRadius="100px"
                bg="#232629"
                border="1px solid #485155"
                maxW="17.5rem"
                color="#fff"
                rightIcon={<GoChevronDown />}
                size="md"
              >
                filter
              </Button>
            </Box>{' '}
          </Flex>
          <Table size="lg">
            <Thead>
              <Tr bg="#000" borderBottom="2px solid #485155">
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
                  Transaction type
                </Th>
                {/* <Th color="#fff" textTransform="capitalize" fontSize="1.6rem">
                  Description
                </Th> */}
                <Th color="#fff" textTransform="capitalize" fontSize="1.6rem">
                  Reference
                </Th>
                <Th color="#fff" textTransform="capitalize" fontSize="1.6rem">
                  Amount
                </Th>
                {/* <Th color="#fff" textTransform="capitalize" fontSize="1.6rem">
                  Wallet Bal
                </Th> */}
                <Th color="#fff" textTransform="capitalize" fontSize="1.6rem">
                  Source
                </Th>
                <Th color="#fff" textTransform="capitalize" fontSize="1.6rem">
                  Destination
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions.map((transaction) => {
                return (
                  <Tr borderBottom="2px solid #485155">
                    <Td
                      py="2.5rem"
                      color="#fff"
                      textTransform="capitalize"
                      fontSize="1.6rem"
                    >
                      {transaction.created_at.slice(0, 10)}
                    </Td>
                    <Td
                      color="#fff"
                      textTransform="capitalize"
                      fontSize="1.6rem"
                    >
                      {transaction.type}
                    </Td>
                    {/* <Td
                      color="#fff"
                      textTransform="capitalize"
                      fontSize="1.6rem"
                    >
                      {transaction.description}
                    </Td> */}
                    <Td
                      color="#fff"
                      textTransform="capitalize"
                      fontSize="1.6rem"
                    >
                      {transaction.id}
                    </Td>
                    <Td
                      color="#fff"
                      textTransform="capitalize"
                      fontSize="1.6rem"
                    >
                      £{thousandsSeparators(transaction.amount)}
                    </Td>
                    {/* <Td
                      color="#fff"
                      textTransform="capitalize"
                      fontSize="1.6rem"
                    >
                      £ 20,000
                    </Td> */}
                    <Td
                      color="#fff"
                      textTransform="capitalize"
                      fontSize="1.6rem"
                    >
                      {transaction.source}
                    </Td>
                    <Td
                      color="#fff"
                      textTransform="capitalize"
                      fontSize="1.6rem"
                    >
                      {transaction.destination}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
            <Tfoot>
              {/* <Tr> */}
              <HStack spacing="1.5rem" pt="4.7rem" pb="7.1rem">
                <Icon as={RiArrowLeftSLine} fontSize="3.4rem" color="#99A1AA" />
                <Text
                  bg="#fff"
                  p="5px 10px"
                  borderRadius="5px"
                  size="body2"
                  color="blackShade.2"
                >
                  1
                </Text>
                <Text p="5px 10px" size="body2" color="white">
                  2
                </Text>
                <Icon
                  as={RiArrowRightSLine}
                  fontSize="3.4rem"
                  color="#99A1AA"
                />
              </HStack>
              {/* </Tr> */}
            </Tfoot>
          </Table>
        </TableContainer>{' '}
      </Container>
    </Box>
  );
};

export default WalletView;
