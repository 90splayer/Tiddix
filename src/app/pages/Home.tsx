import React, { FC, useEffect } from 'react';
import { MoneyBagIcon } from 'app/assets/icons';
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Link,
  Button,
} from '@chakra-ui/react';
import Intro from 'app/components/landing-page/Intro';
import CreativeCommunity from 'app/components/landing-page/CreativeCommunity';
import HowItWork from 'app/components/landing-page/HowItWork';
import SignUpBanner from 'app/components/SignUpBanner';
import TrendingProject from 'app/components/landing-page/TrendingProject';
import BecomeInvestor from 'app/components/landing-page/BecomeInvestor';
import Header from 'app/layout/Header';
import { Footer } from 'app/layout/Footer';
import useAuth from 'app/hooks/useAuth';
import { isAuthenticated } from 'app/utils/helpers';
import Impact from 'app/components/landing-page/Impact';

const Home: FC = () => {
  const auth = useAuth();

  return (
    <Box>
      <Header />
      <Intro />
      <CreativeCommunity />
      <HowItWork />
      <TrendingProject />
      <BecomeInvestor />
      <Impact />
      <SignUpBanner />
      <Footer />
    </Box>
  );
};

export default Home;
