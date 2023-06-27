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
};

const TeamsCard: FC<Props> = ({ image, name, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack
      alignItems="center"
      bg="#232629"
      borderRadius="30px"
      // maxW="29.6rem"
      w="100%"
      h="auto"
      py="5.8rem"
      px="2rem"
    >
      <Box pb="3.7rem">
        <Image
          src={image}
          alt="team member"
          w="15.7rem"
          h="15.7rem"
          borderRadius="50rem"
        />
      </Box>
      <Heading as="h2" textAlign="center" mb="1.6rem" color="#fff">
        {name}
      </Heading>
      <Text color="#99A1AA" size="body2" textAlign="center">
        {title}
      </Text>
      <Box pt="2rem">
        <Button onClick={onOpen} size="sm">
          View Profile
        </Button>

        <Modal
          blockScrollOnMount={false}
          size="6xl"
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent pos="relative" borderRadius="10px" bg="#232629">
            {/* <ModalHeader h="20rem" bg="pink">
              <WrapItem>
                <Avatar
                  pos="absolute"
                  size="xl"
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />{' '}
              </WrapItem>
            </ModalHeader> */}
            <Flex
              align="center"
              justify="center"
              w="100%"
              h="12rem"
              bg="gradientStyle.1"
              borderRadius="10px"
            ></Flex>
            <ModalCloseButton
              color="#000"
              p="10px"
              bg="white"
              borderRadius="50px"
              fontSize="lg"
            />
            <ModalBody>
              <VStack mt="-100px" pb="2rem">
                <Avatar
                  border="3px solid #232629"
                  // size="2xl"
                  w="150px"
                  h="150px"
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
                <Heading
                  as="h2"
                  letterSpacing="2px"
                  textAlign="center"
                  mb="1.6rem"
                  color="#fff"
                >
                  Abiodun Segun
                </Heading>
                <Text fontWeight="700" fontSize="1.4rem">
                  {' '}
                  Software Developer
                </Text>
              </VStack>
              <Text fontSize="14px" textAlign="justify">
                <b>Ifeoma Adeoye</b> is the Managing Director of Tiddix Limited,
                a technology driven fundraising and investment solution for
                creatives and investors. Prior to joining Tiddix, she has run
                and managed several businesses, including Bia homes ltd,
                Business Nest Investments Limited and IMSE Energy resources. She
                graduated with a First Class Honours degree, in Economics, from
                the University of Manchester and she holds a Master’s degree in
                Economics from the University of Warwick. She has over 10 years
                of experience with starting, building and managing businesses to
                profitability. Having worked with KPMG, The Royal Bank of
                Scotland and FBNQuest Merchant Bank. She has acquired broad work
                experience within the Oil & Gas industry, financial services
                industry, aviation, consumer markets and public sector. She has
                extensive experience in advisory services covering financial
                advisory, business improvement, corporate strategy articulation,
                organizational diagnostics & transformation, market study and
                industry analysis. She has been involved in multiple corporate
                strategy execution projects, feasibility studies, business plan
                development, and organization transformation projects with
                notable track record in strategy articulation, project
                management, financial analysis, financial modeling and
                relationship management. She is an astute finance professional
                and an aggressive, yet ethical, fund manager, who is committed
                to the financial empowerment of her clients.
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
