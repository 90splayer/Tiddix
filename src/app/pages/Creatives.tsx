import { Box } from '@chakra-ui/react';
import Intro from 'app/components/creatives/Intro';
import React from 'react';
import { Footer } from 'app/layout/Footer';
import Header from 'app/layout/Header';
import EasySteps from 'app/components/creatives/EasySteps';
import SignUpBanner from 'app/components/SignUpBanner';

const Creatives = () => {
  return (
    <Box>
      <Header />
      <Intro />
      <EasySteps />
      <SignUpBanner />
      <Footer />
    </Box>
  );
};

export default Creatives;
