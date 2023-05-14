import { Box } from '@chakra-ui/react';
import Overview from 'app/components/dashboard/Overview';
import { UserData } from 'app/components/data/dashboard/UserData';
import { Footer } from 'app/layout/Footer';
import React from 'react';
import Header from 'app/layout/Header';

const Dashboard = () => {
  return (
    <>
      <Box>
        <Header />
        <Overview />
        <Footer />
      </Box>
    </>
  );
};

export default Dashboard;
