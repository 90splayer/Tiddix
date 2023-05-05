import { Box, Button, Flex, Heading, Stack, Container } from '@chakra-ui/react';
import React from 'react';
import CategoryCard from '../CategoryCard';

const Category = () => {
  return (
    <Box>
      <Container maxW="144rem" p="6.4rem 7.4rem 8rem 7.2rem">
        <Stack spacing="3.4rem">
          <Heading fontSize="4rem" fontWeight="700">
            Browse by Category
          </Heading>
          <Flex gap="2rem">
            <Button variant="primary">All</Button>
            <Button variant="primary">Photograhy</Button>
            <Button variant="primary">3d Modeling</Button>
            <Button variant="primary">Travel</Button>
            <Button variant="primary">Music</Button>
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
