import {
  Flex,
  Box,
  HStack,
  Text,
  Heading,
  Stack,
  Button,
} from '@chakra-ui/react';
import { filter, leftUpload } from 'app/assets/svgs/dashboard/dashboard';
import { GoChevronDown } from 'react-icons/go';
import React from 'react';

const SideBar = () => {
  return (
    <Stack pr="4rem" pt="3.6rem">
      <Flex justify="space-between" w="25.2rem" py="2rem">
        <HStack spacing="1rem">
          <Box>{filter}</Box>
          <Heading fontSize="1.6rem"> Filter</Heading>
        </HStack>
        <Box>{leftUpload}</Box>
      </Flex>
      <Box py="2rem">
        <Text color="#fff" size="body2">
          All Projects
        </Text>
      </Box>
      <Box py="2rem">
        <Text color="#fff" size="body2">
          Equity Projects
        </Text>
      </Box>
      <Box py="2rem">
        <Text color="#fff" size="body2">
          Debt Projects
        </Text>
      </Box>

      {/* <Box>
        <Button
          borderRadius="100px"
          bg="#232629"
          border="1px solid #485155"
          maxW="17.5rem"
          color="#fff"
          rightIcon={<GoChevronDown />}
          size="md"
        >
          Recent Project
        </Button>
      </Box> */}
    </Stack>
  );
};

export default SideBar;
