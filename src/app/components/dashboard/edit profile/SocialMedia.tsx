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
  Heading,
} from '@chakra-ui/react';
import useAuth from 'app/hooks/useAuth';
import twitter from 'app/assets/images/dashboard/twitter.png';
import google from 'app/assets/images/dashboard/google.png';
import tiktok from 'app/assets/images/dashboard/tiktok.png';
import facebook from 'app/assets/images/dashboard/facebook.png';
import insta from 'app/assets/images/dashboard/insta.png';
import youtube from 'app/assets/images/dashboard/youtube.png';
import spotify from 'app/assets/images/dashboard/spotify.png';
import twitch from 'app/assets/images/dashboard/twitch.png';
import React, { FC } from 'react';
import CustomModal from 'app/components/common/CustomModal';
import { CustomInput } from '../../common/CustomInput';
import { Link } from 'react-router-dom';
import { MdClear } from 'react-icons/md';

const SocialIconWrapper = ({ children, onClick }: any) => {
  return (
    <Box
      p="1rem"
      bg="#232629"
      transition="0.5 ease"
      _hover={{
        cursor: 'pointer',
        transform: 'scale(1.03)',
      }}
      borderRadius="10px"
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

const SocialMedia: FC = () => {
  const authContext = useAuth();
  const firstName = authContext?.auth?.firstName;
  const lastName = authContext?.auth?.lastName;
  const [platform, setPlatform] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <CustomModal isOpen={isOpen} onClose={onClose} overflow="scroll" my="5">
        <div>
          <Heading mb="10" size="h3">
            Aquisition FAQs
          </Heading>
          <Text fontWeight="bold" color="white" mb="2" size="body2">
            Why do you need access to my social media accounts?
          </Text>
          <Text size="body2">
            We understand your concern about giving us access, and we need to
            clarify that giving us access to your social media accounts allows
            us to only gather data needed to improve your user experience (We do
            not edit or make changes to your account)
          </Text>
          <Text fontWeight="bold" color="white" mt="8" mb="2" size="body2">
            Why have you requested this particular scope?
          </Text>
          <Text size="body2">
            The listed scopes directly correlates with the data required to
            offer you our full range of services and benefits. If any of the
            scopes are denied, we cannot assure you the full Tiddix experience.
          </Text>
          <Text fontWeight="bold" color="white" mt="8" mb="2" size="body2">
            Do I have to give full access to all scopes listed?
          </Text>
          <Text size="body2">
            To enjoy the full range of benefits Tiddix offers, you have to.
          </Text>
          <Text fontWeight="bold" color="white" mt="8" mb="2" size="body2">
            Is my social media data safe?
          </Text>
          <Text size="body2">
            Yes. Our commitment to data security is unwavering, we put in place
            a measures to protect your information from third-party invasion. We
            are committed to upholding the trust you place in us.
          </Text>
          <Text fontWeight="bold" color="white" mt="8" mb="2" size="body2">
            What are you using the data for?
          </Text>
          <Text size="body2">
            Your social media data enables us to create your personalized Tiddix
            score which is the core functionality of our platform. We use this
            Tiddix score to craft a tailored experience for you. We encourage
            open communications. We want you to feel confident while we provide
            you with our services; so don't hesitate to reach out to us if you
            have any concern.
          </Text>
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
            <SocialIconWrapper
              onClick={() => {
                setPlatform('google');
                onOpen();
              }}
            >
              <Image src={google} w="3rem" h="3rem" alt="google" />
            </SocialIconWrapper>
            <SocialIconWrapper
              onClick={() => {
                setPlatform('instagram');
                onOpen();
              }}
            >
              <Image src={insta} w="3rem" h="3rem" alt="google" />
            </SocialIconWrapper>
            <SocialIconWrapper
              onClick={() => {
                setPlatform('tiktok');
                onOpen();
              }}
            >
              <Image src={tiktok} w="3rem" h="3rem" alt="tiktok" />
            </SocialIconWrapper>
            <SocialIconWrapper
              onClick={() => {
                setPlatform('facebook');
                onOpen();
              }}
            >
              <Image src={facebook} w="3rem" h="3rem" alt="tiktok" />
            </SocialIconWrapper>
            <SocialIconWrapper
              onClick={() => {
                setPlatform('youtube');
                onOpen();
              }}
            >
              <Image src={youtube} w="3rem" h="3rem" alt="tiktok" />
            </SocialIconWrapper>
            <SocialIconWrapper
              onClick={() => {
                setPlatform('spotify');
                onOpen();
              }}
            >
              <Image src={spotify} w="3rem" h="3rem" alt="tiktok" />
            </SocialIconWrapper>
            <SocialIconWrapper
              onClick={() => {
                setPlatform('twitch');
                onOpen();
              }}
            >
              <Image src={twitch} w="3rem" h="3rem" alt="tiktok" />
            </SocialIconWrapper>
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
