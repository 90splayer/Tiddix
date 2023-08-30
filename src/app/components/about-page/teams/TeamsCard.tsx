import {
  Box,
  Flex,
  Stack,
  Text,
  Heading,
  Image,
  Button,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Avatar,
  WrapItem,
  VStack,
} from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = {
  image: any;
  name: string;
  title: string;
  portfolio: string;
};

const TeamsCard: FC<Props> = ({ image, name, title, portfolio }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack
      alignItems="center"
      bg="#232629"
      borderRadius="30px"
      // maxW="29.6rem"
      transition="0.5s ease"
      _hover={{
        boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.15)',
        transform: 'scale(1.03)',
      }}
      // spacing="1.5rem"
      w="100%"
      h="auto"
      py="5.8rem"
      px="2rem"
    >
      <WrapItem mb="2rem">
        <Avatar w="15.7rem" h="15.7rem" name={name} src={image} />{' '}
      </WrapItem>

      <Heading as="h2" textAlign="center" color="#fff">
        {name}
      </Heading>
      <Text color="#99A1AA" size="body2" textAlign="center">
        {title}
      </Text>
      <Box pt="2rem">
        <Button variant="default" fontSize="1.6rem" onClick={onOpen} size="sm">
          View Profile
        </Button>

        <Modal
          blockScrollOnMount={false}
          size="6xl"
          isCentered
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent pos="relative" borderRadius="10px" bg="#232629">
            <Flex
              align="center"
              justify="center"
              w="100%"
              visibility={{ base: 'hidden', sm: 'unset' }}
              minH="12rem"
              bg="gradientStyle.1"
              borderRadius="10px"
            ></Flex>
            <ModalCloseButton
              color="#000"
              visibility={{ base: 'hidden', sm: 'unset' }}
              p="10px"
              bg="white"
              _hover={{ opacity: '0.5' }}
              borderRadius="50px"
              fontSize="lg"
            />
            <ModalBody>
              <VStack mt={{ base: '50px', sm: '-100px' }} pb="2rem">
                <Avatar
                  border="3px solid #232629"
                  // size="2xl"
                  w={{ base: '120px', sm: '150px' }}
                  h={{ base: '120px', sm: '150px' }}
                  name={name}
                  src={image}
                />
                <Heading
                  as="h2"
                  letterSpacing="2px"
                  textAlign="center"
                  mb="1.6rem"
                  color="#fff"
                >
                  {name}
                </Heading>
                <Text fontWeight="700" fontSize="1.4rem">
                  {title}
                </Text>
              </VStack>
              <Text fontSize="14px" textAlign="justify">
                <Box
                  dangerouslySetInnerHTML={{
                    __html: portfolio,
                  }}
                ></Box>
              </Text>
            </ModalBody>

            {/* <ModalFooter> */}
            <Flex align="center" justify="center" mb="3rem">
              <Button variant="multicolor" size="sm" onClick={onClose}>
                Back
              </Button>
            </Flex>
            {/* </ModalFooter> */}
          </ModalContent>
        </Modal>
      </Box>
    </Stack>
  );
};

export default TeamsCard;
