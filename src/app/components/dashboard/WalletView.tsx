import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Select,
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
} from '@chakra-ui/react';
import { IoWallet } from 'react-icons/io5';
import React, { FC } from 'react';
import { BiRefresh } from 'react-icons/bi';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const WalletView: FC = () => {
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
                  $50,000
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
            <Button variant="secondary" fontSize="1.6rem" size="md">
              Deposit
            </Button>

            <Button variant="secondary" fontSize="1.6rem" size="md">
              Withdraw
            </Button>
          </Flex>
        </Flex>
        <TableContainer borderRadius="30px" bg="#232629" pt="3rem" px="3.5rem">
          <Flex justify="space-between" align="center" pb="1.8rem">
            <Text color="#fff">Transaction</Text>
            <Select placeholder="Filter" maxW="17.5rem" p="20px 15px">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>{' '}
          </Flex>
          <Table size="lg">
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
                  Transaction type
                </Th>
                <Th color="#fff" textTransform="capitalize" fontSize="1.6rem">
                  Description
                </Th>
                <Th color="#fff" textTransform="capitalize" fontSize="1.6rem">
                  Reference
                </Th>
                <Th color="#fff" textTransform="capitalize" fontSize="1.6rem">
                  Amount
                </Th>
                <Th color="#fff" textTransform="capitalize" fontSize="1.6rem">
                  Wallet Bal
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
                  Deposit
                </Td>
                <Td color="#fff" textTransform="capitalize" fontSize="1.6rem">
                  Card payment
                </Td>
                <Td color="#fff" textTransform="capitalize" fontSize="1.6rem">
                  43673572JKHLJ
                </Td>
                <Td color="#fff" textTransform="capitalize" fontSize="1.6rem">
                  $ 20,000
                </Td>
                <Td color="#fff" textTransform="capitalize" fontSize="1.6rem">
                  $ 20,000
                </Td>
              </Tr>
            </Tbody>
            <Tfoot>
              {/* <Tr> */}
              <HStack spacing="1.5rem" pt="4.7rem" pb="7.1rem">
                <Icon as={RiArrowLeftSLine} fontSize="3.4rem" color="#99A1AA" />
                <Box
                  bg="#fff"
                  p="5px 10px"
                  borderRadius="5px"
                  fontSize="1.6rem"
                >
                  1
                </Box>
                <Box p="5px 10px" fontSize="1.6rem">
                  2
                </Box>
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
