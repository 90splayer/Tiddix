import React, { FC } from 'react';
import { MoneyBagIcon } from 'app/assets/icons';
import { Box } from '@chakra-ui/react';
import Intro from 'app/components/landing-page/Intro';
import CreativeCommunity from 'app/components/landing-page/CreativeCommunity';
import HowItWork from 'app/components/landing-page/HowItWork';

const Home: FC = () => {
  return (
    <Box bg="#15181D">
      <Intro />
      <CreativeCommunity />
      <HowItWork />
    </Box>
  );
};

export default Home;
