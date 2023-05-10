import { Flex, Box, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

const TrendingTable: FC = () => {
  return (
    <Box maxW="58rem">
      <Flex justify="space-between">
        <Text size="body2">Project</Text>
        <Flex gap="8.5rem">
          <Text size="body2">Target</Text>
          <Text size="body2">Progress </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TrendingTable;
