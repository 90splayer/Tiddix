import React, { FC, useState, useRef, useEffect } from 'react';
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
  Icon,
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
import styled from 'styled-components';
import {
  CheckMarkActive,
  CheckMarkInactive,
  CheckMarkDone,
} from 'app/assets/icons';
import { chkToaster } from 'app/components/common/Toaster';
import { CustomInput } from 'app/components/common/CustomInput';
import { CalendarIcon } from '@chakra-ui/icons';
import { apiPrivate } from 'app/api/tiddix';

// left out images, pitchVideo, and portfolioLinks, investmentType, repaymentDate
type portfolioT = {
  category: string;
  description: string;
  amount: number;
  duration: string;
  repaymentFrequency: string;
  moratoriumPeriod: string;
  equityAmountOffered: string;
  projectName: string;
  portfolioLinks: string;
  // images: any;
  // pitchVideo: any;
  investmentType: string;
  repaymentDate: string;
};

const CreateProjectPage: FC = () => {
  const [investType, setInvestType] = useState<string | undefined>(undefined);
  const [formValues, setFormValues] = useState<portfolioT>({
    category: '',
    description: '',
    amount: 0,
    duration: '',
    repaymentFrequency: '',
    moratoriumPeriod: '',
    equityAmountOffered: '',
    projectName: '',
    portfolioLinks: '',
    // images: null,
    // pitchVideo: null,
    investmentType: '',
    repaymentDate: '',
  });

  useEffect(() => {
    console.log('FORM VALUES', formValues);
  });

  const { currentStepIndex, isFirstStep, isLastStep, stepsLength, goTo, next } =
    useMultiStepForm(4);

  type VideoInfoT = {
    file: File;
    fileName: string;
  };
  type ImagesInfoT = {
    files: File[];
    filesCount: number;
  };
  const [videoInfo, setVideoInfo] = useState<any>();
  const [imagesInfo, setImagesInfo] = useState<any>();
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const videoInput = useRef<HTMLInputElement>(null);
  const imagesInput = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setIsDraggedOver(true);
  };

  const updateSelectedFile = async (files: any, type: string) => {
    if (files) {
      const file = files[0];
      if (type === 'video' && file.type === 'video/mp4') {
        console.log('FILE', file);
        setVideoInfo({
          file,
          fileName: file.name,
        });
      } else if (type === 'images') {
        setImagesInfo({
          files: files,
          filesCount: files.length,
        });
      } else {
        chkToaster.error({ title: 'Invalid file type.' });
      }
    }
  };

  const handleDrop = (e: any, type: string) => {
    e.preventDefault();
    setIsDraggedOver(false);
    if (e.dataTransfer.files.length) {
      updateSelectedFile(e.dataTransfer.files, type);
    }
  };

  const selectVideoInput = () => {
    if (videoInput.current?.value) {
      videoInput.current.value = '';
    }
    if (videoInput.current) {
      videoInput.current.click();
    }
  };

  const selectImagesInput = () => {
    if (imagesInput.current?.value) {
      imagesInput.current.value = '';
    }
    if (imagesInput.current) {
      imagesInput.current.click();
    }
  };

  const handleChange = (e: any) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const formData = new FormData();

    if (currentStepIndex === 2) {
      formData.append('projectName', formValues.projectName);
      formData.append('investmentType', investType || 'debt');
      formData.append('description', formValues.description);
      formData.append('images', imagesInfo);
      formData.append('pitchVideo', videoInfo);
      // formData.append('amount', formValues.amount);

      apiPrivate
        .post('/projects', formData)
        .then(() => {
          chkToaster.success({ title: 'portfolio submitted successfully' });
        })
        .catch((err) => {
          console.log(console.log('ERROR', err.message));
          chkToaster.error({ title: err.message });
        });
    } else {
      next();
    }
  };

  const getISODate = (date: Date) => {
    return new Date(
      date.getTime() - date.getTimezoneOffset() * 60000,
    ).toISOString();
  };

  return (
    <Styling>
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
          <Box>
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
                          name="projectName"
                          onChange={handleChange}
                        />
                        <Input
                          type="text"
                          size="lg"
                          minH="96px"
                          placeholder="Project Description"
                          name="description"
                          onChange={handleChange}
                        />
                      </Stack>
                      <Stack spacing="22px">
                        <Text color="white" size="body2">
                          Upload Pitch Video
                        </Text>
                        <form
                          className="upload-section"
                          onDragOver={handleDragOver}
                          onDragEnd={() => setIsDraggedOver(false)}
                          onDragLeave={() => setIsDraggedOver(false)}
                          onDrop={(e) => handleDrop(e, 'video')}
                          role="presentation"
                          onClick={() => selectVideoInput()}
                          onChange={() =>
                            updateSelectedFile(
                              videoInput.current?.files,
                              'video',
                            )
                          }
                        >
                          <VStack
                            borderRadius="20px"
                            padding="4rem 2rem"
                            w="100%"
                            spacing="18.5px"
                            border="1px dashed #99A1AA"
                          >
                            <Text maxW="265px" textAlign="center" size="body2">
                              Video is expected to not exceeded 5mb and a max of
                              2 minutes.
                            </Text>
                            <IconButton
                              aria-label="Download video"
                              fontSize="3.6rem"
                              variant="unstyled"
                              border="0px"
                              icon={<IoCloudUploadSharp />}
                            />
                            <small>
                              {videoInfo?.fileName && videoInfo.fileName}
                            </small>
                            <Text size="body2">
                              Upload, Drag and Drop MP4 file
                            </Text>
                            <input
                              type="file"
                              id="upload-file"
                              ref={videoInput}
                              hidden
                              accept=".mp4"
                            />
                          </VStack>
                        </form>
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
                              placeholder="Kindly Input a Portfolio Link"
                              name="portfolioLinks"
                              onChange={handleChange}
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
                        {/* <Box w="100%">
                          <Input type="text" size="lg" borderRadius="30px" />
                        </Box>
                        <Box w="100%">
                          <Input type="text" size="lg" borderRadius="30px" />
                        </Box> */}
                      </Stack>
                      <Stack spacing="22px">
                        <Text color="white" size="body2">
                          Upload Photo
                        </Text>
                        <form
                          className="upload-section"
                          onDragOver={handleDragOver}
                          onDragEnd={() => setIsDraggedOver(false)}
                          onDragLeave={() => setIsDraggedOver(false)}
                          onDrop={(e) => handleDrop(e, 'images')}
                          role="presentation"
                          onClick={() => selectImagesInput()}
                          onChange={() =>
                            updateSelectedFile(
                              imagesInput.current?.files,
                              'images',
                            )
                          }
                        >
                          <VStack
                            borderRadius="20px"
                            padding="4rem 2rem"
                            w="100%"
                            spacing="18.5px"
                            border="1px dashed #99A1AA"
                          >
                            <Text maxW="265px" textAlign="center" size="body2">
                              You can upload a min of 2 images and a max of 12
                              images.
                            </Text>
                            <IconButton
                              aria-label="Download video"
                              fontSize="3.6rem"
                              variant="unstyled"
                              border="0px"
                              icon={<IoCloudUploadSharp />}
                            />
                            <small>
                              {imagesInfo?.filesCount
                                ? `${imagesInfo?.filesCount} images selected`
                                : ''}
                            </small>
                            <Text size="body2">
                              Upload, Drag and Drop JPG, JPEG, or PNG files
                            </Text>
                            <input
                              type="file"
                              id="upload-file"
                              ref={imagesInput}
                              hidden
                              accept=".jpg, .jpeg, .png"
                              multiple
                            />
                          </VStack>
                        </form>
                      </Stack>
                    </>
                  )}

                  {/* ==== INVESTMENT TYPE ===== */}
                  {currentStepIndex === 2 && (
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
                            name="amount"
                            onChange={handleChange}
                          />
                          <Select
                            placeholder="Enter Duration"
                            h="5.6rem"
                            fontSize="1.6rem"
                            border="1px solid #99A1AA"
                            borderRadius="2rem"
                            name="duration"
                            onChange={handleChange}
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
                            name="repaymentFrequency"
                            onChange={handleChange}
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
                            name="moratoriumPeriod"
                            onChange={handleChange}
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

                          <Input
                            size="lg"
                            placeholder="Equity amount offered"
                          />

                          <CustomInput.Date
                            placeholder="Repayment date"
                            // h="5.6rem"
                            label="Repayment date"
                            fontSize="1.6rem"
                            border="1px solid #99A1AA"
                            borderRadius="2rem"
                            type="date"
                            format="d/M/yyyy"
                            calendarIcon={<CalendarIcon />}
                            clearIcon={null}
                            onChange={(e: any) => {
                              console.log(
                                'DATE CHANGING',
                                getISODate(e.target.value),
                              );
                            }}
                          />

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
                  {/* <Text size="body2" fontWeight="700">
                    100%
                  </Text> */}
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
                  <Text
                    size="body2"
                    bgGradient={
                      isFirstStep
                        ? 'linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%)'
                        : 'linear-gradient(235.92deg, #99A1AA -14.27%, #99A1AA 50.09%, #99A1AA 114.81%)'
                    }
                    bgClip="text"
                    onClick={() => goTo(0)}
                    className="step-indicator"
                    _hover={{
                      bgGradient:
                        'linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%)',
                    }}
                  >
                    <Icon
                      as={isFirstStep ? CheckMarkActive : CheckMarkInactive}
                      boxSize="2.8rem"
                    />
                    Project Description
                  </Text>

                  <Text
                    size="body2"
                    bgGradient={
                      currentStepIndex === 1
                        ? 'linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%)'
                        : 'linear-gradient(235.92deg, #99A1AA -14.27%, #99A1AA 50.09%, #99A1AA 114.81%)'
                    }
                    bgClip="text"
                    onClick={() => goTo(1)}
                    className="step-indicator"
                    _hover={{
                      bgGradient:
                        'linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%)',
                    }}
                  >
                    <Icon
                      as={
                        currentStepIndex === 1
                          ? CheckMarkActive
                          : CheckMarkInactive
                      }
                      boxSize="2.8rem"
                    />
                    Portfolio Upload
                  </Text>

                  <Text
                    size="body2"
                    bgGradient={
                      currentStepIndex === 2
                        ? 'linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%)'
                        : 'linear-gradient(235.92deg, #99A1AA -14.27%, #99A1AA 50.09%, #99A1AA 114.81%)'
                    }
                    bgClip="text"
                    onClick={() => goTo(2)}
                    className="step-indicator"
                    _hover={{
                      bgGradient:
                        'linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%)',
                    }}
                  >
                    <Icon
                      as={
                        currentStepIndex === 2
                          ? CheckMarkActive
                          : CheckMarkInactive
                      }
                      boxSize="2.8rem"
                    />{' '}
                    Project Type
                  </Text>

                  <Text
                    size="body2"
                    bgGradient={
                      isLastStep
                        ? 'linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%)'
                        : 'linear-gradient(235.92deg, #99A1AA -14.27%, #99A1AA 50.09%, #99A1AA 114.81%)'
                    }
                    bgClip="text"
                    className="step-indicator"
                    _hover={{
                      bgGradient:
                        'linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%)',
                    }}
                  >
                    <Icon
                      as={isLastStep ? CheckMarkActive : CheckMarkInactive}
                      boxSize="2.8rem"
                    />
                    Finish
                  </Text>
                </Stack>
                <Box>
                  <Button
                    type="submit"
                    variant="multicolor"
                    size="md"
                    w="100%"
                    onClick={handleSubmit}
                  >
                    Next
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Styling>
  );
};

const Styling = styled.div`
  .step-indicator {
    cursor: pointer;
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .upload-section {
    cursor: pointer;
  }
`;

export default CreateProjectPage;
