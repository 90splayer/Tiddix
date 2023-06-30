import {
  Container,
  Box,
  Avatar,
  Button,
  Flex,
  HStack,
  Text,
  Icon,
  Stack,
  Input,
} from '@chakra-ui/react';
import useAuth from 'app/hooks/useAuth';
import React, { FC } from 'react';

import { CustomInput } from '../../common/CustomInput';
import { Link } from 'react-router-dom';

const ProfilePassword: FC = () => {
  const authContext = useAuth();
  const firstName = authContext?.auth?.firstName;
  const lastName = authContext?.auth?.lastName;
  const steps = [
    'General',
    'Edit Profile',
    'Password',
    'Social media account',
    'Email Notification',
    'Credit Score Check',
    'Delete Account',
  ];
  return (
    <Box>
      <Stack spacing="1.9rem">
        <Box w="100%">
          <CustomInput
            type="text"
            size="lg"
            placeholder="Old Password"
            name="Old Password"
          />
        </Box>
        <Box w="100%">
          <CustomInput
            type="text"
            size="lg"
            placeholder="New Password"
            name="NewPassword"
          />
        </Box>

        <Flex flexDir="column" align="flex-end" mt="6px">
          <Button
            type="submit"
            fontSize="1.6rem"
            variant="multicolor"
            size="md"
          >
            Change
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default ProfilePassword;
