import { Box } from '@chakra-ui/react';
import SignUpBanner from 'app/components/SignUpBanner';
import HeroBanner from 'app/components/investors/HeroBanner';
import MonitorInvestment from 'app/components/investors/MonitorInvestment';
import { Footer } from 'app/layout/Footer';
import Header from 'app/layout/Header';
import React from 'react';
import Offers from 'app/components/investors/Offers';
import HowItWork from 'app/components/investors/HowItWork';

const Investor = () => {
  return (
    <Box>
      <Header />
      <HeroBanner />
      <Offers />
      <HowItWork />
      <MonitorInvestment />
      <SignUpBanner />
      <Footer />
    </Box>
  );
};

export default Investor;
