import {
  Box,
  Button,
  Flex,
  Stack,
  VStack,
  Text,
  Input,
  Heading,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { CustomInput } from 'app/components/common/CustomInput';
import { chkToaster } from 'app/components/common/Toaster';
import { useRef, useState } from 'react';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import useApiPrivate from 'app/hooks/useApiPrivate';
import { useNavigate } from 'react-router-dom';
import { date, object, string } from 'yup';

type CreditScoreInputT = {
  fullName: string;
  address: string;
  dateOfBirth: string;
};

const schema = object().shape({
  fullName: string().required('Your Full Name is Required'),
  address: string().required('Your Address is Required'),
  dateOfBirth: date().required('Your Date of Birth is Required'),
});

const CreditScore = () => {
  const steps = [
    'General',
    'Edit Profile',
    'Password',
    'Social media account',
    'Email Notification',
    'Credit Score',
    'Delete Account',
  ];

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const apiPrivate = useApiPrivate();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<CreditScoreInputT>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: '',
      address: '',
      dateOfBirth: '',
    },
  });

  const onSubmitHandler = (data: CreditScoreInputT) => {
    setLoading(true);
    const { fullName, address, dateOfBirth } = data;
    apiPrivate
      .post('/credit-score', data)
      .then((response: any) => {
        setLoading(false);
        console.log(response);
        chkToaster.success({
          title: response.data.message,
        });
        reset();

        // setTimeout(() => {
        //   navigate('/dashboard/edit-profile', { replace: true });
        // }, 3000);
      })
      .catch((error: any) => {
        setLoading(false);
        chkToaster.error({
          title: error.response.data.message || 'Unable to Submit',
        });
      });
    reset();
  };

  return (
    <Box>
      <VStack>
        <Text size="body2" textAlign="justify" mb="2rem" lineHeight="2.5rem">
          We require this information for legal and credit checks purposes.
          <br />
          Make sure all the info you provide is legally correct, because it can
          affect your ability to take out new forms of credit.
        </Text>
      </VStack>
      <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
        <Stack spacing="1.9rem">
          <FormControl isRequired isInvalid={!!errors.fullName}>
            <Input
              size="lg"
              placeholder="Full Name"
              {...register('fullName')}
            />
            {errors.fullName && (
              <Text color="#C21E56" fontSize="1.5rem">
                {errors.fullName.message}
              </Text>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.address}>
            <Input
              size="lg"
              placeholder="Residential Address"
              {...register('address')}
            />
            {errors.address && (
              <Text color="#C21E56" fontSize="1.5rem">
                {errors.address.message}
              </Text>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.dateOfBirth}>
            <Input
              size="lg"
              placeholder="Date of Birth"
              type="date"
              {...register('dateOfBirth')}
            />
            {errors.dateOfBirth && (
              <Text color="#C21E56" fontSize="1.5rem">
                {errors.dateOfBirth.message}
              </Text>
            )}
          </FormControl>

          <Flex flexDir="column" align="flex-end" mt="6px">
            <Button
              type="submit"
              fontSize="1.6rem"
              variant="multicolor"
              size="md"
              isLoading={loading}
            >
              Submit
            </Button>
          </Flex>
        </Stack>
      </form>
    </Box>
  );
};

export default CreditScore;
