import { Box } from '@chakra-ui/react';
import Overview from 'app/components/dashboard/Overview';
import TopNav from 'app/components/dashboard/TopNav';
import React from 'react';

const Dashboard = () => {
  return (
    <Box>
      <TopNav />
      <Overview />
    </Box>
  );
};

export default Dashboard;
