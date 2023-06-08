import React, { FC, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  Progress,
  Stack,
  Text,
  VStack,
  Select,
  SimpleGrid,
} from '@chakra-ui/react';
import Header from 'app/layout/Header';
import { Footer } from 'app/layout/Footer';
import CreateProject from 'app/components/dashboard/create-project/CreateProject';
import InvestmentType from 'app/components/dashboard/create-project/InvestmentType';
import Success from 'app/components/dashboard/create-project/Success';
import Portfolio from 'app/components/dashboard/create-project/Portfolio';
import { IoCloudUploadSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useMultiStepForm } from 'app/components/dashboard/create-project/useMultistepForm';
import CreateProjHeader from 'app/components/dashboard/create-project/CreateProjHeader';
import InvestTypeCard from 'app/components/dashboard/create-project/InvestmentTypeCard';
import { BiPlus } from 'react-icons/bi';
import { PaletteIcon } from 'app/assets/icons';
import { InvestmentIcon } from 'app/assets/icons';

const CreateProjectPage: FC = () => {
  const [investType, setInvestType] = useState<string | undefined>(undefined);
  const { currentStepIndex, isFirstStep, isLastStep, stepsLength, goTo, next } =
    useMultiStepForm(3);

  return (
    <Box>
      <Header />
      <Box borderTop="1px solid #20262e" mt="2rem">
        <Container
          maxW="144rem"
          p={{
            base: '3.5rem 2rem',
            sm: '3rem 5rem',
            md: '3rem 5.2rem 5rem',
            lg: '3rem 7.2rem 5rem',
          }}
        >
          <form>
            <CreateProjHeader />
            <Flex justify="space-between" gap={6}>
              <Flex flexDir="column" w="70%">
                <>
                  {/* ==== PROJECT DESCRIPTION ===== */}
                  {isFirstStep && (
                    <>
                      <Heading size="h2" mb="2.3rem ">
                        Project Description
                      </Heading>
                      <Text size="body1" mb="5.4rem">
                        Here you would upload a few details on the project as
                        requested below.
                      </Text>
                      <Stack w="100%" spacing="30px" mb="43px">
                        <Input
                          type="text"
                          size="lg"
                          placeholder="Project Name"
                        />
                        <Input
                          type="text"
                          size="lg"
                          minH="96px"
                          placeholder="Project Description"
                        />
                      </Stack>
                      <Stack spacing="22px">
                        <Text color="white" size="body2">
                          Upload Pitch Video
                        </Text>
                        <VStack
                          borderRadius="20px"
                          padding="4rem 2rem"
                          w="100%"
                          spacing="18.5px"
                          border="1px dashed #99A1AA"
                        >
                          <Text maxW="265px" textAlign="center" size="body2">
                            Video is expected to not exceeded 5mb and a max of 2
                            minutes.
                          </Text>
                          <IconButton
                            aria-label="Download video"
                            fontSize="3.6rem"
                            variant="unstyled"
                            border="0px"
                            icon={<IoCloudUploadSharp />}
                          />
                          <Text size="body2">
                            Upload, Drag and Drop MP4 file
                          </Text>
                        </VStack>
                      </Stack>
                    </>
                  )}

                  {/* ==== PORTFOLIO UPLOAD ===== */}
                  {currentStepIndex === 1 && (
                    <>
                      <Heading as="h2" mb="2.3rem ">
                        Porfolio Upload
                      </Heading>
                      <Text size="body1" mb="5.4rem">
                        Here you would upload a few details on the project as
                        requested below.
                      </Text>
                      <Stack w="100%" spacing="19px" mb="53px">
                        <Flex gap="10px">
                          <Box w="80%">
                            <Input
                              type="text"
                              size="lg"
                              placeholder="Kindly Upload Portfolio Link"
                            />
                          </Box>
                          <Box>
                            <Button
                              borderRadius="100px"
                              bg="#232629"
                              border={0}
                              leftIcon={<BiPlus />}
                              size="lg"
                            >
                              Add another link
                            </Button>
                          </Box>
                        </Flex>
                        <Box w="100%">
                          <Input type="text" size="lg" borderRadius="30px" />
                        </Box>
                        <Box w="100%">
                          <Input type="text" size="lg" borderRadius="30px" />
                        </Box>
                      </Stack>
                      <Stack spacing="22px">
                        <Text color="white" size="body2">
                          Upload Photo
                        </Text>
                        <VStack
                          borderRadius="20px"
                          padding="4rem 2rem"
                          w="100%"
                          spacing="18.5px"
                          border="1px dashed #99A1AA"
                        >
                          <Text maxW="265px" textAlign="center" size="body2">
                            Video is expected to not exceeded 5mb and a max of 2
                            minutes.
                          </Text>
                          <IconButton
                            aria-label="Download video"
                            fontSize="3.6rem"
                            variant="unstyled"
                            border="0px"
                            icon={<IoCloudUploadSharp />}
                          />
                          <Text size="body2">
                            Upload, Drag and Drop MP4 file
                          </Text>
                        </VStack>
                      </Stack>
                    </>
                  )}

                  {/* ==== INVESTMENT TYPE ===== */}
                  {isLastStep && (
                    <>
                      {' '}
                      <Heading as="h2" mb="4.2rem">
                        Investment type
                      </Heading>
                      <Flex w="100%" gap="2rem" mb="43px">
                        <Box onClick={() => setInvestType('debt')}>
                          <InvestTypeCard
                            title="Debt"
                            icon={PaletteIcon}
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
                            paintBorder={investType === 'debt'}
                          />
                        </Box>

                        <Box onClick={() => setInvestType('equity')}>
                          <InvestTypeCard
                            title={'Equity'}
                            icon={InvestmentIcon}
                            desc={
                              'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
                            }
                            paintBorder={investType === 'equity'}
                          />
                        </Box>
                      </Flex>
                      {investType === 'debt' && (
                        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
                          <Input
                            type="text"
                            size="lg"
                            placeholder="Enter Amount"
                          />
                          <Select
                            placeholder="Enter Duration"
                            h="5.6rem"
                            fontSize="1.6rem"
                            border="1px solid #99A1AA"
                            borderRadius="2rem"
                          >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </Select>

                          <Select
                            placeholder="Select Payment Frequency"
                            h="5.6rem"
                            fontSize="1.6rem"
                            border="1px solid #99A1AA"
                            borderRadius="2rem"
                          >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </Select>
                          <Select
                            placeholder="Moratorium Period"
                            h="5.6rem"
                            fontSize="1.6rem"
                            border="1px solid #99A1AA"
                            borderRadius="2rem"
                          >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </Select>
                        </SimpleGrid>
                      )}
                      {investType === 'equity' && (
                        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
                          <Select
                            placeholder="Moratorium Period"
                            h="5.6rem"
                            fontSize="1.6rem"
                            border="1px solid #99A1AA"
                            borderRadius="2rem"
                          >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </Select>
                          <Input type="text" size="lg" placeholder="Amount" />

                          <Select
                            placeholder="Equity amount offered"
                            h="5.6rem"
                            fontSize="1.6rem"
                            border="1px solid #99A1AA"
                            borderRadius="2rem"
                          >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </Select>
                          <Select
                            placeholder="Repayment date"
                            h="5.6rem"
                            fontSize="1.6rem"
                            border="1px solid #99A1AA"
                            borderRadius="2rem"
                          >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </Select>

                          <Select
                            placeholder="Duration"
                            h="5.6rem"
                            fontSize="1.6rem"
                            border="1px solid #99A1AA"
                            borderRadius="2rem"
                          >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </Select>
                        </SimpleGrid>
                      )}
                    </>
                  )}
                </>
              </Flex>
              <Flex flexDir="column" w="25%">
                <Flex align="center" justify="space-between" mb="2rem">
                  <Text size="body2" color="white">
                    Progress Status
                  </Text>
                  <Text size="body2" fontWeight="700">
                    100%
                  </Text>
                </Flex>
                <Box mb="3rem">
                  <Progress
                    // hasStripe
                    value={80}
                    borderRadius="20px"
                    isAnimated
                    background="blackShade.3"
                    sx={{
                      '& > div': {
                        background: 'gradientStyle.1',
                      },
                    }}
                  ></Progress>
                </Box>
                <Stack
                  mb="5.4rem"
                  borderRadius="20px"
                  spacing="4rem"
                  w="100%"
                  p="2rem"
                  bg="#232629"
                  border="1px solid #485155"
                >
                  <Checkbox variant="circular">
                    <Text
                      size="body2"
                      bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
                      bgClip="text"
                    >
                      Project Description
                    </Text>
                  </Checkbox>
                  <Checkbox variant="circular">
                    <Text size="body2">Portfolio Upload</Text>
                  </Checkbox>
                  <Checkbox variant="circular">
                    <Text size="body2">Connect social Media</Text>
                  </Checkbox>
                  <Checkbox variant="circular">
                    <Text size="body2">Project Type</Text>
                  </Checkbox>
                  <Checkbox variant="circular">
                    <Text size="body2">Finish</Text>
                  </Checkbox>
                </Stack>
                <Box>
                  <Button
                    variant="multicolor"
                    size="md"
                    w="100%"
                    onClick={() => {
                      console.log('CURRENT INDEX', currentStepIndex);
                      next();
                    }}
                  >
                    Next
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </form>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default CreateProjectPage;
