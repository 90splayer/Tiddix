import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import React, { useState } from 'react';

const TestimonialView = () => {
  //   const { rating, setRating } = useState(null);
  return (
    <Box pt="4.8rem" px="3.5rem" w="full">
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
            <HStack spacing="10px">
              <Text fontSize="1.3rem" color="#fff">
                4.5 ratings
              </Text>
              <HStack>
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <label>
                      <Input
                        type="radio"
                        name="rating"
                        size="sm"
                        display="none"
                        value={ratingValue}
                        // onClick={() => setRating(ratingValue)}
                      />
                      <Box _hover={{ cursor: 'pointer', color: '#F9DF4A' }}>
                        <FaStar
                          //   color={
                          //     ratingValue >= rating ? '#F9DF4A' : 'brand.main'
                          //   }
                          size={12}
                        />
                      </Box>
                    </label>
                  );
                })}
              </HStack>
            </HStack>
          </Stack>
        </Flex>
        <Text size="body2" maxW="73.5rem">
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
