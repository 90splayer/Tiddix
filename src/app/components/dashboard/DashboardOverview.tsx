import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import OverviewCard from './OverviewCard';
import {
  InvestmentGradientIcon,
  LiabilityIcon,
  PaletteGradientIcon,
} from 'app/assets/icons';
import NoTransaction from './NoTransaction';

type Props = {
  firstName: string;
  avartar: string;
  bal: string;
};
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
          <OverviewCard icon={PaletteGradientIcon} count={''} price={''} />
        </GridItem>
        <GridItem w="100%">
          <OverviewCard icon={InvestmentGradientIcon} count={''} price={''} />
        </GridItem>
        <GridItem w="100%">
          <OverviewCard icon={LiabilityIcon} count={''} price={''} />
        </GridItem>
      </Grid>
      <NoTransaction />
    </Box>
  );
};

export default DashboardOverview;
