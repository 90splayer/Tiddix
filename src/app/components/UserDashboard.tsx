import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import {
  InvestmentGradientIcon,
  LiabilityIcon,
  PaletteGradientIcon,
} from 'app/assets/icons';
import { UserData } from 'app/components/data/dashboard/UserData';
import { Link } from 'react-router-dom';
import FundingChart from './dashboard/FundingChart';
import OverviewCard from './dashboard/OverviewCard';

const UserDashboard: FC = () => {
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
          <GridItem w="100%">
            <Flex
              bg="#232629"
              flexDir="column"
              justify="space-between"
              maxW="411px"
              h="239px"
              p="25px 30px 40px"
              borderRadius="30px"
            >
              <Stack spacing="8px">
                <Text color="#fff">Total funding</Text>
                <Heading size="display4">{item.total_funding}</Heading>
              </Stack>
              <Link to={''}>
                <Text textDecor="underline" size="body2">
                  view projects
                </Text>
              </Link>
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <FundingChart />
          </GridItem>
          <GridItem w="100%">
            <Flex
              bg="#232629"
              flexDir="column"
              justify="space-between"
              maxW="411px"
              h="239px"
              p="25px 30px 40px"
              borderRadius="30px"
            >
              <Stack spacing="8px">
                <Text color="#fff">Total funding</Text>
                <Heading size="display4">{item.total_funding}</Heading>
              </Stack>
              <Link to={''}>
                <Text textDecor="underline" size="body2">
                  view projects
                </Text>
              </Link>
            </Flex>
          </GridItem>
        </Grid>
      ))}
    </Box>
  );
};

export default UserDashboard;
