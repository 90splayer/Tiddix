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

const projectData = [
  {
    id: 0,
    name: 'Oluwani Kolawole',
    avartar: 'https://bit.ly/kent-c-dodds',
    total_funding: '$4,000',
    img: project,
    title: 'The Plant Picazzo',
    category: 'Art',
    progress: 60,
  },
  {
    id: 1,
    name: 'Segun Abiodun',
    avartar: 'https://bit.ly/sage-adebayo',
    total_funding: '$7,000',
    img: project,
    title: 'The Plant Picazzo',
    category: 'Art',
    progress: 80,
  },
  {
    id: 2,
    name: 'Prosper ayo',
    avartar: 'https://bit.ly/prosper-baba',
    total_funding: '$2,000',
    img: project,
    title: 'The Plant Picazzo',
    category: 'Art',
    progress: 40,
  },
  {
    id: 3,
    name: 'Prosper ayo',
    avartar: 'https://bit.ly/prosper-baba',
    total_funding: '$2,000',
    img: project,
    title: 'The Plant Picazzo',
    category: 'Art',
    progress: 40,
  },
  {
    id: 4,
    name: 'Prosper ayo',
    avartar: 'https://bit.ly/prosper-baba',
    total_funding: '$2,000',
    img: project,
    title: 'The Plant Picazzo',
    category: 'Art',
    progress: 40,
  },
];

const TrendingTable: FC = () => {
  return (
    <Box>
      <Flex justify="space-between" gap={20}>
        <TableContainer w="50%">
          <Table variant="unstyled" size="lg">
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
            {projectData?.map((singleData, id) => (
              <Tbody key={id}>
                <Tr>
                  <Td>
                    {' '}
                    <HStack spacing="19px">
                      <Box>
                        <Image
                          borderRadius="16px"
                          w="100px"
                          h="100px"
                          src={singleData?.img}
                          alt={singleData?.name}
                        />
                      </Box>
                      <Stack spacing="11px">
                        <HStack>
                          <Avatar
                            boxSize="25px"
                            name={singleData?.name}
                            src={singleData?.avartar}
                          />
                          <Text size="body2" color="#fff">
                            {singleData?.name}
                          </Text>
                          <Box>{verify}</Box>
                        </HStack>
                        <Heading fontSize="2rem">{singleData?.title}</Heading>
                        <Text fontSize="1.4rem">{singleData?.category}</Text>
                      </Stack>
                    </HStack>
                  </Td>
                  <Td>
                    <Text color="#fff">{singleData.total_funding}</Text>
                  </Td>
                  <Td>
                    {' '}
                    <Progress
                      value={singleData.progress}
                      size="md"
                      colorScheme="transparent"
                      borderRadius="20px"
                      background="linear-gradient(transparent, transparent) padding-box, linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%) border-box"
                    />
                  </Td>
                </Tr>
              </Tbody>
            ))}
          </Table>
        </TableContainer>

        <TableContainer w="50%">
          <Table variant="unstyled" size="lg">
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
            {projectData?.map((singleData, id) => (
              <Tbody key={id}>
                <Tr>
                  <Td>
                    <HStack spacing="19px">
                      <Box>
                        <Image
                          borderRadius="16px"
                          w="100px"
                          h="100px"
                          src={singleData?.img}
                          alt={singleData?.name}
                        />
                      </Box>
                      <Stack spacing="11px">
                        <HStack>
                          <Avatar
                            boxSize="25px"
                            name={singleData?.name}
                            src={singleData?.avartar}
                          />
                          <Text size="body2" color="#fff">
                            {singleData?.name}
                          </Text>
                          <Box>{verify}</Box>
                        </HStack>
                        <Heading fontSize="2rem">{singleData?.title}</Heading>
                        <Text fontSize="1.4rem">{singleData?.category}</Text>
                      </Stack>
                    </HStack>
                  </Td>
                  <Td>
                    <Text color="#fff">{singleData.total_funding}</Text>
                  </Td>
                  <Td>
                    {' '}
                    <Progress
                      value={singleData.progress}
                      size="md"
                      colorScheme="transparent"
                      borderRadius="20px"
                      background="linear-gradient(transparent, transparent) padding-box, linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%) border-box"
                    />
                  </Td>
                </Tr>
              </Tbody>
            ))}
          </Table>
        </TableContainer>
      </Flex>
    </Box>
  );
};

export default TrendingTable;
