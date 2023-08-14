import { Box, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import SideBar from './SideBar';
import UserInvestment from './UserInvestment';
import { SideTabsLayout } from 'app/components/common/SideTabsLayout';

const InvestmentOverview = () => {
  return (
    <Box>
      <Box>
        <SideTabsLayout
          components={[
            {
              title: 'All Projects',
              component: <UserInvestment />,
            },
            { title: 'Equity Projects', component: <UserInvestment /> },
            { title: 'Debt Projects', component: <UserInvestment /> },
            // { title: 'Draft', component: <BecomeInvestor /> },
          ]}
          useLayout2
          sideBarExtraContent={<Button variant="default">Extra Content</Button>}
        />
      </Box>
    </Box>
  );
};

export default InvestmentOverview;
