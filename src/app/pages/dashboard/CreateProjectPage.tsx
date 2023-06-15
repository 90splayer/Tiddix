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
import styled from 'styled-components';
import {
  PaletteIcon,
  InvestmentIcon,
  CheckMarkActive,
  CheckMarkInactive,
  CheckMarkDone,
  CheckIcon,
  CloseIcon,
} from 'app/assets/icons';
import { chkToaster } from 'app/components/common/Toaster';
import { CustomInput } from 'app/components/common/CustomInput';
import { CalendarIcon } from '@chakra-ui/icons';
// import { apiPrivate } from 'app/api/tiddix';
import CustomSelectField from 'app/components/common/CustomSelect';
import useApiPrivate from 'app/hooks/useApiPrivate';

// left out images, pitchVideo, and portfolioLinks,
type portfolioT = {
  category: string;
  description: string;
  amount: number | null;
  duration: string;
  repaymentFrequency: string;
  moratoriumPeriod: string;
  equityAmountOffered: number | null;
  projectName: string;
  investmentType: string | undefined;
  repaymentDate: Date | null;
};

const CreateProjectPage: FC = () => {
  const apiPrivate = useApiPrivate();
  const [formValues, setFormValues] = useState<portfolioT>({
    category: '',
    description: '',
    amount: null,
    duration: '',
    repaymentFrequency: '',
    moratoriumPeriod: '',
    equityAmountOffered: null,
    projectName: '',
    investmentType: undefined,
    repaymentDate: null,
  });

  // useEffect(() => {
  //   console.log('FORM VALUES', formValues);
  // });

  // Reset Investment info when Investment type is changed.
  useEffect(() => {
    setFormValues((prev) => ({
      ...prev,
      amount: null,
      duration: '',
      repaymentFrequency: '',
      moratoriumPeriod: '',
      equityAmountOffered: null,
      repaymentDate: null,
    }));
  }, [formValues.investmentType]);

  const { currentStepIndex, isFirstStep, isLastStep, stepsLength, goTo, next } =
    useMultiStepForm(4);

  // type VideoInfoT = {
  //   file: File;
  //   fileName: string;
  // };
  // type ImagesInfoT = {
  //   files: File[];
  //   filesCount: number;
  // };
  const [videoInfo, setVideoInfo] = useState<any>(null);
  const [imagesInfo, setImagesInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const videoInput = useRef<HTMLInputElement>(null);
  const imagesInput = useRef<HTMLInputElement>(null);

  const [portfolioLink, setPortfolioLink] = useState('');
  const [portfolioLinks, setPortfolioLinks] = useState<string[]>([]);
  // const [portfolioLinkError, setPortfolioLinkError] = useState('');
  const [formErrors, setFormErrors] = useState({
    portfolioLink: '',
    projectName: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const stepOneDone = () => {
    if (formValues.projectName && formValues.category) return true;
    return false;
  };
  const stepTwoDone = () => {
    if (imagesInfo) return true;
    return false;
  };
  const stepThreeDone = () => {
    if (
      formValues.investmentType &&
      formValues.amount &&
      formValues.duration &&
      formValues.moratoriumPeriod
    ) {
      if (formValues.investmentType === 'debt') {
        if (formValues.repaymentFrequency) return true;
      }
      if (formValues.investmentType === 'equity') {
        if (formValues.equityAmountOffered && formValues.repaymentDate)
          return true;
      }
    }
    return false;
  };

  const doneSteps = [stepOneDone(), stepTwoDone(), stepThreeDone()].filter(
    Boolean,
  ).length;

  const setError = (name: string, error: string) => {
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validUrl = new RegExp(
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
  );
  const addPortfolioLink = () => {
    if (!portfolioLink) return;
    if (!validUrl.test(portfolioLink)) {
      setError('portfolioLink', 'Invalid URL');
      return;
    }
    setPortfolioLinks((prev) => [portfolioLink, ...prev]);
    setPortfolioLink('');
  };

  const removePortfolioLink = (link: string) => {
    setPortfolioLinks(portfolioLinks.filter((item) => item !== link));
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setIsDraggedOver(true);
  };

  const updateSelectedFile = async (files: any, type: string) => {
    if (files) {
      const file = files[0];
      if (type === 'video' && file.type === 'video/mp4') {
        setVideoInfo({
          file,
          fileName: file.name,
        });
      } else if (type === 'images') {
        if (files.length < 2 || files.length > 12) {
          chkToaster.error({
            title:
              'You can only upload a minimum of 2 images and a maximum of 12 images.',
          });
          return;
        }
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
    if (doneSteps === 3 && currentStepIndex === 2) {
      setLoading(true);
      const formData = new FormData();

      const sendObj = {
        ...formValues,
        portfolioLinks: portfolioLink + portfolioLinks.join(),
        repaymentDate: formValues.repaymentDate
          ? getISODate(formValues.repaymentDate)
          : null,
      };

      const json = JSON.stringify(sendObj);
      const blob = new Blob([json], { type: 'application/json' });

      formData.append('projectData', blob);
      if (videoInfo) formData.append('pitchVideo', videoInfo.file!);

      for (let i = 0; i < imagesInfo.files.length; i++) {
        formData.append('images', imagesInfo.files[i]);
      }

      apiPrivate
        .post('/projects', formData, {
          headers: {
            'Content-type': 'multipart/form-data',
          },
        })
        .then(() => {
          setLoading(false);
          next();
          setFormSubmitted(true);
        })
        .catch((err) => {
          chkToaster.error({ title: err.message });
          setLoading(false);
        });
    } else {
      if (currentStepIndex === 2 && doneSteps !== 3) {
        chkToaster.error({ title: 'Please fill all required fields' });
        return;
      }
      next();
    }
  };

  const getISODate = (date: Date) => {
    return new Date(
      date.getTime() - date.getTimezoneOffset() * 60000,
    ).toISOString();
  };

  const handleGoto = (index: number) => {
    if (formSubmitted) return;
    goTo(index);
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
                        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
                          <CustomInput
                            type="text"
                            size="lg"
                            placeholder="Project Name*"
                            value={formValues.projectName}
                            name="projectName"
                            onChange={handleChange}
                          />
                          <CustomSelectField
                            placeholder="Category*"
                            label="Category"
                            name="category"
                            value={formValues.category}
                            onChange={(e) =>
                              handleChange({
                                target: {
                                  value: e.target.value,
                                  name: 'category',
                                },
                              })
                            }
                            options={[
                              {
                                label: 'Art',
                                value: 'art',
                              },
                              {
                                label: 'Photography',
                                value: 'photography',
                              },
                              {
                                label: 'Music',
                                value: 'music',
                              },
                              {
                                label: 'Food',
                                value: 'food',
                              },
                              {
                                label: 'Fashion',
                                value: 'fashion',
                              },
                            ]}
                          />
                        </SimpleGrid>
                      </Stack>
                      <Stack w="100%" spacing="30px" mb="43px">
                        <Input
                          type="text"
                          size="lg"
                          placeholder="Project Description"
                          name="description"
                          onChange={handleChange}
                          value={formValues.description}
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
                            <CustomInput
                              type="text"
                              size="lg"
                              placeholder="Kindly Input a Portfolio Link"
                              name="portfolioLink"
                              value={portfolioLink}
                              onChange={(e) => {
                                setError('portfolioLink', '');
                                setPortfolioLink(e.target.value);
                              }}
                              error={formErrors.portfolioLink}
                            />
                          </Box>
                          <Box>
                            <Button
                              variant="secondary"
                              leftIcon={<BiPlus />}
                              fontSize="1.6rem"
                              fontWeight="400"
                              onClick={addPortfolioLink}
                            >
                              Add another link
                            </Button>
                          </Box>
                        </Flex>
                        <Stack spacing="2rem">
                          {portfolioLinks.map((link, i) => (
                            <Flex
                              key={i}
                              padding="2rem"
                              bg="blackShade.2"
                              borderRadius="3rem"
                              height="6rem"
                              justify="space-between"
                              align="center"
                            >
                              <Text size="body2" color="white">
                                {link}
                              </Text>
                              <CloseIcon
                                cursor="pointer"
                                onClick={() => removePortfolioLink(link)}
                              />
                            </Flex>
                          ))}
                        </Stack>
                      </Stack>
                      <Stack spacing="22px">
                        <Text color="white" size="body2">
                          Upload Photo*
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
                      <Heading as="h2" mb="4.2rem">
                        Investment type
                      </Heading>
                      <Flex w="100%" gap="2rem" mb="43px">
                        <Box
                          onClick={() => {
                            handleChange({
                              target: {
                                name: 'investmentType',
                                value: 'debt',
                              },
                            });
                          }}
                        >
                          <InvestTypeCard
                            title="Debt"
                            icon={PaletteIcon}
                            desc="The funding comes with no creative strings attached and no limits on creators except that which has been agreed with the investor"
                            paintBorder={formValues.investmentType === 'debt'}
                          />
                        </Box>

                        <Box
                          onClick={() => {
                            handleChange({
                              target: {
                                name: 'investmentType',
                                value: 'equity',
                              },
                            });
                          }}
                        >
                          <InvestTypeCard
                            title={'Equity'}
                            icon={InvestmentIcon}
                            desc={
                              'This method allows investors to support and financially benefit from investing in upcoming talent.'
                            }
                            paintBorder={formValues.investmentType === 'equity'}
                          />
                        </Box>
                      </Flex>
                      {formValues.investmentType === 'debt' && (
                        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
                          <Input
                            type="number"
                            size="lg"
                            placeholder="Enter Amount*"
                            name="amount"
                            value={formValues.amount ?? ''}
                            onChange={handleChange}
                          />
                          <CustomSelectField
                            placeholder="Enter Duration*"
                            label="Enter Duration"
                            h="5.6rem"
                            fontSize="1.6rem"
                            border="1px solid #99A1AA"
                            borderRadius="2rem"
                            name="duration"
                            value={formValues.duration}
                            onChange={(e) => {
                              handleChange({
                                target: {
                                  name: 'duration',
                                  value: e.target.value,
                                },
                              });
                            }}
                            options={[
                              {
                                label: '1 year',
                                value: 'oneYear',
                              },
                              {
                                label: '2 Years',
                                value: 'twoYears',
                              },
                              {
                                label: '5 Years',
                                value: 'fiveYears',
                              },
                            ]}
                          />

                          <CustomSelectField
                            placeholder="Select Payment Frequency*"
                            label="Select Payment Frequency"
                            h="5.6rem"
                            fontSize="1.6rem"
                            border="1px solid #99A1AA"
                            borderRadius="2rem"
                            name="repaymentFrequency"
                            value={formValues.repaymentFrequency}
                            onChange={(e) => {
                              handleChange({
                                target: {
                                  name: 'repaymentFrequency',
                                  value: e.target.value,
                                },
                              });
                            }}
                            options={[
                              {
                                label: 'Weekly',
                                value: 'weekly',
                              },
                              {
                                label: 'Monthly',
                                value: 'monthly',
                              },
                              {
                                label: 'Quarterly',
                                value: 'quarterly',
                              },
                            ]}
                          />

                          <CustomSelectField
                            placeholder="Moratorium Period*"
                            label="Moratorium Period"
                            fontSize="1.6rem"
                            border="1px solid #99A1AA"
                            borderRadius="2rem"
                            name="moratoriumPeriod"
                            value={formValues.moratoriumPeriod}
                            onChange={(e) => {
                              handleChange({
                                target: {
                                  name: 'moratoriumPeriod',
                                  value: e.target.value,
                                },
                              });
                            }}
                            options={[
                              {
                                label: '1 year',
                                value: 'oneYear',
                              },
                              {
                                label: '2 Years',
                                value: 'twoYears',
                              },
                              {
                                label: '5 Years',
                                value: 'fiveYears',
                              },
                            ]}
                          />
                        </SimpleGrid>
                      )}
                      {formValues.investmentType === 'equity' && (
                        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
                          <CustomSelectField
                            placeholder="Moratorium Period*"
                            label="Moratorium Period"
                            fontSize="1.6rem"
                            border="1px solid #99A1AA"
                            borderRadius="2rem"
                            name="moratoriumPeriod"
                            value={formValues.moratoriumPeriod}
                            onChange={(e) => {
                              handleChange({
                                target: {
                                  name: 'moratoriumPeriod',
                                  value: e.target.value,
                                },
                              });
                            }}
                            options={[
                              {
                                label: '1 year',
                                value: 'one-year',
                              },
                              {
                                label: '2 Years',
                                value: 'two-years',
                              },
                              {
                                label: '5 Years',
                                value: 'five-years',
                              },
                            ]}
                          />

                          <Input
                            type="number"
                            size="lg"
                            placeholder="Amount*"
                            name="amount"
                            value={formValues.amount ?? ''}
                            onChange={handleChange}
                          />

                          <Input
                            size="lg"
                            placeholder="Equity amount offered*"
                            type="number"
                            name="equityAmountOffered"
                            value={formValues.equityAmountOffered ?? ''}
                            onChange={handleChange}
                          />

                          <CustomInput.Date
                            placeholder="Repayment date"
                            // h="5.6rem"
                            label="Repayment date*"
                            fontSize="1.6rem"
                            border="1px solid #99A1AA"
                            borderRadius="2rem"
                            type="date"
                            format="d/M/yyyy"
                            calendarIcon={<CalendarIcon />}
                            clearIcon={null}
                            name="repaymentDate"
                            value={formValues.repaymentDate as any}
                            onChange={(e: any) => {
                              handleChange({
                                target: {
                                  name: e.target.name,
                                  // value: getISODate(e.target.value),
                                  value: e.target.value,
                                },
                              });
                            }}
                          />

                          <CustomSelectField
                            placeholder="Duration*"
                            label="Duration"
                            fontSize="1.6rem"
                            border="1px solid #99A1AA"
                            name="duration"
                            value={formValues.duration}
                            onChange={(e) => {
                              handleChange({
                                target: {
                                  name: 'duration',
                                  value: e.target.value,
                                },
                              });
                            }}
                            options={[
                              {
                                label: '1 year',
                                value: 'one-year',
                              },
                              {
                                label: '2 Years',
                                value: 'two-years',
                              },
                              {
                                label: '5 Years',
                                value: 'five-years',
                              },
                            ]}
                          />
                        </SimpleGrid>
                      )}
                    </>
                  )}

                  {/* ==== FINISH ===== */}
                  {currentStepIndex === 3 && (
                    <Flex
                      direction="column"
                      gap="4rem"
                      alignItems="center"
                      justify="center"
                    >
                      <Flex
                        bg="#232629"
                        align="center"
                        justify="center"
                        borderRadius="full"
                        w="125px"
                        h="125px"
                      >
                        <CheckIcon />
                      </Flex>
                      <Stack spacing="1rem">
                        <Heading as="h2">
                          Your Project Has Been Submitted
                        </Heading>
                        <Text
                          textAlign="center"
                          size="body2"
                          mb="1.4rem"
                          maxW="321px"
                        >
                          Your project has been uploaded and you can access it
                          from your dashboard.
                        </Text>
                      </Stack>
                      <Box maxW="39rem">
                        <Link to="/dashboard">
                          <Button variant="multicolor" size="md" w="100%">
                            Go to my dashboard
                          </Button>
                        </Link>
                      </Box>
                    </Flex>
                  )}
                </>
              </Flex>
              <Flex flexDir="column" w="25%">
                <Flex align="center" justify="space-between" mb="2rem">
                  <Text size="body2" color="white">
                    Progress Status
                  </Text>
                  {/* <Text size="body2" fontWeight="700">
                    {(doneSteps / 3) * 100}%
                  </Text> */}
                </Flex>
                <Box mb="3rem">
                  <Progress
                    // hasStripe
                    value={(doneSteps / 3) * 100}
                    borderRadius="2rem"
                    // isAnimated
                    background="blackShade.3"
                    sx={{
                      '& > div': {
                        background: 'gradientStyle.1',
                      },
                    }}
                  />
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
                    onClick={() => handleGoto(0)}
                    className="step-indicator"
                    _hover={{
                      bgGradient:
                        'linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%)',
                    }}
                  >
                    <Icon
                      as={
                        stepOneDone()
                          ? CheckMarkDone
                          : isFirstStep
                          ? CheckMarkActive
                          : CheckMarkInactive
                      }
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
                    onClick={() => handleGoto(1)}
                    className="step-indicator"
                    _hover={{
                      bgGradient:
                        'linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%)',
                    }}
                  >
                    <Icon
                      as={
                        stepTwoDone()
                          ? CheckMarkDone
                          : currentStepIndex === 1
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
                    onClick={() => handleGoto(2)}
                    className="step-indicator"
                    _hover={{
                      bgGradient:
                        'linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%)',
                    }}
                  >
                    <Icon
                      as={
                        stepThreeDone()
                          ? CheckMarkDone
                          : currentStepIndex === 2
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
                {!formSubmitted && (
                  <Box>
                    <Button
                      type="submit"
                      variant="multicolor"
                      size="md"
                      w="100%"
                      onClick={handleSubmit}
                      isLoading={loading}
                    >
                      {doneSteps === 3 && currentStepIndex === 2
                        ? 'Submit'
                        : 'Next'}
                    </Button>
                  </Box>
                )}
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
