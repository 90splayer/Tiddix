import {
  Container,
  Box,
  Avatar,
  Button,
  Flex,
  HStack,
  Text,
  Icon,
  Image,
  Stack,
  Input,
  Checkbox,
} from '@chakra-ui/react';
import useAuth from 'app/hooks/useAuth';
import twitter from 'app/assets/images/dashboard/twitter.png';
import google from 'app/assets/images/dashboard/google.png';
import tiktok from 'app/assets/images/dashboard/tiktok.png';
import facebook from 'app/assets/images/dashboard/facebook.png';
import insta from 'app/assets/images/dashboard/insta.png';
import youtube from 'app/assets/images/dashboard/youtube.png';
import React, { FC } from 'react';

import { CustomInput } from '../../common/CustomInput';
import { Link } from 'react-router-dom';
import { MdClear } from 'react-icons/md';

const Notification: FC = () => {
  const authContext = useAuth();
  const firstName = authContext?.auth?.firstName;
  const lastName = authContext?.auth?.lastName;
  const steps = [
    'General',
    'Edit Profile',
    'Password',
    'Social media account',
    'Email Notification',
    'Credit Score',
    'Delete Account',
  ];
  return (
    <Box>
      <Stack spacing="1.7rem">
        <Text color="#fff" mb="5px">
          Alert Notifications
        </Text>

        <HStack
          spacing="1.5rem"
          w="100%"
          bg="#232629"
          borderRadius="20px"
          p="1.5rem"
        >
          <Box>
            <Checkbox size="lg" colorScheme="pink" />
          </Box>
          <Stack>
            <Text size="body2" color="#fff">
              Tiddix Communications
            </Text>
            <Text size="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </Text>
          </Stack>
        </HStack>

        <HStack
          spacing="1.5rem"
          w="100%"
          bg="#232629"
          borderRadius="20px"
          p="1.5rem"
        >
          <Box>
            <Checkbox size="lg" colorScheme="pink" />
          </Box>
          <Stack>
            <Text size="body2" color="#fff">
              Account Activity
            </Text>
            <Text size="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </Text>
          </Stack>
        </HStack>

        <HStack
          spacing="1.5rem"
          w="100%"
          bg="#232629"
          borderRadius="20px"
          p="1.5rem"
        >
          <Box>
            <Checkbox size="lg" colorScheme="pink" />
          </Box>
          <Stack>
            <Text size="body2" color="#fff">
              Tiddix Newsletters
            </Text>
            <Text size="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </Text>
          </Stack>
        </HStack>

        <Flex flexDir="column" align="flex-end" mt="6px">
          <Button
            type="submit"
            fontSize="1.6rem"
            variant="multicolor"
            size="md"
          >
            Get Notification
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Notification;
