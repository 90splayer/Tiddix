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
import api from 'app/api/tiddix';
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

export type projectT = {
  amount: number;
  category: string;
  coverArt: string;
  creativeName: string;
  creativePicture: string;
  creativeVerified: boolean;
  description: string;
  favourites: 0;
  fundingDeadline: string;
  id: string;
  interest: 20;
  investmentType: string;
  is_owner: boolean;
  period: string;
  pitchDeck: string;
  pitchVideo: string;
  portfolioLinks: string;
  projectName: string;
  views: number;
  equityBought: number;
  progress: number;
};

const SingleProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState<projectT | undefined>();
  useEffect(() => {
    api
      .get(`/projects/${id}`)
      .then(({ data }) => {
        console.log('PROJECT DATA', data.project);
        setProject(data.project);
      })
      .catch(() => {
        chkToaster.error({ title: 'Something went wrong' });
      });
    console.log('ID', id);
  }, []);

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
    fundingDeadline,
    id: projectId,
    interest,
    investmentType,
    is_owner,
    period,
    pitchDeck,
    pitchVideo,
    portfolioLinks,
    projectName,
    views,
    equityBought,
    progress,
  } = project;

  return (
    <Box>
      <Container
        maxW="144rem"
        zIndex={3}
        p={{
          base: '3.5rem 2rem',
          sm: '4rem 5rem',
          md: '5rem 5.2rem',
          lg: '5rem 7.2rem',
        }}
      >
        <SingleProjHeader
          projectName={projectName}
          category={category}
          creativeName={creativeName}
          creativePicture={creativePicture}
        />

        <Flex mb="10rem" justify="center">
          {/* <Stack spacing="19px">
            <Box>
              <Image
                w="98px"
                h="110px"
                borderRadius="20px"
                objectFit="cover"
                src={projectImg}
                alt="project name"
              />
            </Box>
            <Box>
              <Image
                w="98px"
                h="110px"
                borderRadius="20px"
                objectFit="cover"
                src={projectImg}
                alt="project name"
              />
            </Box>
            <Box>
              <Image
                w="98px"
                h="110px"
                borderRadius="20px"
                objectFit="cover"
                src={projectImg}
                alt="project name"
              />
            </Box>
          </Stack> */}
          <Flex gap="33px" w="90%" justify="space-between">
            <Box>
              <Image
                maxW="58.4rem"
                h="61rem"
                objectFit="cover"
                borderRadius="20px"
                src={coverArt}
                alt="project name"
              />
            </Box>

            {/* debt */}
            <Box w="55rem">
              <Flex
                bg="#232629"
                borderRadius="20px"
                maxW="55rem"
                p="3rem"
                gap="3rem"
                mb="2.4rem"
              >
                <Stack spacing="1.2rem" flex="1">
                  <Text size="body2">Views</Text>
                  <Flex gap="1rem">
                    <Box>{view}</Box>
                    <Text size="body2" color="#fff">
                      {views} Views
                    </Text>
                  </Flex>
                </Stack>
                <Stack spacing="1.2rem" flex="1">
                  <Text size="body2">Favorites</Text>
                  <Flex gap="1rem">
                    <Box>{love}</Box>
                    <Text size="body2" color="#fff">
                      {favourites} favorites
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
              </Flex>

              {investmentType === 'Debt' && (
                <InvestorPovDebtProjectInfo
                  id={projectId}
                  amount={amount}
                  interest={interest}
                />
              )}
              {investmentType === 'Equity' && (
                <InvestorPovEquityProjectInfo
                  id={projectId}
                  amount={amount}
                  equityBought={equityBought}
                  progress={progress}
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
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },

            {
              label: 'About',
              body: ' adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
              label: 'Portfolio',
              body: ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
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
