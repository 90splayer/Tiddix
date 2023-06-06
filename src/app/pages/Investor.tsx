import { Box } from '@chakra-ui/react';
import HeroBanner from 'app/components/investors/HeroBanner';
import HowItWork from 'app/components/landing-page/HowItWork';
import { Footer } from 'app/layout/Footer';
import Header from 'app/layout/Header';
import React from 'react';

const Investor = () => {
  return (
    <Box>
      <Header />
      <HeroBanner />
      <Box mt="20rem">
        <HowItWork />
      </Box>
      <Footer />
    </Box>
  );
};

export default Investor;
