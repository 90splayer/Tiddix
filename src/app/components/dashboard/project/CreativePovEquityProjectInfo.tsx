import React from 'react';
import {
  Box,
  Stack,
  Text,
  Heading,
  Progress,
  Flex,
  Button,
  HStack,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Avatar,
} from '@chakra-ui/react';
import { GoChevronDown } from 'react-icons/go';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

export default function EquityProjectInfo() {
  return (
    <Box>
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
            <Heading fontSize="3.2rem">£2,000</Heading>
          </Box>
          <Box>
            <Text size="body2" pb="3rem">
              {' '}
              (£20,000) 45%
            </Text>
            <Progress
              value={45}
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
          <Button bg="#485155" border="0px" size="lg" w="100%">
            Proceed to Agreement
          </Button>
        </Box>
      </Stack>

      <Flex
        p="3rem"
        bg="#232629"
        mb="2rem"
        flexDir="column"
        borderRadius="20px"
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
                £20,000
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
