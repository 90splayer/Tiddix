import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from 'app/layout/Header';
import { Footer } from 'app/layout/Footer';
import SingleProject from 'app/components/dashboard/project/SingleProject';

const SingleProjectPage = () => {
  return (
    <Box>
      <Header />
      <SingleProject />
      <Box mb="100"></Box>
      <Footer />
    </Box>
  );
};

export default SingleProjectPage;
