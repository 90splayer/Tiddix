import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  Progress,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { IoCloudUploadSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const CreateProject: FC = () => {
  return (
    <Box borderTop="1px solid grey" mt="2rem">
      <Container
        maxW="144rem"
        p={{
          base: '3.5rem 2rem',
          sm: '3rem 5rem',
          md: '3rem 5.2rem 5rem',
          lg: '3rem 7.2rem 5rem',
        }}
      >
        <Flex align="center" justify="space-between" pb="6rem">
          <Flex gap="50px" align="center">
            <Link to="/dashboard">
              <Button variant="borderless">Back</Button>
            </Link>
            <Text color="white" size="body1">
              Create a Project
            </Text>
          </Flex>
          <Button variant="borderless">Save for later</Button>
        </Flex>
        <Flex justify="space-between" gap={6}>
          <Flex flexDir="column" w="70%">
            <Heading as="h2" mb="2.3rem ">
              Project Description
            </Heading>
            <Text size="body1" mb="5.4rem">
              Here you would upload a few details on the project as requested
              below.
            </Text>
            <Stack w="100%" spacing="30px" mb="43px">
              <Input type="text" size="lg" placeholder="Project Name" />
              <Input
                type="text"
                size="lg"
                minH="96px"
                placeholder="Project Description"
              />
            </Stack>
            <Stack spacing="22px">
              <Text color="white" size="body2">
                Upload Pitch Video
              </Text>
              <VStack
                borderRadius="20px"
                padding="4rem 2rem"
                w="100%"
                spacing="18.5px"
                border="1px dashed #99A1AA"
              >
                <Text maxW="265px" textAlign="center" size="body2">
                  Video is expected to not exceeded 5mb and a max of 2 minutes.
                </Text>
                <IconButton
                  aria-label="Download video"
                  fontSize="3.6rem"
                  variant="unstyled"
                  border="0px"
                  icon={<IoCloudUploadSharp />}
                />
                <Text size="body2">Upload, Drag and Drop MP4 file</Text>
              </VStack>
            </Stack>
          </Flex>
          <Flex flexDir="column" w="25%">
            <Flex align="center" justify="space-between" mb="2rem">
              <Text size="body2" color="white">
                Progress Status
              </Text>
              <Text size="body2" fontWeight="700">
                100%
              </Text>
            </Flex>
            <Box mb="3rem">
              <Progress
                value={80}
                size="md"
                colorScheme="transparent"
                borderRadius="20px"
                background="linear-gradient(transparent, transparent) padding-box, linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%) border-box"
              />
            </Box>
            <Stack
              mb="5.4rem"
              borderRadius="20px"
              spacing="4rem"
              w="100%"
              p="2rem"
              bg="#232629"
              border="1px solid #485155"
            >
              <Checkbox variant="circular">
                <Text
                  size="body2"
                  bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
                  bgClip="text"
                >
                  Project Description
                </Text>
              </Checkbox>
              <Checkbox variant="circular">
                <Text size="body2">Portfolio Upload</Text>
              </Checkbox>
              <Checkbox variant="circular">
                <Text size="body2">Connect social Media</Text>
              </Checkbox>
              <Checkbox variant="circular">
                <Text size="body2">Project Type</Text>
              </Checkbox>
              <Checkbox variant="circular">
                <Text size="body2">Finish</Text>
              </Checkbox>
            </Stack>
            <Box>
              <Button variant="multicolor" size="md" w="100%">
                Next
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default CreateProject;
