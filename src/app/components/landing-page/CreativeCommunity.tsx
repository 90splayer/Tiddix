import { Box, Flex, Heading } from '@chakra-ui/react';
import creativeBox from '../../assets/images/home/growing-creativeBg.png';
import React from 'react';

const CreativeCommunity = () => {
  return (
    <Box p="8.3rem 0 7.5rem">
      <Flex flexDir="column" align="center">
        <Heading
          as="h2"
          maxW="49.8rem"
          fontSize="4.8rem"
          textAlign="center"
          mb="10rem"
          lineHeight="54.62px"
          fontWeight="700"
          color="#fff"
        >
          Our growing creative community
        </Heading>

        <Box bgImg={creativeBox} w="full" h="279px"></Box>
      </Flex>
    </Box>
  );
};

export default CreativeCommunity;
