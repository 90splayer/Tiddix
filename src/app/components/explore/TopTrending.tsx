import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
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
            <Button size="md">Last 24 Hours</Button>
            <Button size="md">All</Button>
            <Button size="md">Pricing</Button>
          </Flex>
        </Flex>
        <TrendingTable />
      </Container>
    </Box>
  );
};

export default TopTrending;
