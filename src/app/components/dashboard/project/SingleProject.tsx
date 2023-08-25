import { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  Image,
  HStack,
  Progress,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import projectImg from '../../../assets/images/investor/project.jpg';
import SingleProjHeader from './SingleProjHeader';
import { useParams } from 'react-router-dom';
import { chkToaster } from 'app/components/common/Toaster';
import { love } from 'app/assets/svgs/dashboard/dashboard';
import { debt } from 'app/assets/svgs/dashboard/dashboard';
import { view } from 'app/assets/svgs/dashboard/dashboard';
import CustomTab from 'app/components/common/CustomTab';
import TrendingProject from 'app/components/landing-page/TrendingProject';
import CreativePovEquityProjectInfo from './CreativePovEquityProjectInfo';
import CreativePovDebtProjectInfo from './CreativePovDebtProjectInfo';
import InvestorPovDebtProjectInfo from './InvestorPovDebtProjectInfo';
import InvestorPovEquityProjectInfo from './InvestorPovEquityProjectInfo';
import tiddixIcon from 'app/assets/icons/png/tiddix.png';
import { verify } from 'app/assets/svgs/home';
import useApiPrivate from 'app/hooks/useApiPrivate';

export type projectT = {
  amount: number;
  category: string;
  coverArt: string;
  creativeName: string;
  creativePicture: string;
  creativeVerified: boolean;
  description: string;
  favourites: 0;
  id: string;
  interest: 20;
  investmentType: string;
  isOwner: boolean;
  period: string;
  pitchDeck: string;
  pitchVideo: string;
  portfolioLinks: string;
  projectName: string;
  views: number;
  equityBought: number;
  progress: number;
  projectDuration: string;
  moratoriumPeriod: string;
  investors: any;
  loanGiven: number;
  repaymentFrequency: string;
  tiddixScore: number;
  creativeId: string;
  dateCreated: string;
};

const SingleProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState<projectT | undefined>();
  const [reload, setReload] = useState(false);
  const apiPrivate = useApiPrivate();

  useEffect(() => {
    apiPrivate
      .get(`/projects/${id}`)
      .then(({ data }) => {
        console.log('PROJECT DATA', data.project);
        setProject(data.project);
      })
      .catch(() => {
        chkToaster.error({ title: 'Something went wrong' });
      });
    console.log('ID', id);
  }, [reload]);

  if (!project) {
    return <h1>Loading...</h1>;
  }

  const {
    amount,
    category,
    coverArt,
    creativeName,
    creativePicture,
    creativeVerified,
    description,
    favourites,
    id: projectId,
    interest,
    investmentType,
    isOwner,
    moratoriumPeriod,
    period,
    pitchDeck,
    pitchVideo,
    portfolioLinks,
    projectDuration,
    projectName,
    views,
    equityBought,
    progress,
    investors,
    loanGiven,
    repaymentFrequency,
    tiddixScore,
    creativeId,
    dateCreated,
  } = project;

  return (
    <Box>
      <Container
        maxW="144rem"
        zIndex={3}
        p={{
          base: '3.5rem 2rem',
          sm: '4rem 5rem',
          md: '7rem 5.2rem',
          lg: '7rem 7.2rem',
        }}
      >
        <SingleProjHeader
          projectName={projectName}
          category={category}
          creativeName={creativeName}
          creativePicture={creativePicture}
          id={id}
          creativeId={creativeId}
          dateCreated={dateCreated}
        />

        <Flex mb="10rem" justify="center">
          <Flex
            gap="33px"
            flexDir={{ base: 'column', md: 'row' }}
            w="100%"
            justify="space-between"
            align={{ base: 'center', md: 'flex-start' }}
          >
            <Box position={{ base: 'unset', md: 'sticky' }} top="4rem">
              <Image
                h={{ base: 'auto', md: '61rem' }}
                objectFit="cover"
                borderRadius="20px"
                src={coverArt}
                alt={projectName}
              />
            </Box>

            {/* debt */}
            <Box w={{ base: '100%', sm: '55rem' }}>
              <Flex
                bg="#232629"
                borderRadius="20px"
                maxW="55rem"
                p="2rem"
                gap="3rem"
                mb="2.4rem"
              >
                <Stack spacing="1.2rem" flex="1">
                  <Text size="body2">Views</Text>
                  <Flex gap="1rem">
                    <Box>{view}</Box>
                    <Text size="body2" color="#fff">
                      {views}
                    </Text>
                  </Flex>
                </Stack>
                <Stack
                  spacing="1.2rem"
                  flex="1"
                  display={{ base: 'none', sm: 'unset' }}
                >
                  <Text size="body2">Favorites</Text>
                  <Flex gap="1rem">
                    <Box>{love}</Box>
                    <Text size="body2" color="#fff">
                      {favourites}
                    </Text>
                  </Flex>
                </Stack>
                <Stack spacing="1.2rem" flex="1">
                  <Text size="body2">Type</Text>
                  <Flex gap="1rem">
                    <Box>{debt}</Box>
                    <Text size="body2" color="#fff">
                      {investmentType}
                    </Text>
                  </Flex>
                </Stack>
                <Stack spacing="1.2rem" flex="1">
                  <Text size="body2" whiteSpace="nowrap">
                    Tiddix Score
                  </Text>
                  <Flex gap="1rem">
                    <Box>{verify}</Box>
                    <Text size="body2" color="#fff">
                      {tiddixScore}/100
                    </Text>
                  </Flex>
                </Stack>
              </Flex>

              {investmentType === 'Debt' && (
                <InvestorPovDebtProjectInfo
                  id={projectId}
                  amount={amount}
                  interest={interest}
                  investors={investors}
                  progress={progress}
                  loanGiven={loanGiven}
                  moratoriumPeriod={moratoriumPeriod}
                  projectDuration={projectDuration}
                  repaymentFrequency={repaymentFrequency}
                  reload={reload}
                  setReload={setReload}
                  isOwner={isOwner}
                />
              )}
              {investmentType === 'Equity' && (
                <InvestorPovEquityProjectInfo
                  id={projectId}
                  amount={amount}
                  equityBought={equityBought}
                  progress={progress}
                  moratoriumPeriod={moratoriumPeriod}
                  projectDuration={projectDuration}
                  investors={investors}
                  reload={reload}
                  setReload={setReload}
                  isOwner={isOwner}
                />
              )}
            </Box>
          </Flex>
        </Flex>
        <CustomTab
          // largerHeading
          tabs={[
            {
              label: 'Description',
              body: <>{description}</>,
            },

            {
              label: 'About',
              body: ' adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            // {
            //   label: 'Portfolio',
            //   body: ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            // },
          ]}
        />
        <>
          <Heading
            as="h2"
            fontSize="4.8rem"
            mt="12rem"
            // textAlign="center"
            pb="4rem"
            lineHeight="54.62px"
            fontWeight="700"
            color="#fff"
          >
            Trending in Photography
          </Heading>
          <TrendingProject />
        </>
      </Container>
    </Box>
  );
};

export default SingleProject;
