import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import SideBar from './SideBar';
import MainInvestment from './MainInvestment';

const InvestmentOverview = () => {
  return (
    <Box>
      <Flex>
        <SideBar />
        <MainInvestment />
      </Flex>
    </Box>
  );
};

export default InvestmentOverview;
