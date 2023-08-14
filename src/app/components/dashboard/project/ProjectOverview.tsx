import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import SideBar from './SideBar';
import UserProjects from './UserProjects';
import { SideTabsLayout } from 'app/components/common/SideTabsLayout';
import { Button } from '@chakra-ui/react';

const ProjectOverview = () => {
  return (
    <Box>
      <SideTabsLayout
        components={[
          {
            title: 'All Projects',
            component: <UserProjects />,
          },
          { title: 'Equity Projects', component: <UserProjects /> },
          { title: 'Debt Projects', component: <UserProjects /> },
          // { title: 'Draft', component: <BecomeInvestor /> },
        ]}
        useLayout2
        sideBarExtraContent={<Button variant="default">Extra Content</Button>}
      />
    </Box>
  );
};

export default ProjectOverview;
