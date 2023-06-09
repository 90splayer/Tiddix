import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import SideBar from './SideBar';
import MainProject from './MainProject';

const ProjectOverview = () => {
  return (
    <Box>
      <Flex>
        <SideBar />
        <MainProject />
      </Flex>
    </Box>
  );
};

export default ProjectOverview;
