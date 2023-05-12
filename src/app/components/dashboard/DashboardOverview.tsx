import { Box, Grid, GridItem } from '@chakra-ui/react';
import React, { FC } from 'react';
import OverviewCard from './OverviewCard';
import {
  InvestmentGradientIcon,
  LiabilityIcon,
  PaletteGradientIcon,
} from 'app/assets/icons';
import { UserData } from 'app/components/data/dashboard/UserData';
import NoTransaction from './NoTransaction';

const DashboardOverview: FC = () => {
  return (
    <Box>
      {UserData.map((item) => (
        <Grid
          key={item.id}
          templateColumns="repeat(3, 1fr)"
          gap="2.6rem"
          pt="3.6rem"
          pb="2.5rem"
        >
          <GridItem w="100%">
            <OverviewCard
              icon={PaletteGradientIcon}
              count={item.project_count}
              fundDetail={item.fund_detail[0]}
            />
          </GridItem>
          <GridItem w="100%">
            <OverviewCard
              icon={InvestmentGradientIcon}
              count={item.investment_count}
              price={item.total_investment}
              fundDetail={item.fund_detail[1]}
            />
          </GridItem>
          <GridItem w="100%">
            <OverviewCard
              icon={LiabilityIcon}
              count={item.liability_count}
              price={item.total_liabilities}
              fundDetail={item.fund_detail[2]}
            />
          </GridItem>
        </Grid>
      ))}

      <NoTransaction />
    </Box>
  );
};

export default DashboardOverview;
