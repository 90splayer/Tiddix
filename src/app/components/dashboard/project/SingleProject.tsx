import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  Image,
  HStack,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import projectImg from '../../../assets/images/investor/project.jpg';
import SingleProjHeader from './SingleProjHeader';

import { love } from 'app/assets/svgs/dashboard/dashboard';
import { debt } from 'app/assets/svgs/dashboard/dashboard';
import { view } from 'app/assets/svgs/dashboard/dashboard';
import CustomTab from 'app/components/common/CustomTab';

const SingleProject: FC = () => {
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
        <SingleProjHeader />
        <Flex mb="10rem" justify="space-between">
          <Stack spacing="19px">
            <Box>
              <Image
                w="98px"
                h="110px"
                borderRadius="20px"
                objectFit="cover"
                src={projectImg}
                alt="project name"
              />
            </Box>
            <Box>
              <Image
                w="98px"
                h="110px"
                borderRadius="20px"
                objectFit="cover"
                src={projectImg}
                alt="project name"
              />
            </Box>
            <Box>
              <Image
                w="98px"
                h="110px"
                borderRadius="20px"
                objectFit="cover"
                src={projectImg}
                alt="project name"
              />
            </Box>
          </Stack>
          <Flex gap="33px" w="90%" justify="space-between">
            <Box>
              <Image
                maxW="58.4rem"
                h="61rem"
                objectFit="cover"
                borderRadius="20px"
                src={projectImg}
                alt="project name"
              />
            </Box>

            <Box w="55rem">
              <Flex borderRadius="20px" p="3rem" gap="3rem" mb="2.4rem">
                <Stack spacing="1.2rem">
                  <Text size="body2">Views</Text>
                  <Flex gap="1rem">
                    <Box>{view}</Box>
                    <Text size="body2" color="#fff">
                      200k Views
                    </Text>
                  </Flex>
                </Stack>
                <Stack spacing="1.2rem">
                  <Text size="body2">Favorites</Text>
                  <Flex gap="1rem">
                    <Box>{love}</Box>
                    <Text size="body2" color="#fff">
                      30 favorites
                    </Text>
                  </Flex>
                </Stack>
                <Stack spacing="1.2rem">
                  <Text size="body2">Type</Text>
                  <Flex gap="1rem">
                    <Box>{debt}</Box>
                    <Text size="body2" color="#fff">
                      Debt
                    </Text>
                  </Flex>
                </Stack>
              </Flex>

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
                    <Heading fontSize="1.6rem">2 Months</Heading>
                  </Box>
                </Flex>

                <Flex maxW="49rem" justify="space-between">
                  <Box maxW="143px">
                    <Text size="body2">Interest</Text>
                    <Text size="body2" color="#fff">
                      20%
                    </Text>
                  </Box>
                  <Box maxW="143px">
                    <Text size="body2">Period </Text>
                    <Text size="body2" color="#fff">
                      5 Months
                    </Text>
                  </Box>

                  <Box maxW="143px">
                    <Text size="body2">Interest Payment </Text>
                    <Text size="body2" color="#fff">
                      $2000
                    </Text>
                  </Box>
                </Flex>

                <Flex maxW="49rem" justify="space-between">
                  <Box>
                    <Text size="body2">Next repayment </Text>
                    <Text size="body2" color="#fff">
                      2 January 2023
                    </Text>
                  </Box>

                  <Box>
                    <Text size="body2">Next Due </Text>
                    <Text size="body2" color="#fff">
                      $4000
                    </Text>
                  </Box>

                  <Box>
                    <Text size="body2">Due date </Text>
                    <Text size="body2" color="#fff">
                      12 April 2023
                    </Text>
                  </Box>
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
          </Flex>
        </Flex>
        <CustomTab
          // largerHeading
          tabs={[
            {
              label: 'Description',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },

            {
              label: 'About',
              body: ' adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
              label: 'Portfolio',
              body: ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
          ]}
        />
      </Container>
    </Box>
  );
};

export default SingleProject;
