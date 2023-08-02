import { Box } from '@chakra-ui/react';
import Intro from 'app/components/creatives/Intro';
import React from 'react';
import { Footer } from 'app/layout/Footer';
import Header from 'app/layout/Header';
import EasySteps from 'app/components/creatives/EasySteps';

const Creatives = () => {
  return (
    <Box>
      <Header />
      <Intro />
      <EasySteps />
      <Footer />
    </Box>
  );
};

export default Creatives;
