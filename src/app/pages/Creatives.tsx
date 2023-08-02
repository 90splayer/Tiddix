import { Box } from '@chakra-ui/react';
import Intro from 'app/components/creatives/Intro';
import React from 'react';
import { Footer } from 'app/layout/Footer';
import Header from 'app/layout/Header';

const Creatives = () => {
  return (
    <Box>
      <Header />
      <Intro />
      <Footer />
    </Box>
  );
};

export default Creatives;
