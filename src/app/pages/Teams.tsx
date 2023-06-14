import { Box } from '@chakra-ui/react'
import Intro from 'app/components/about-page/teams/Intro';
import { Footer } from 'app/layout/Footer'
import Header from 'app/layout/Header'
import React, { FC } from 'react'

export const Teams: FC = () => {
  return (
    <Box>
        <Header />
        <Intro />
        <Footer />
    </Box>
  );
};

export default Teams;
