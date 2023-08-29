import { Box } from '@chakra-ui/react';
import SignUpBanner from 'app/components/SignUpBanner';
import HeroBanner from 'app/components/investors/HeroBanner';
// import MonitorInvestment from 'app/components/investors/MonitorInvestment';
import { Footer } from 'app/layout/Footer';
import Header from 'app/layout/Header';
import React from 'react';
import Offers from 'app/components/investors/Offers';
import HowItWork from 'app/components/investors/HowItWork';
import Angels from 'app/components/investors/Angels';
import Shakes from 'app/components/investors/Sharks';

const Investor = () => {
  return (
    <Box>
      <Header />
      <HeroBanner />
      <Offers />
      <HowItWork />
      <Shakes />
      <Angels />
      <SignUpBanner />
      <Footer />
    </Box>
  );
};

export default Investor;
