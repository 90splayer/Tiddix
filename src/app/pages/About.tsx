import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';
import Header from 'app/layout/Header';
import { Footer } from 'app/layout/Footer';
import Intro from 'app/components/about-page/Intro';
import Audiences from 'app/components/about-page/Audiences';
import VisionMission from 'app/components/about-page/VisionMission';
import SignUpBanner from 'app/components/SignUpBanner';

const About: FC = () => {
  return (
    <Box>
      <Header />
      <Intro />
      <Audiences />
      <VisionMission />
      <SignUpBanner />
      <Footer />
    </Box>
  );
};

export default About;
