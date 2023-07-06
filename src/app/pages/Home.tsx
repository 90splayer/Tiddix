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

const Home: FC = () => {
  const auth = useAuth();

  return (
    <Box>
      <Header />
      <Intro />
      <CreativeCommunity />
      <HowItWork />
      <Container maxW="144rem" p="3.5rem 3.5rem">
        <Heading
          as="h2"
          fontSize="4.8rem"
          textAlign="center"
          pb="2rem"
          lineHeight="54.62px"
          fontWeight="700"
          color="#fff"
        >
          Trending Projects
        </Heading>
        <Text fontSize="2rem" textAlign="center" color="#99A1AA" pb="11rem">
          Check out our weekly updated trending projects
        </Text>
        <TrendingProject />
        <Flex align="center" justify="center" mt="19rem">
          <Link href="/explore">
            <Button
              border="1px solid #fff"
              borderRadius="10rem"
              w="22rem"
              h="59px"
              fontSize="1.6rem"
              transition="0.5s ease"
              boxShadow="0px 4px 50px rgba(0, 0, 0, 0.15)"
              _hover={{
                opacity: 0.8,
                transform: 'scale(1.02)',
              }}
              bg="transparent"
              color="#fff"
            >
              Explore More Projects
            </Button>
          </Link>
        </Flex>
      </Container>
      <BecomeInvestor />
      <SignUpBanner />
      <Footer />
    </Box>
  );
};

export default Home;
