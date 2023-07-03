import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { IoWallet } from 'react-icons/io5';
import React, { FC } from 'react';
import { BiRefresh } from 'react-icons/bi';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { GoChevronDown } from 'react-icons/go';

const WalletView: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Button
              variant="secondary"
              onClick={onOpen}
              fontSize="1.6rem"
              size="md"
            >
              Deposit
            </Button>

            <Button
              variant="secondary"
              onClick={onOpen}
              fontSize="1.6rem"
              size="md"
            >
              Withdraw
            </Button>
          </Flex>
        </Flex>
        {/* Modal COMPONENT */}
        <Modal size="4xl" isOpen={isOpen} isCentered onClose={onClose}>
          <ModalOverlay />
          <ModalContent borderRadius="20px" pt="8rem" bg="#232629" pb="11.2rem">
            <ModalHeader pb="4.5rem">
              <Flex align="center" justify="center">
                <Text color="#fff" fontSize="24px" fontWeight="700">
                  Deposit
                </Text>
              </Flex>
            </ModalHeader>
            <ModalCloseButton
              color="#000"
              p="10px"
              bg="white"
              _hover={{ opacity: '0.5' }}
              borderRadius="50px"
              fontSize="lg"
            />
            <ModalBody pb="3rem">
              <Flex align="center" justify="center" gap="1.4rem">
                <Flex
                  border="1px solid #99A1AA"
                  align="center"
                  justify="center"
                  borderRadius="100%"
                  p="2rem"
                >
                  <Icon as={HiMinus} fontSize="1.6rem" color="#fff" />
                </Flex>
                <Box>
                  <Input
                    pos="relative"
                    placeholder="Enter Amount"
                    px="1.5rem"
                    type="number"
                    borderRadius="2rem"
                    border="1px solid #99A1AA"
                    maxW="26.3rem"
                    h="6.3rem"
                    _placeholder={{
                      fontSize: '1.6rem',
                      color: '#99A1AA',
                    }}
                  />
                </Box>
                <Flex
                  border="1px solid #99A1AA"
                  align="center"
                  justify="center"
                  borderRadius="100%"
                  p="2rem"
                >
                  <Icon as={HiPlus} fontSize="1.6rem" color="#fff" />
                </Flex>
              </Flex>
            </ModalBody>

            <Flex align="center" justify="center">
              <Button
                variant="multicolor"
                maxW="39rem"
                w="100%"
                fontSize="1.6rem"
              >
                Make Payment
              </Button>
            </Flex>
          </ModalContent>
        </Modal>
        {/* Withdraw modal */}
        <Modal size="4xl" isOpen={isOpen} isCentered onClose={onClose}>
          <ModalOverlay />
          <ModalContent borderRadius="20px" pt="6rem" bg="#232629" pb="9.2rem">
            <ModalHeader pb="3.5rem">
              <Flex align="center" justify="center">
                <Text color="#fff" fontSize="24px" fontWeight="700">
                  Withdraw
                </Text>
              </Flex>
            </ModalHeader>
            <ModalCloseButton
              color="#000"
              p="10px"
              bg="white"
              _hover={{ opacity: '0.5' }}
              borderRadius="50px"
              fontSize="lg"
            />
            <ModalBody pb="3rem">
              <Flex align="center" mb="3rem" justify="center" gap="1.4rem">
                <Flex
                  border="1px solid #99A1AA"
                  align="center"
                  justify="center"
                  borderRadius="100%"
                  p="2rem"
                >
                  <Icon as={HiMinus} fontSize="1.6rem" color="#fff" />
                </Flex>
                <Box>
                  <Input
                    pos="relative"
                    placeholder="Enter Amount"
                    px="1.5rem"
                    type="number"
                    borderRadius="2rem"
                    border="1px solid #99A1AA"
                    maxW="26.3rem"
                    h="6.3rem"
                    _placeholder={{
                      fontSize: '1.6rem',
                      color: '#99A1AA',
                    }}
                  />
                </Box>
                <Flex
                  border="1px solid #99A1AA"
                  align="center"
                  justify="center"
                  borderRadius="100%"
                  p="2rem"
                >
                  <Icon as={HiPlus} fontSize="1.6rem" color="#fff" />
                </Flex>
              </Flex>
              <VStack spacing="1.9rem">
                <Box>
                  <Input
                    pos="relative"
                    placeholder="select bank"
                    px="1.5rem"
                    type="number"
                    borderRadius="2rem"
                    border="1px solid #99A1AA"
                    w="41.1rem"
                    // maxW="41.1rem"
                    h="6.3rem"
                    _placeholder={{
                      fontSize: '1.6rem',
                      color: '#99A1AA',
                    }}
                  />
                </Box>
                <Box>
                  <Input
                    pos="relative"
                    placeholder="Account Number"
                    px="1.5rem"
                    type="number"
                    borderRadius="2rem"
                    border="1px solid #99A1AA"
                    // maxW="41.1rem"
                    w="41.1rem"
                    h="6.3rem"
                    _placeholder={{
                      fontSize: '1.6rem',
                      color: '#99A1AA',
                    }}
                  />
                </Box>
                <Box>
                  <Input
                    pos="relative"
                    placeholder="Account Name"
                    px="1.5rem"
                    type="number"
                    borderRadius="2rem"
                    border="1px solid #99A1AA"
                    w="41.1rem"
                    // maxW="41.1rem"
                    h="6.3rem"
                    _placeholder={{
                      fontSize: '1.6rem',
                      color: '#99A1AA',
                    }}
                  />
                </Box>
              </VStack>
            </ModalBody>

            <Flex align="center" justify="center">
              <Button
                variant="multicolor"
                maxW="39rem"
                w="100%"
                fontSize="1.6rem"
              >
                Make Payment
              </Button>
            </Flex>
          </ModalContent>
        </Modal>
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
