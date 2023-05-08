import { Box, Button, Flex, Heading, Stack, Container } from '@chakra-ui/react';
import React, { FC } from 'react';
import CategoryCard from '../CategoryCard';

const Category: FC = () => {
  return (
    <Box>
      <Container maxW="144rem" p="6.4rem 7.4rem 8rem 7.2rem">
        <Stack spacing="3.4rem">
          <Heading size="display3">Browse by Category</Heading>
          <Flex gap="2rem">
            <Button size="md">All</Button>
            <Button size="md">Photograhy</Button>
            <Button size="md">3d Modeling</Button>
            <Button size="md">Travel</Button>
            <Button size="md">Music</Button>
          </Flex>
          <Flex justify="space-between" gap="2rem">
            <CategoryCard />
            <CategoryCard />
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default Category;
