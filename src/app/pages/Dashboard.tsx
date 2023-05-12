import { Box } from '@chakra-ui/react';
import Overview from 'app/components/dashboard/Overview';
import TopNav from 'app/components/dashboard/TopNav';
import { UserData } from 'app/components/data/dashboard/UserData';
import { Footer } from 'app/layout/Footer';
import React from 'react';

const Dashboard = () => {
  return (
    <>
      {UserData.map((item) => (
        <Box key={item.id}>
          <TopNav
            avartar={item.avartar}
            firstName={item.first_name}
            bal={item.wallet_bal}
            likes={item.likes}
          />
          <Overview />
          <Footer />
        </Box>
      ))}
    </>
  );
};

export default Dashboard;
