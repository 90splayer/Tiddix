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
import {
  thousandsSeparators,
  resolveDataToTableData,
  setSN,
} from 'app/utils/helpers';
import useApiPrivate from 'app/hooks/useApiPrivate';
import { chkToaster } from '../common/Toaster';
import { ChevronDownIconW } from 'app/assets/icons';
import { CustomTable } from '../common/CustomTable';

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

const columns = {
  // sn: {
  //   key: 's/n',
  //   label: 'S/N',
  //   active: true,
  // },
  source: {
    key: 'source',
    label: 'Source',
    active: true,
  },
  type: {
    key: 'type',
    label: 'Transaction Type',
    active: true,
  },
  created_at: {
    key: 'created_at',
    label: 'Date',
    active: true,
  },
  amount: {
    key: 'amount',
    label: 'Amount',
    active: true,
  },
  destination: {
    key: 'destination',
    label: 'Destination',
    active: true,
  },
};

const WalletView: FC = () => {
  const [transactions, setTransactions] = useState<TransactionT[]>([]);
  const [reload, setReload] = useState(false);
  const [walletBalance, setWalletBalance] = useState(0);

  const [page, setPage] = useState(1);
  const [pageLength, setPageLength] = useState(10);
  const [pageMeta, setPageMeta] = useState({
    page: 0,
    totalPages: 0,
    limit: 10,
    total: 0,
  });

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

  useEffect(() => {
    // .get(`/user/wallet/transactions?page=${page}&size=${pageLength}`)
    apiPrivate
      .get(`/user/wallet/transactions`)
      .then(({ data }) => {
        console.log('RESPONSEEEE', data.data);

        setPageMeta({
          page: data.page,
          totalPages: 0,
          limit: pageLength,
          total: data.totalElements,
        });

        setTransactions(data.data);
      })
      .catch(() => {
        chkToaster.error({ title: 'Something went wrong' });
      });

    apiPrivate
      .get('/user/summary')
      .then(({ data }) => {
        const { walletBalance } = data;
        setWalletBalance(walletBalance);
      })
      .catch(() => {
        chkToaster.error({ title: 'Error fetching wallet balance' });
      });
  }, [reload, page, pageLength]);

  const tableData = resolveDataToTableData<TransactionT>(
    transactions,
    (cur, i) => ({
      // sn: setSN(page, pageSize, i),
      destination: cur.destination,
    }),
  );

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
          reload={reload}
          setReload={setReload}
        />
        {/* Withdraw modal */}
        <WithdrawalModal
          isOpen={isWithdrawOpen}
          onClose={onWithdrawClose}
          title="Withdraw"
          reload={reload}
          setReload={setReload}
        />
        {/* TABLE COMPONENT */}
        <TableContainer
          borderRadius="30px"
          bg="#232629"
          pt="3rem"
          px="3.5rem"
          pb="10rem"
        >
          <Flex justify="space-between" align="center" pb="1.8rem">
            <Text color="#fff">Transaction</Text>
            <Box>
              <Button
                borderRadius="100px"
                bg="#232629"
                border="1px solid #485155"
                maxW="17.5rem"
                color="#fff"
                rightIcon={<ChevronDownIconW />}
                size="md"
              >
                filter
              </Button>
            </Box>{' '}
          </Flex>
          <CustomTable
            columns={columns}
            data={tableData}
            loading={false}
            paginationMeta={pageMeta}
            handlePagination={setPage}
            setPageLength={setPageLength}
          />
        </TableContainer>
      </Container>
    </Box>
  );
};

export default WalletView;
