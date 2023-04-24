import React, { FC } from 'react';
import { MoneyBagIcon } from 'app/assets/icons';
import { Box } from '@chakra-ui/react';
import Intro from 'app/components/landing-page/Intro';

const Home: FC = () => {
  return (
    <Box bg="#15181D">
      <Intro />
    </Box>
  );
};

export default Home;
