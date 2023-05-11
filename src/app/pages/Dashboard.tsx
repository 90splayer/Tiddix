import { Box } from '@chakra-ui/react';
import Overview from 'app/components/dashboard/Overview';
import TopNav from 'app/components/dashboard/TopNav';
import { Footer } from 'app/layout/Footer';
import React from 'react';

const Dashboard = () => {
  return (
    <Box>
      <TopNav />
      <Overview />
      <Footer />
    </Box>
  );
};

export default Dashboard;
