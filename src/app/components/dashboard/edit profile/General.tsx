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
import { verify } from 'app/assets/svgs/home';
import useAuth from 'app/hooks/useAuth';
import React, { FC } from 'react';

import { CustomInput } from '../../common/CustomInput';
import { Link } from 'react-router-dom';

const General: FC = () => {
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
            placeholder="Username"
            name="username"
          />
        </Box>
        <Box w="100%">
          <CustomInput
            type="text"
            size="lg"
            placeholder="Email Address"
            name="email address"
          />
        </Box>

        <Flex flexDir="column" align="flex-end" mt="6px">
          <Button
            type="submit"
            fontSize="1.6rem"
            variant="multicolor"
            size="md"
          >
            Save Changes
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default General;
