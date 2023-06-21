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

const SocialMedia: FC = () => {
  const authContext = useAuth();
  const firstName = authContext?.auth?.firstName;
  const lastName = authContext?.auth?.lastName;
  const steps = [
    'General',
    'Edit Profile',
    'Password',
    'Social media account',
    'Email Notification',
    'Delete Account',
  ];
  return (
    <Box>
      <Stack spacing="1.8rem">
        <Stack spacing="2.4rem" mb="1.3rem">
          <Text size="body2">
            {' '}
            This information will not be shared outside of Tiddix without your
            permission.
          </Text>
          <HStack spacing="1.3rem">
            <Box
              p="1rem"
              bg="#232629"
              transition="0.5 ease"
              _hover={{
                cursor: 'pointer',
                transform: 'scale(1.03)',
              }}
              borderRadius="10px"
            >
              <Image src={twitter} w="3rem" h="3rem" alt="twitter" />
            </Box>
            <Box
              p="1rem"
              transition="0.5 ease"
              _hover={{
                cursor: 'pointer',
                transform: 'scale(1.03)',
              }}
              bg="#232629"
              borderRadius="10px"
            >
              <Image src={google} w="3rem" h="3rem" alt="google" />
            </Box>
            <Box
              p="1rem"
              transition="0.5 ease"
              _hover={{
                cursor: 'pointer',
                transform: 'scale(1.03)',
              }}
              bg="#232629"
              borderRadius="10px"
            >
              <Image src={tiktok} w="3rem" h="3rem" alt="tiktok" />
            </Box>
          </HStack>
        </Stack>

        <Flex
          w="100%"
          bg="#232629"
          borderRadius="20px"
          p="1.5rem"
          align="center"
          justify="space-between"
        >
          <HStack spacing="1.5rem">
            <Box>
              <Image src={facebook} w="3rem" h="3rem" alt="facebook" />
            </Box>
            <Stack>
              <Text
                size="body2"
                color="#fff"
              >{`${firstName}_${lastName}`}</Text>
              <Text size="body2">facebook</Text>
            </Stack>
          </HStack>
          <Box>
            <Icon
              as={MdClear}
              cursor="pointer"
              fontSize="1.6rem"
              color="#99A1AA"
            />
          </Box>
        </Flex>

        <Flex
          w="100%"
          bg="#232629"
          borderRadius="20px"
          p="1.5rem"
          align="center"
          justify="space-between"
        >
          <HStack spacing="1.5rem">
            <Box>
              <Image src={insta} w="3rem" h="3rem" alt="instagram" />
            </Box>
            <Stack>
              <Text
                size="body2"
                color="#fff"
              >{`${firstName}_${lastName}`}</Text>
              <Text size="body2">instagram</Text>
            </Stack>
          </HStack>
          <Box>
            <Icon
              as={MdClear}
              cursor="pointer"
              fontSize="1.6rem"
              color="#99A1AA"
            />
          </Box>
        </Flex>

        <Flex
          w="100%"
          bg="#232629"
          borderRadius="20px"
          p="1.5rem"
          align="center"
          justify="space-between"
        >
          <HStack spacing="1.5rem">
            <Box>
              <Image src={youtube} w="3rem" h="3rem" alt="youtube" />
            </Box>
            <Stack>
              <Text
                size="body2"
                color="#fff"
              >{`${firstName}_${lastName}`}</Text>
              <Text size="body2">youtube</Text>
            </Stack>
          </HStack>
          <Box>
            <Icon
              as={MdClear}
              cursor="pointer"
              fontSize="1.6rem"
              color="#99A1AA"
            />
          </Box>
        </Flex>

        <Flex flexDir="column" align="flex-end" mt="6px">
          <Button
            type="submit"
            fontSize="1.6rem"
            variant="multicolor"
            size="md"
          >
            Update Social Profile
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default SocialMedia;
