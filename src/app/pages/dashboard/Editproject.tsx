import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from 'app/layout/Header';
import { Footer } from 'app/layout/Footer';
import General from 'app/components/dashboard/edit profile/General';

const ProfileEdit = () => {
  return (
    <Box>
      <Header />
      <General />
      <Footer />
    </Box>
  );
};

export default ProfileEdit;
