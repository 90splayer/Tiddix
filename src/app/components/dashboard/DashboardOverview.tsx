import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import OverviewCard from './OverviewCard';
import NoTransaction from './NoTransaction';

const DashboardOverview = () => {
  return (
    <Box>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap="2.6rem"
        pt="3.6rem"
        pb="2.5rem"
      >
        <GridItem w="100%">
          <OverviewCard />
        </GridItem>
        <GridItem w="100%">
          <OverviewCard />
        </GridItem>
        <GridItem w="100%">
          <OverviewCard />
        </GridItem>
        <GridItem w="100%">
          <OverviewCard />
        </GridItem>
        <GridItem w="100%">
          <OverviewCard />
        </GridItem>
        <GridItem w="100%">
          <OverviewCard />
        </GridItem>
      </Grid>
      <NoTransaction />
    </Box>
  );
};

export default DashboardOverview;
