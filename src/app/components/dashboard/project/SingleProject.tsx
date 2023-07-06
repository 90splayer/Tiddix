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
  Progress,
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

            {/* debt */}
            <Box w="55rem" display="none">
              <Flex
                bg="#232629"
                borderRadius="20px"
                maxW="55rem"
                p="3rem"
                gap="3rem"
                mb="2.4rem"
              >
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

            {/* equity */}
            <Box w="55rem">
              <Flex
                bg="#232629"
                borderRadius="20px"
                maxW="55rem"
                p="3rem"
                gap="3rem"
                mb="2.4rem"
              >
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
                      Equity
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
                    <Text pb="8px" size="body2">
                      Equity bought
                    </Text>
                    <Heading fontSize="3.2rem">$ 2,000</Heading>
                  </Box>
                  <Box>
                    <Text size="body2" pb="3rem">
                      {' '}
                      ($ 20,000) 45%
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

              <Flex p="3rem" bg="#232629" flexDir="column" borderRadius="20px">
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
