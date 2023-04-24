import React, { FC } from 'react';
import { MoneyBagIcon } from 'app/assets/icons';
import { Box } from '@chakra-ui/react';
import Intro from 'app/components/landing-page/Intro';
import CreativeCommunity from 'app/components/landing-page/CreativeCommunity';

const Home: FC = () => {
  return (
    <Box bg="#15181D">
      <Intro />
      <CreativeCommunity />
    </Box>
  );
};

export default Home;
