import React, { FC } from 'react';
import { Stack, Text, Heading, Image, Flex, Box } from '@chakra-ui/react';

type Props = {
  icon: string;
  desc: string;
  count: string;
};

const EasyStepCard: FC<Props> = ({ icon, count, desc }) => {
  return (
    <Stack
      color="#fff"
      bg="#232629"
      maxW="40.4rem"
      w="100%"
      h="45.8rem"
      p="2.3rem 3.9rem 5.9rem"
      borderRadius="30px"
      transition="0.3s ease"
      _hover={{
        boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.15)',
        // boxShadow: '0px 92px 40px -59px rgba(108, 76, 223, 0.15)',
        transform: 'scale(1.03)',
      }}
    >
      <Box mb="2rem">
        <Heading size="display1" color="#485155">
          {count}
        </Heading>
      </Box>
      <Flex flexDir="column" align="center" justify="center">
        <Box pb="40px">
          <Image src={icon} alt="journey-step-img" />
        </Box>
        <Text
          fontSize="2.4rem"
          lineHeight="3rem"
          fontWeight="700"
          textAlign="center"
          maxW="26.4rem"
          color="#fff"
        >
          {desc}
        </Text>
      </Flex>
    </Stack>
  );
};

export default EasyStepCard;
