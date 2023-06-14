import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  Select,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import TrendingTable from './TrendingTable';

const TopTrending: FC = () => {
  return (
    <Box>
      <Container maxW="144rem" p="6.4rem 7.2rem 8rem ">
        <Flex justify="space-between" mb="7.4rem">
          <Stack spacing="1.4rem" maxW="44rem">
            <Heading size="display3">Top Trending Projects</Heading>
            <Text size="body2">
              Top projects currently raising funds on Tiddix ranked by the
              amount raised and project type.
            </Text>
          </Stack>
          <Flex gap="2.3rem">
            <Select
              placeholder="Last 24 Hours"
              h="4.9rem"
              color="#fff"
              fontWeight="700"
              fontSize="1.6rem"
              border="2px solid #99A1AA"
              borderRadius="10rem"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select
              placeholder="Last 7 Days"
              h="4.9rem"
              fontWeight="700"
              color="#fff"
              fontSize="1.6rem"
              border="2px solid #99A1AA"
              borderRadius="10rem"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select
              placeholder="All"
              h="4.9rem"
              fontWeight="700"
              color="#fff"
              fontSize="1.6rem"
              border="2px solid #99A1AA"
              borderRadius="10rem"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>
        </Flex>
        {/* <TrendingTable /> */}
      </Container>
    </Box>
  );
};

export default TopTrending;
