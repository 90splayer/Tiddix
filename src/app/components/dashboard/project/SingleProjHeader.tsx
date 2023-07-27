import {
  Avatar,
  Box,
  Flex,
  HStack,
  Text,
  Stack,
  Heading,
  Button,
  Icon,
} from '@chakra-ui/react';
import { verify } from 'app/assets/svgs/home';
import { AiFillPlusCircle, AiTwotoneHeart } from 'react-icons/ai';
import { IoIosRocket } from 'react-icons/io';
import { IoShareSocialSharp } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';
import React from 'react';
import { projectT } from './SingleProject';
import { Link } from 'react-router-dom';

const SingleProjHeader = ({
  projectName,
  category,
  creativeName,
  creativePicture,
  id,
  creativeId,
}: any) => {
  console.log('INFO', category);

  return (
    <Flex mb="4.3rem" justify="space-between" align="flex-start">
      <Stack spacing="24px">
        <HStack spacing="2.7rem">
          <Heading size="display2">{projectName}</Heading>
          <Text fontSize="14px">{category}</Text>
        </HStack>
        <Link to={`/user-profile/${creativeId}`}>
          <HStack spacing="10px">
            <Avatar boxSize="25px" name={creativeName} src={creativePicture} />
            <HStack>
              <Text color="#fff">{creativeName}</Text>
              {''}
              <Box>{verify}</Box>
            </HStack>
          </HStack>
        </Link>
      </Stack>
      <HStack spacing="15px">
        <Box>
          <Button
            borderRadius="100px"
            bg="#232629"
            border="2px solid #99A1AA"
            maxW="19.6rem"
            color="#fff"
            leftIcon={<IoIosRocket />}
            size="md"
            variant="default"
          >
            Boost Project
          </Button>
        </Box>
        <Box>
          <Button
            borderRadius="100px"
            bg="#232629"
            border="2px solid #99A1AA"
            maxW="19.6rem"
            color="#fff"
            leftIcon={<AiFillPlusCircle />}
            size="md"
            variant="default"
          >
            Invite Investor
          </Button>
        </Box>
        <Flex
          bg="#232629"
          border="2px solid #99A1AA"
          align="center"
          justify="center"
          borderRadius="100%"
          w="50px"
          h="50px"
          transition="0.5 ease"
          _hover={{
            cursor: 'pointer',
            transform: 'scale(1.03)',
          }}
        >
          <Icon as={MdEdit} fontSize="2rem" color="#fff" />
        </Flex>
        <Flex
          bg="#232629"
          align="center"
          border="2px solid #99A1AA"
          justify="center"
          borderRadius="100%"
          w="50px"
          h="50px"
          transition="0.5 ease"
          _hover={{
            cursor: 'pointer',
            transform: 'scale(1.03)',
          }}
        >
          <Icon as={AiTwotoneHeart} fontSize="2rem" color="#fff" />
        </Flex>
        <Flex
          bg="#232629"
          border="2px solid #99A1AA"
          align="center"
          justify="center"
          borderRadius="100%"
          w="50px"
          h="50px"
          transition="0.5 ease"
          _hover={{
            cursor: 'pointer',
            transform: 'scale(1.03)',
          }}
        >
          <Icon as={IoShareSocialSharp} fontSize="2rem" color="#fff" />
        </Flex>
      </HStack>
    </Flex>
  );
};

export default SingleProjHeader;
