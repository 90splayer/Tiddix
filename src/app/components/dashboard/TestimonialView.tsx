import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const TestimonialView = () => {
  return (
    <Box pt="4.8rem" px="7.2rem" w="full">
      <Heading fontSize="2rem" mb="2.2rem">
        Ratings & review
      </Heading>
      <Stack
        pt="2.5rem"
        spacing="1.6rem"
        pb="2.5rem"
        borderBottom="1px solid #485155"
      >
        <Flex gap="2rem">
          <Box boxSize="40px">
            <Image
              borderRadius="10px"
              src="https://bit.ly/dan-abramov"
              alt="dan-abramov"
            />
          </Box>
          <Stack>
            <Text fontSize="1.5rem" color="#fff">
              John Doe
            </Text>
            <HStack spacing="5px">
              <Text fontSize="1.3rem" color="#fff">
                4.5 ratings
              </Text>
            </HStack>
          </Stack>
        </Flex>
        <Text size="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          risus nullam eget felis eget nunc lobortis mattis. Magna eget est
          lorem ipsum dolor sit amet consectetur. Leo urna molestie at elementum
          eu facilisis sed odio morbi.
        </Text>
      </Stack>
    </Box>
  );
};

export default TestimonialView;
