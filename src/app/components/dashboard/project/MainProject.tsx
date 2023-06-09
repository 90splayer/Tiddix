import React, { FC } from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import ProjectCard from 'app/components/ProjectCard';

const MainProject: FC = () => {
  return (
    <Box borderLeft="1px solid #485155" pl="4rem" pt="5rem" h="auto">
      <Grid templateColumns="repeat(3, 1fr)" gap="2rem">
        <GridItem w="100%">
          <ProjectCard />
        </GridItem>
        <GridItem w="100%">
          <ProjectCard />
        </GridItem>
        <GridItem w="100%">
          <ProjectCard />
        </GridItem>
        <GridItem w="100%">
          <ProjectCard />
        </GridItem>
        <GridItem w="100%">
          <ProjectCard />
        </GridItem>
        <GridItem w="100%">
          <ProjectCard />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default MainProject;
