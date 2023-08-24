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
// import InvestmentType from 'app/components/dashboard/create-project/InvestmentType';
import Success from 'app/components/dashboard/create-project/Success';
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

    setFormErrors((prev: any) => ({
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
  const [imageInfo, setImageInfo] = useState<any>(null);
  const [documentInfo, setDocumentInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const videoInput = useRef<HTMLInputElement>(null);
  const imageInput = useRef<HTMLInputElement>(null);
  const pitchDeckInput = useRef<HTMLInputElement>(null);

  const [portfolioLink, setPortfolioLink] = useState('');
  const [portfolioLinks, setPortfolioLinks] = useState<string[]>([]);

  // type formErrorT = {
  //   portfolioLink: string;
  //   projectName: string;
  //   description: string;
  //   category: string;
  //   investmentType: string;
  //   amount: string;
  //   duration: string;
  //   repaymentFrequency: string;
  //   moratoriumPeriod: string;
  //   equityAmountOffered: string;
  //   repaymentDate: string;
  //   imageInfo: string;
  //   videoInfo: string;
  // };

  // const [portfolioLinkError, setPortfolioLinkError] = useState('');
  const [formErrors, setFormErrors] = useState({
    portfolioLink: '',
    projectName: '',
    description: '',
    category: '',
    investmentType: '',
    amount: '',
    duration: '',
    repaymentFrequency: '',
    moratoriumPeriod: '',
    equityAmountOffered: '',
    repaymentDate: '',
    imageInfo: '',
    videoInfo: '',
  });

  const [doToggle, setDoToggle] = useState(true);

  useEffect(() => {
    const errors = Object.values(formErrors).filter(Boolean);
    errors.forEach((item) => chkToaster.error({ title: item }));
  }, [Object.values(formErrors).some(Boolean), doToggle]);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const stepOneDone = () => {
    if (
      formValues.projectName &&
      formValues.category &&
      formValues.description.length >= 100
    )
      return true;
    return false;
  };
  const stepTwoDone = () => {
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
  const stepThreeDone = () => {
    if (imageInfo && videoInfo) return true;
    return false;
  };

  // const stepTwoDone = () => {
  //   if (
  //     formValues.investmentType &&
  //     formValues.amount &&
  //     formValues.duration &&
  //     formValues.moratoriumPeriod
  //   ) {
  //     if (formValues.investmentType === 'debt') {
  //       if (formValues.repaymentFrequency) return true;
  //     }
  //     if (formValues.investmentType === 'equity') {
  //       if (formValues.equityAmountOffered && formValues.repaymentDate)
  //         return true;
  //     }
  //   }
  //   return false;
  // };

  const validateForm = () => {
    if (!formValues.projectName)
      setError('projectName', 'Project name is empty');
    if (!formValues.category)
      setError('category', 'Project category is not selected');
    if (!formValues.description)
      setError('description', 'Project description is empty');

    if (!formValues.investmentType)
      setError('investmentType', 'Investment type is not selected');
    if (!formValues.amount) setError('amount', 'Amount is empty');
    if (!formValues.duration) setError('duration', 'Duration is not selected');
    if (!formValues.moratoriumPeriod)
      setError('moratoriumPeriod', 'Moratorium period is not selected');

    if (formValues.investmentType === 'debt') {
      if (!formValues.repaymentFrequency)
        setError('repaymentFrequency', 'Repayment frequency is not selected');
    }
    if (formValues.investmentType === 'equity') {
      if (!formValues.equityAmountOffered)
        setError('equityAmountOffered', 'Equity AmountOffered is empty');
      if (!formValues.repaymentDate)
        return setError('repaymentDate', 'Repayment Date is not selected');
    }

    if (!imageInfo) setError('imageInfo', 'Cover Art not uploaded');
    if (!videoInfo) setError('videoInfo', 'Pitch Video not uploaded');
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
      setError('portfolioLink', 'Invalid Portfolio URL');
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
        if (file.size > 200000000) {
          return chkToaster.error({ title: 'Video larger than 200mb' });
        }
        setError('videoInfo', '');
        setVideoInfo({
          file,
          fileName: file.name,
        });
      } else if (type === 'image') {
        if (file.size > 2000000) {
          return chkToaster.error({ title: 'Image larger than 2mb' });
        }
        setError('imageInfo', '');
        setImageInfo({
          file: file,
          fileName: file.name,
        });
      } else if (type === 'document') {
        if (file.size > 50000000)
          return chkToaster.error({ title: 'Document larger than 50mb' });
        setDocumentInfo({
          file: file,
          fileName: file.name,
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

  const selectImageInput = () => {
    if (imageInput.current?.value) {
      imageInput.current.value = '';
    }
    if (imageInput.current) {
      imageInput.current.click();
    }
  };

  const selectDocumentInput = () => {
    if (pitchDeckInput.current?.value) {
      pitchDeckInput.current.value = '';
    }
    if (pitchDeckInput.current) {
      pitchDeckInput.current.click();
    }
  };

  const handleChange = (e: any) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
    setError(e.target.name, '');
  };

  const handleSubmit = () => {
    if (doneSteps === 3 && currentStepIndex === 2) {
      validateForm();

      // Check if there's any error recorded in formErrors object

      if (Object.values(formErrors).some(Boolean) || formErrors.portfolioLink) {
        setDoToggle(!doToggle);
        return;
      }

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
      if (imageInfo.file) formData.append('coverArt', imageInfo.file);
      if (documentInfo) formData.append('pitchDeck', documentInfo.file);

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
        validateForm();

        if (Object.values(formErrors).some(Boolean)) setDoToggle(!doToggle);

        // chkToaster.error({ title: 'Please fill all required fields' });
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
                            // size="lg"
                            placeholder="Project Name*"
                            value={formValues.projectName}
                            name="projectName"
                            onChange={handleChange}
                            error={formErrors.projectName}
                          />
                          <CustomSelectField
                            placeholder="Category*"
                            label="Category"
                            name="category"
                            value={formValues.category}
                            error={formErrors.category}
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
                              {
                                label: 'Technology',
                                value: 'Technology',
                              },
                              {
                                label: 'Other',
                                value: 'Other',
                              },
                            ]}
                          />
                        </SimpleGrid>
                      </Stack>
                      <Stack w="100%" mb="43px" position="relative">
                        <CustomInput.TextArea
                          // type="text"
                          size="lg"
                          placeholder="Project Description* (Provide relevant details about the project)"
                          name="description"
                          onChange={handleChange}
                          value={formValues.description}
                          error={formErrors.description}
                          onBlur={() => {
                            if (
                              formValues.description.length &&
                              formValues.description.length < 100
                            ) {
                              setError(
                                'description',
                                'Description must be at least 100 characters',
                              );
                            }
                          }}
                        />
                        <Text
                          fontSize="1.2rem"
                          position="absolute"
                          right="1.2rem"
                        >
                          {formValues.description &&
                            formValues.description.length}
                        </Text>
                      </Stack>

                      <Stack w="100%" spacing="19px" mb="53px">
                        <Flex gap="10px">
                          <Box w="80%">
                            <CustomInput
                              type="text"
                              size="lg"
                              placeholder="Portfolio Link(s)"
                              _placeholder={{
                                fontSize: '1.5rem',
                                color: 'blackShade.4',
                              }}
                              name="portfolioLink"
                              value={portfolioLink}
                              onChange={(e) => {
                                setError('portfolioLink', '');
                                setPortfolioLink(e.target.value);
                              }}
                              onBlur={(e) => {
                                if (
                                  e.target.value &&
                                  !validUrl.test(e.target.value)
                                ) {
                                  setError(
                                    'portfolioLink',
                                    'Invalid Portfolio URL',
                                  );
                                }
                              }}
                              error={formErrors.portfolioLink}
                            />
                            <Text size="body2" mt="4">
                              Kindly Input a link to your portfolio and/or any
                              document online that is relevant to this project.
                            </Text>
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
                    </>
                  )}

                  {/* ==== INVESTMENT TYPE ===== */}
                  {currentStepIndex === 1 && (
                    <>
                      <Heading as="h2" mb="4.2rem">
                        Funding Type*
                        <Text size="body2" mt="4">
                          Select preferred funding type
                        </Text>
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
                            desc="The funding comes with no creative strings attached and no limits on creators"
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
                          <CustomInput
                            type="number"
                            size="lg"
                            placeholder="Enter Amount*"
                            name="amount"
                            value={formValues.amount ?? ''}
                            onChange={handleChange}
                            error={formErrors.amount}
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
                            error={formErrors.duration}
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
                                label: '1 Month',
                                value: 'oneMonth',
                              },
                              {
                                label: '3 Months',
                                value: 'threeMonths',
                              },
                              {
                                label: '6 Months',
                                value: 'sixMonths',
                              },
                              {
                                label: '9 Months',
                                value: 'nineMonths',
                              },
                              {
                                label: '12 Months',
                                value: 'twelveMonths',
                              },
                              {
                                label: 'Above 12 Months',
                                value: 'aboveTwelveMonths',
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
                            error={formErrors.repaymentFrequency}
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
                            error={formErrors.moratoriumPeriod}
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
                                label: 'None',
                                value: 'none',
                              },
                              {
                                label: '1 Week',
                                value: 'oneWeek',
                              },
                              {
                                label: '2 Weeks',
                                value: 'twoWeeks',
                              },
                              {
                                label: '3 Weeks',
                                value: 'threeWeeks',
                              },
                              {
                                label: '4 Weeks',
                                value: 'fourWeeks',
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
                            error={formErrors.moratoriumPeriod}
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
                                label: 'None',
                                value: 'none',
                              },
                              {
                                label: '1 Week',
                                value: 'oneWeek',
                              },
                              {
                                label: '2 Weeks',
                                value: 'twoWeeks',
                              },
                              {
                                label: '3 Weeks',
                                value: 'threeWeeks',
                              },
                              {
                                label: '4 Weeks',
                                value: 'fourWeeks',
                              },
                            ]}
                          />

                          <CustomInput
                            type="number"
                            size="lg"
                            placeholder="Amount*"
                            name="amount"
                            value={formValues.amount ?? ''}
                            onChange={handleChange}
                            error={formErrors.amount}
                          />

                          <CustomInput
                            size="lg"
                            placeholder="Equity amount offered*"
                            type="number"
                            name="equityAmountOffered"
                            value={formValues.equityAmountOffered ?? ''}
                            onChange={handleChange}
                            error={formErrors.equityAmountOffered}
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
                            error={formErrors.repaymentDate}
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
                            error={formErrors.duration}
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
                                label: '1 Month',
                                value: 'oneMonth',
                              },
                              {
                                label: '3 Months',
                                value: 'threeMonths',
                              },
                              {
                                label: '6 Months',
                                value: 'sixMonths',
                              },
                              {
                                label: '9 Months',
                                value: 'nineMonths',
                              },
                              {
                                label: '12 Months',
                                value: 'twelveMonths',
                              },
                              {
                                label: 'Above 12 Months',
                                value: 'aboveTwelveMonths',
                              },
                            ]}
                          />
                        </SimpleGrid>
                      )}
                    </>
                  )}

                  {/* ==== UPLOADS ===== */}
                  {currentStepIndex === 2 && (
                    <>
                      <Heading as="h2" mb="2.3rem ">
                        Portfolio Upload
                      </Heading>
                      <Text size="body1" mb="5.4rem">
                        Upload a cover photo for your project, and optional
                        pitch video and/or pitch deck.
                      </Text>
                      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
                        <Stack spacing="22px">
                          <Text color="white" size="body2">
                            Cover Art*
                          </Text>
                          <form
                            className="upload-section"
                            onDragOver={handleDragOver}
                            onDragEnd={() => setIsDraggedOver(false)}
                            onDragLeave={() => setIsDraggedOver(false)}
                            onDrop={(e) => handleDrop(e, 'image')}
                            role="presentation"
                            onClick={() => selectImageInput()}
                            onChange={() =>
                              updateSelectedFile(
                                imageInput.current?.files,
                                'image',
                              )
                            }
                          >
                            <VStack
                              borderRadius="20px"
                              padding="2rem"
                              w="100%"
                              spacing=".5rem"
                              border={`1px dashed ${
                                formErrors.imageInfo ? 'red' : '#99A1AA'
                              }`}
                            >
                              <Text
                                maxW="265px"
                                textAlign="center"
                                size="body2"
                              >
                                Image is expected to not exceed 2mb. Please
                                upload a square image for better display
                              </Text>
                              <IconButton
                                aria-label="Download video"
                                fontSize="3.6rem"
                                variant="unstyled"
                                border="0px"
                                icon={<IoCloudUploadSharp />}
                                sx={
                                  imageInfo && {
                                    path: { fill: '#33ba7c' },
                                  }
                                }
                              />
                              <small style={{ color: '#33ba7c' }}>
                                {imageInfo?.fileName}
                              </small>
                              <Text size="body2">
                                Upload, Drag and Drop jpg, jpeg, or png files
                              </Text>
                              <input
                                type="file"
                                id="upload-file"
                                ref={imageInput}
                                hidden
                                accept=".jpg, .jpeg, .png"
                                multiple
                              />
                            </VStack>
                          </form>
                        </Stack>
                        <Stack spacing="22px">
                          <Text color="white" size="body2">
                            Pitch Video*
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
                              padding="2rem"
                              w="100%"
                              spacing=".5rem"
                              border={`1px dashed ${
                                formErrors.videoInfo ? 'red' : '#99A1AA'
                              }`}
                            >
                              <Text
                                maxW="265px"
                                textAlign="center"
                                size="body2"
                              >
                                Video is expected to not exceeded 200mb and a
                                max of 2 minutes.
                              </Text>
                              <IconButton
                                aria-label="Download video"
                                fontSize="3.6rem"
                                variant="unstyled"
                                border="0px"
                                icon={<IoCloudUploadSharp />}
                                sx={
                                  videoInfo && {
                                    path: { fill: '#33ba7c' },
                                  }
                                }
                              />
                              <small style={{ color: '#33ba7c' }}>
                                {videoInfo?.fileName && videoInfo.fileName}
                              </small>
                              <Text size="body2">
                                Upload, Drag and Drop mp4 file
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

                        <Stack spacing="22px" mt="10">
                          <Text color="white" size="body2">
                            Pitch Deck
                          </Text>
                          <form
                            className="upload-section"
                            onDragOver={handleDragOver}
                            onDragEnd={() => setIsDraggedOver(false)}
                            onDragLeave={() => setIsDraggedOver(false)}
                            onDrop={(e) => handleDrop(e, 'document')}
                            role="presentation"
                            onClick={() => selectDocumentInput()}
                            onChange={() =>
                              updateSelectedFile(
                                pitchDeckInput.current?.files,
                                'document',
                              )
                            }
                          >
                            <VStack
                              borderRadius="20px"
                              padding="2rem"
                              w="100%"
                              spacing=".5rem"
                              border="1px dashed #99A1AA"
                            >
                              <Text
                                maxW="265px"
                                textAlign="center"
                                size="body2"
                              >
                                Pitch document is expected to not exceed 50mb
                              </Text>
                              <IconButton
                                aria-label="Download video"
                                fontSize="3.6rem"
                                variant="unstyled"
                                border="0px"
                                icon={<IoCloudUploadSharp />}
                                sx={
                                  documentInfo && {
                                    path: { fill: '#33ba7c' },
                                  }
                                }
                              />
                              <small style={{ color: '#33ba7c' }}>
                                {documentInfo?.fileName &&
                                  documentInfo.fileName}
                              </small>
                              <Text size="body2">
                                Upload, Drag and Drop pdf, ppt, pptx, doc, or
                                docx file
                              </Text>
                              <input
                                type="file"
                                id="upload-file"
                                ref={pitchDeckInput}
                                hidden
                                accept=".ppt, .pptx, .doc, .docx, .pdf"
                              />
                            </VStack>
                          </form>
                        </Stack>
                      </SimpleGrid>
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
                          Your project has been uploaded successfully. You can
                          now access it from your dashboard
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
                    />{' '}
                    Project Type
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
                    />
                    Uploads
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
