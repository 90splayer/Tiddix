import { Box } from '@chakra-ui/react';
import AccessProj from 'app/components/investors/AccessProj';
import HeroBanner from 'app/components/investors/HeroBanner';
import MonitorInvestment from 'app/components/investors/MonitorInvestment';
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
      <AccessProj />
      <MonitorInvestment />
      <Footer />
    </Box>
  );
};

export default Investor;
