import { Flex, Heading, Icon, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { IoWallet } from 'react-icons/io5';

const OverviewCard: FC = () => {
  return (
    <Flex
      bg="#232629"
      flexDir="column"
      justify="space-between"
      maxW="411px"
      h="239px"
      p="25px 30px 40px"
      borderRadius="30px"
    >
      <Flex justify="space-between" align="center">
        <Flex
          bg="#000"
          align="center"
          justify="center"
          borderRadius="100%"
          w="70px"
          h="70px"
        >
          <Icon
            as={IoWallet}
            fontSize="3.4rem"
            color="#FF8CDF"
            // bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
            // bgGradient="linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%) 1"
          />
        </Flex>
        <Heading size="display2">07</Heading>
      </Flex>
      <Flex justify="space-between" align="center">
        <Text color="#fff">Total Projects</Text>
        <Text color="#fff" fontWeight="700">
          $ 150,000
        </Text>
      </Flex>
    </Flex>
  );
};

export default OverviewCard;
