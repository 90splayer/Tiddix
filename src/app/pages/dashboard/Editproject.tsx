import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from 'app/layout/Header';
import { Footer } from 'app/layout/Footer';
import General from 'app/components/dashboard/edit profile/General';
import EditProfile from 'app/components/dashboard/edit profile/EditProfile';
import ProfilePassword from 'app/components/dashboard/edit profile/ProfilePassword';
import SocialMedia from 'app/components/dashboard/edit profile/SocialMedia';

const ProfileEdit = () => {
  return (
    <Box>
      <Header />
      {/* <General /> */}
      {/* <EditProfile /> */}
      {/* <ProfilePassword /> */}
      <SocialMedia />
      <Footer />
    </Box>
  );
};

export default ProfileEdit;
