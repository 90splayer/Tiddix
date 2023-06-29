import { Box } from '@chakra-ui/react';
import WalletView from 'app/components/dashboard/WalletView';
import { Footer } from 'app/layout/Footer';
import Header from 'app/layout/Header';
import React from 'react';

const Wallet = () => {
  return (
    <Box>
      <Header />
      <WalletView />
      <Footer />
    </Box>
  );
};

export default Wallet;
