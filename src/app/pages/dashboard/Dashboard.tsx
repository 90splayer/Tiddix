import { Box } from '@chakra-ui/react';
import Overview from 'app/components/dashboard/Overview';
import { Footer } from 'app/layout/Footer';
import React, { FC } from 'react';
import Header from 'app/layout/Header';

const Dashboard: FC = () => {
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
