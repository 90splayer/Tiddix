import { Box, Flex, Text } from '@chakra-ui/react';
import { emptyBox } from 'app/assets/svgs/home';
import React, { FC } from 'react';

const NoTransaction: FC = () => {
  return (
    <Box bg="#232629" p="3.5rem 3rem 0" w="100%" h="611px" borderRadius="30px">
      <Text mb="10rem" color="#fff">
        Transaction
      </Text>
      <Flex align="center" justify="center" flexDir="column">
        <Box mb="25px">{emptyBox}</Box>
        <Text textAlign="center" color="#fff">
          You have no transactions yet, but no worries. <br />
          They are many like you but you have the power to change that.
        </Text>
      </Flex>
    </Box>
  );
};

export default NoTransaction;
