import {
  Flex,
  Box,
  Text,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Avatar,
  HStack,
  Image,
  Heading,
  Progress,
  Stack,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import project from '../../assets/images/investor/project.jpg';
import { verify } from 'app/assets/svgs/home';

const TrendingTable: FC<{ projects: any }> = ({ projects }) => {
  return (
    <Box>
      <Flex justify="space-between" gap={50}>
        <TableContainer maxW="58rem">
          <Table variant="unstyled" size="md">
            <Thead fontSize="1.6rem">
              <Tr>
                <Th>
                  <Text size="body2">Project</Text>
                </Th>
                <Th>
                  <Text size="body2">Target</Text>
                </Th>
                <Th>
                  <Text size="body2">Progress</Text>
                </Th>
              </Tr>
            </Thead>
            {projects
              ?.slice(0, 5)
              .map(
                ({
                  creativeName,
                  amount,
                  projectName,
                  progress,
                  category,
                  images,
                  creativePicture,
                  id,
                }: any) => (
                  <Tbody key={id}>
                    <Tr>
                      <Td>
                        {' '}
                        <HStack spacing="19px">
                          <Box>
                            <Image
                              maxW="100px"
                              h="100px"
                              borderRadius="16px"
                              objectFit="cover"
                              src={images}
                              alt={projectName}
                            />
                          </Box>
                          <Stack spacing="11px">
                            <HStack>
                              <Avatar
                                boxSize="25px"
                                name={creativeName}
                                src={creativePicture}
                              />
                              <Text size="body2" color="#fff">
                                {creativeName}
                              </Text>
                              <Box>{verify}</Box>
                            </HStack>
                            <Heading fontSize="2rem">{projectName}</Heading>
                            <Text fontSize="1.4rem">{category}</Text>
                          </Stack>
                        </HStack>
                      </Td>
                      <Td>
                        <Text color="#fff">${amount}</Text>
                      </Td>
                      <Td>
                        {' '}
                        <Progress
                          value={progress}
                          size="md"
                          colorScheme="transparent"
                          borderRadius="20px"
                          background="linear-gradient(transparent, transparent) padding-box, linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%) border-box"
                        />
                      </Td>
                    </Tr>
                  </Tbody>
                ),
              )}
          </Table>
        </TableContainer>

        <TableContainer maxW="58rem">
          <Table variant="unstyled" size="md">
            <Thead>
              <Tr>
                <Th>
                  <Text size="body2">Project</Text>
                </Th>
                <Th>
                  <Text size="body2">Target</Text>
                </Th>
                <Th>
                  <Text size="body2">Progress</Text>
                </Th>
              </Tr>
            </Thead>
            {projects
              ?.slice(5, 10)
              .map(
                ({
                  creativeName,
                  amount,
                  projectName,
                  progress,
                  category,
                  images,
                  creativePicture,
                  id,
                }: any) => (
                  <Tbody key={id}>
                    <Tr>
                      <Td>
                        {' '}
                        <HStack spacing="19px">
                          <Box w="100%">
                            <Image
                              borderRadius="16px"
                              objectFit="cover"
                              maxW="100px"
                              h="100px"
                              src={images}
                              alt={projectName}
                            />
                          </Box>
                          <Stack spacing="11px">
                            <HStack>
                              <Avatar
                                boxSize="25px"
                                name={creativeName}
                                src={creativePicture}
                              />
                              <Text size="body2" color="#fff">
                                {creativeName}
                              </Text>
                              <Box>{verify}</Box>
                            </HStack>
                            <Heading fontSize="2rem">{projectName}</Heading>
                            <Text fontSize="1.4rem">{category}</Text>
                          </Stack>
                        </HStack>
                      </Td>
                      <Td>
                        <Text color="#fff">${amount}</Text>
                      </Td>
                      <Td>
                        {' '}
                        <Progress
                          value={progress}
                          size="md"
                          colorScheme="transparent"
                          borderRadius="20px"
                          background="linear-gradient(transparent, transparent) padding-box, linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%) border-box"
                        />
                      </Td>
                    </Tr>
                  </Tbody>
                ),
              )}
          </Table>
        </TableContainer>
      </Flex>
    </Box>
  );
};

export default TrendingTable;
