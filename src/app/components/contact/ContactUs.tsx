import {
  Box,
  Container,
  Flex,
  VStack,
  Text,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Button,
  Icon,
} from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import ContactImg from 'app/assets/images/contact.png';
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { CustomInput } from '../common/CustomInput';
import CustomSelectField from '../common/CustomSelect';
import countries from 'app/utils/Countries';
import { object, string } from 'yup';
import api from 'app/api/tiddix';
import { chkToaster } from '../common/Toaster';
// import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFormik } from 'formik';
import { formikErrorHandler } from 'app/utils/helpers';

interface ContactFormInputs {
  fullName: string;
  email: string;
  companyName: string;
  message: string;
  country: string;
}

const schema = object().shape({
  fullName: string()
    .trim()
    .min(1, 'First name too Short!')
    .max(30, 'First name too Long!')
    .required('Full name is required!'),
  email: string().trim().email('Invalid email').required('Email is required'),
  companyName: string()
    .trim()
    .max(100, 'Company name is too long')
    .required('Company name is Required'),
  message: string()
    .trim()
    .min(20, 'Message too short, at least 20 characters required')
    .max(1000, 'Message too long, keep characters less than 1000')
    .required('Message is Required'),
  country: string().required('Country is Required'),
});

const ContactUs: FC = () => {
  const [loading, setLoading] = useState(false);

  const authHandler = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      companyName: '',
      message: '',
      country: '',
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      api
        .post('/contact', values)
        .then(() => {
          chkToaster.success({ title: 'Contact form submitted successfully' });
          setLoading(false);
        })
        .catch(() => {
          chkToaster.error({ title: 'Something went wrong, please try again' });
          setLoading(false);
        });
      setLoading(false);
      resetForm();
    },
  });

  return (
    <Box>
      <Container maxW="144rem" pt="8.06rem" px="18.2rem" pb="12.19rem">
        <Flex flexDir="column" w="full">
          <VStack mb="8.13rem">
            <Text
              mb="4.8rem"
              size="body2"
              bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
              bgClip="text"
              fontSize="2.6rem"
            >
              Contact Us
            </Text>
            <Heading size="display2" pb="1.81rem">
              Got questions about any of our services?
            </Heading>
            <Text size="body1" textAlign="center">
              Contact us now through the channels below; email, by phone, or the
              contact form.
              <br />
              Let us assist you with any of your queries. We will get back to
              you promptly.
            </Text>
          </VStack>
          <Flex justify="space-between" gap="7.6rem" align="flex-start">
            <VStack spacing="20px" align="flex-start">
              <Box mb="1.6rem">
                <Image src={ContactImg} alt="contact us" />
              </Box>
              <Text
                fontSize="2.4rem"
                maxW="39.2rem"
                lineHeight="36px"
                color="#fff"
              >
                Pippins, Cherry Drive, Forty Green, Beaconsfield,
                Buckinghamshire HP9 1XP
              </Text>
              <HStack>
                <Icon as={BiPhoneCall} color="#fff" />
                <Text as="span" size="body3" color="#fff">
                  +234 812 345 6789
                </Text>
              </HStack>
              <HStack>
                <Icon as={AiOutlineMail} color="#fff" />
                <Text as="span" size="body3" color="#fff">
                  contact@tiddix.com
                </Text>
              </HStack>
            </VStack>
            <form style={{ width: '100%' }} onSubmit={authHandler.handleSubmit}>
              <Stack spacing="24px">
                <Heading size="h1" pb="3.94rem">
                  Get in touch with us
                </Heading>
                <CustomInput
                  type="text"
                  size="lg"
                  placeholder="Full Name"
                  name="fullName"
                  value={authHandler.values.fullName}
                  onChange={authHandler.handleChange}
                  error={formikErrorHandler('fullName', authHandler)}
                />
                <CustomInput
                  type="text"
                  size="lg"
                  placeholder="Email Address"
                  name="email"
                  value={authHandler.values.email}
                  onChange={authHandler.handleChange}
                  error={formikErrorHandler('email', authHandler)}
                />
                <CustomInput
                  type="text"
                  size="lg"
                  placeholder="Company Name"
                  name="companyName"
                  value={authHandler.values.companyName}
                  onChange={authHandler.handleChange}
                  error={formikErrorHandler('companyName', authHandler)}
                />
                <CustomSelectField
                  size="lg"
                  label="Country"
                  options={countries}
                  placeholder="Select Country"
                  name="country"
                  value={authHandler.values.country}
                  onChange={({ target }) => {
                    authHandler.setFieldValue('country', target.value);
                  }}
                  error={formikErrorHandler('country', authHandler)}
                />
                <CustomInput
                  type="text"
                  size="lg"
                  placeholder="How can we help you?"
                  name="message"
                  value={authHandler.values.message}
                  onChange={authHandler.handleChange}
                  error={formikErrorHandler('message', authHandler)}
                />
                <Button
                  variant="multicolor"
                  size="sm"
                  type="submit"
                  w="fit-content"
                  alignSelf="flex-end"
                  isLoading={loading}
                >
                  Send Message
                </Button>
              </Stack>
            </form>
          </Flex>
          <Flex justify="flex-end"></Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactUs;
