import { Box } from '@chakra-ui/react';
import Category from 'app/components/explore/Category';
import TopTrending from 'app/components/explore/TopTrending';
import { Footer } from 'app/layout/Footer';
import Header from 'app/layout/Header';

import React, { FC } from 'react';

const Explore: FC = () => {
  return (
    <Box>
      <Header />
      <Category />
      <TopTrending />
      <Footer />
    </Box>
  );
};

export default Explore;
