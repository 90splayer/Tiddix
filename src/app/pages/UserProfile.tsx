import { Box } from '@chakra-ui/react';
import { Footer } from 'app/layout/Footer';
import React, { FC } from 'react';
import Header from 'app/layout/Header';
import UserProfile from 'app/components/UserProfile';

const Dashboard: FC = () => {
  return (
    <Box>
      <Header />
      <UserProfile />
      <Footer />
    </Box>
  );
};

export default Dashboard;
