import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import SideBar from './SideBar';
import UserInvestment from './UserInvestment';

const InvestmentOverview = () => {
  return (
    <Box>
      <Flex>
        <SideBar />
        <UserInvestment />
      </Flex>
    </Box>
  );
};

export default InvestmentOverview;
