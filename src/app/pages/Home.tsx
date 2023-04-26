import React, { FC } from 'react';
import { MoneyBagIcon } from 'app/assets/icons';
import { Box } from '@chakra-ui/react';
import Intro from 'app/components/landing-page/Intro';
import CreativeCommunity from 'app/components/landing-page/CreativeCommunity';
import HowItWork from 'app/components/landing-page/HowItWork';
import SignUpBanner from 'app/components/SignUpBanner';
import TrendingProject from 'app/components/landing-page/TrendingProject';
import BecomeInvestor from 'app/components/landing-page/BecomeInvestor';

const Home: FC = () => {
  return (
    <Box bg="#15181D">
      <Intro />
      <CreativeCommunity />
      <HowItWork />
      <TrendingProject />
      <BecomeInvestor />
      <SignUpBanner />
    </Box>
  );
};

export default Home;
