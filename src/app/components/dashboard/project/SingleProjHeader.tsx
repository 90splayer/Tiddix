import {
  Avatar,
  Box,
  Flex,
  HStack,
  Text,
  Stack,
  VStack,
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
import { dateFormat } from 'app/utils/helpers';

const SingleProjHeader = ({
  projectName,
  category,
  creativeName,
  creativePicture,
  id,
  creativeId,
  dateCreated,
}: any) => {
  console.log('INFO', category);

  return (
    <Flex
      mb="4.3rem"
      gap={2}
      flexDir={{ base: 'column', md: 'row' }}
      justify="space-between"
      align="flex-start"
    >
      <Stack
        mb={{ base: '2rem', md: '0' }}
        spacing={{ base: '14px', lg: '24px' }}
      >
        <Flex gap={{ base: '1rem', md: '2.7rem' }} flexDir="column">
          <Box>
            <Heading size="display2">{projectName}</Heading>
          </Box>
          <HStack spacing={{ base: '1rem', sm: '1.5rem' }}>
            <Text fontSize={{ base: '12px', sm: '14px' }}> {category}</Text>
            <Text fontSize={{ base: '12px', sm: '14px' }}>
              {dateFormat(dateCreated).easyDate}
            </Text>
          </HStack>
        </Flex>
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
      <Flex gap="15px" flexDir={{ base: 'column', lg: 'row' }}>
        <HStack spacing="15px">
          <Box>
            <Button
              borderRadius="100px"
              bg="#232629"
              border="2px solid #99A1AA"
              maxW="19.6rem"
              color="#fff"
              leftIcon={<IoIosRocket />}
              size={{ base: 'sm', sm: 'md' }}
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
              size={{ base: 'sm', sm: 'md' }}
              variant="default"
            >
              Invite Investor
            </Button>
          </Box>
        </HStack>

        <HStack spacing="15px">
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
    </Flex>
  );
};

export default SingleProjHeader;
