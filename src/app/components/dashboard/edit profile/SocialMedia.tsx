import { useState } from 'react';
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
  useDisclosure,
} from '@chakra-ui/react';
import useAuth from 'app/hooks/useAuth';
import twitter from 'app/assets/images/dashboard/twitter.png';
import google from 'app/assets/images/dashboard/google.png';
import tiktok from 'app/assets/images/dashboard/tiktok.png';
import facebook from 'app/assets/images/dashboard/facebook.png';
import insta from 'app/assets/images/dashboard/insta.png';
import youtube from 'app/assets/images/dashboard/youtube.png';
import React, { FC } from 'react';
import CustomModal from 'app/components/common/CustomModal';
import { CustomInput } from '../../common/CustomInput';
import { Link } from 'react-router-dom';
import { MdClear } from 'react-icons/md';

const SocialMedia: FC = () => {
  const authContext = useAuth();
  const firstName = authContext?.auth?.firstName;
  const lastName = authContext?.auth?.lastName;
  const [platform, setPlatform] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <CustomModal isOpen={isOpen} onClose={onClose}>
        <div>
          <h2>{platform} Agreement</h2>
          Project terms and condition for angel investors..Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>

        <Button
          variant="whitebg"
          size="sm"
          w="12rem"
          mt="4rem"
          onClick={() => {
            onClose();
          }}
        >
          Agree
        </Button>
      </CustomModal>
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
              onClick={() => {
                setPlatform('twitter');
                onOpen();
              }}
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
              onClick={() => {
                setPlatform('google');
                onOpen();
              }}
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
              onClick={() => {
                setPlatform('tiktok');
                onOpen();
              }}
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
