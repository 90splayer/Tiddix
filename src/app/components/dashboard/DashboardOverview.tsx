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
import OverviewCard from './OverviewCard';
import {
  InvestmentGradientIcon,
  LiabilityIcon,
  PaletteGradientIcon,
} from 'app/assets/icons';
import { UserData } from 'app/components/data/dashboard/UserData';
import NoTransaction from './NoTransaction';
import { Link } from 'react-router-dom';
import FundingChart from './FundingChart';
import { useEffect, useState } from 'react';
import useApiPrivate from 'app/hooks/useApiPrivate';
import { thousandsSeparators } from 'app/utils/helpers';

type dashboardInfoT = {
  InvestmentGivenAmount: string;
  bio: string;
  canCheckCreditScore: boolean;
  firstName: string;
  id: string;
  investmentGivenCount: number;
  investmentReceivedAmount: string;
  investmentReceivedCount: number;
  lastName: string;
  profilePicture: string;
  projectCount: number;
  walletBalance: string;
};

const DashboardOverview: FC = () => {
  const apiPrivate = useApiPrivate();
  const [dashboardInfo, setDashboardInfo] = useState<dashboardInfoT>(
    {} as dashboardInfoT,
  );

  useEffect(() => {
    apiPrivate('/user/summary').then(({ data }) => {
      console.log('RESPONSE', data);
      setDashboardInfo(data);
    });
  }, []);

  const {
    projectCount,
    InvestmentGivenAmount,
    investmentReceivedAmount,
    investmentReceivedCount,
    investmentGivenCount,
  } = dashboardInfo;

  return (
    <Box>
      {/* {UserData.map((item) => ( */}
      <Grid
        // key={item.id}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        gap="2.6rem"
        pt="3.6rem"
        pb="2.5rem"
      >
        <GridItem w="100%">
          <OverviewCard
            icon={PaletteGradientIcon}
            count={String(thousandsSeparators(projectCount))}
            fundDetail="Total projects created"
          />
        </GridItem>
        <GridItem w="100%">
          <OverviewCard
            icon={InvestmentGradientIcon}
            count={thousandsSeparators(investmentGivenCount)}
            price={`£${thousandsSeparators(InvestmentGivenAmount)}`}
            fundDetail="Total funds invested"
          />
        </GridItem>
        <GridItem w="100%">
          <OverviewCard
            icon={LiabilityIcon}
            count={thousandsSeparators(investmentReceivedCount)}
            price={`£${thousandsSeparators(investmentReceivedAmount)}`}
            fundDetail="Total funds raised"
          />
        </GridItem>

        <GridItem w="100%">
          {/* <FundingChart /> */}
          {/* <Flex
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
            </Flex> */}
        </GridItem>
        {/* <GridItem w="100%">
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
              <Heading size="display4">'£200,000'</Heading>
            </Stack>
            <Link to={''}>
              <Text textDecor="underline" size="body2">
                view projects
              </Text>
            </Link>
          </Flex>
        </GridItem> */}
      </Grid>
      {/* ))} */}
    </Box>
  );
};

export default DashboardOverview;
