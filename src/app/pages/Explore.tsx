import React, { FC, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Container,
  Select,
  Text,
} from '@chakra-ui/react';

import { Footer } from 'app/layout/Footer';
import Header from 'app/layout/Header';
import CategoryCard from 'app/components/CategoryCard';
import TrendingTable from 'app/components/explore/TrendingTable';
// import useApiPrivate from 'app/hooks/useApiPrivate';
import api from 'app/api/tiddix';
import CustomSelectField from 'app/components/common/CustomSelect';
import { chkToaster } from 'app/components/common/Toaster';
import styled from 'styled-components';

const Explore: FC = () => {
  // const apiPrivate = useApiPrivate();
  // lastThirtyDays, lastSevenDays, lastTwentyFourHours, lastEighteenHours, lastTwelveHours, lastSixHours, allTime
  const [timeOption, setTimeOption] = useState('allTime');
  const [categoryOption, setCategoryOption] = useState('');
  // const [priceOption, setPriceOption] = useState('');
  const [projects, setProjects] = useState<any[]>([]);
  const [headerCategoryOption, setHeaderCategoryOption] = useState('');
  const [headerProjects, setHeaderProjects] = useState<any[]>([]);

  useEffect(() => {
    let url = `/projects?date=${timeOption}`;

    if (categoryOption) url += `&category=${categoryOption}`;

    api
      .get(url)
      .then(({ data }) => {
        setProjects(data.projects);
      })
      .catch(() => {
        chkToaster.error({ title: 'Something went wrong' });
      });
  }, [timeOption, categoryOption]);

  useEffect(() => {
    let url = `/projects?`;
    if (headerCategoryOption) url += `category=${headerCategoryOption}`;

    api
      .get(url)
      .then(({ data }) => {
        setHeaderProjects(data.projects);
      })
      .catch(() => {
        chkToaster.error({ title: 'Something went wrong' });
      });
  }, [headerCategoryOption]);

  return (
    <Styling>
      <Header />
      {/* <Category /> */}
      <Box>
        <Container
          maxW="144rem"
          p={{
            base: '8.4rem 2rem 8rem ',
            md: '8.4rem 7.4rem 8rem 7.2rem',
          }}
        >
          <Stack spacing="3.4rem">
            <Heading size="display3">Browse by Category</Heading>
            <Flex
              flexWrap={{ base: 'wrap', md: 'nowrap' }}
              gap={{ base: '1.5rem', md: '2rem' }}
            >
              <Button
                size="md"
                variant="default"
                onClick={(e) => setHeaderCategoryOption('')}
                className={headerCategoryOption === '' ? 'active' : ''}
              >
                All
              </Button>
              <Button
                size="md"
                variant="default"
                onClick={(e) => setHeaderCategoryOption('art')}
                className={headerCategoryOption === 'art' ? 'active' : ''}
              >
                Art
              </Button>
              <Button
                size="md"
                variant="default"
                onClick={(e) => setHeaderCategoryOption('music')}
                className={headerCategoryOption === 'music' ? 'active' : ''}
              >
                Music
              </Button>
              <Button
                size="md"
                variant="default"
                onClick={(e) => setHeaderCategoryOption('fashion')}
                className={headerCategoryOption === 'fashion' ? 'active' : ''}
              >
                Fashion
              </Button>
              <Button
                size="md"
                variant="default"
                onClick={(e) => setHeaderCategoryOption('photography')}
                className={
                  headerCategoryOption === 'photography' ? 'active' : ''
                }
              >
                Photography
              </Button>
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              flexDir={{ base: 'column', sm: 'row' }}
              gap="2rem"
            >
              {headerProjects.slice(0, 2).map((project) => (
                <CategoryCard project={project} key={project.id} />
              ))}
            </Flex>
          </Stack>
        </Container>
      </Box>

      {/* <TopTrending /> */}
      <Box>
        <Container
          maxW="144rem"
          p={{
            base: '5rem 2rem 8rem',
            sm: '6rem 5rem 8rem',
            md: '6.4rem 7.2rem 8rem ',
          }}
        >
          <Flex justify="space-between" gap={5} mb="7.4rem">
            <Stack spacing="1.4rem" maxW="44rem">
              <Heading size="display3">Top Trending Projects</Heading>
              <Text size="body2">
                Top projects currently raising funds on Tiddix ranked by the
                amount raised and project type.
              </Text>
            </Stack>
            <Flex flexWrap="wrap" gap={{ base: '1.6rem', md: '2.3rem' }}>
              <CustomSelectField
                // placeholder="Recent Projects"
                defaultValue="allTime"
                fontSize="2rem"
                maxW={{ base: '20rem', md: 'auto' }}
                w="100%"
                fontWeight="700"
                _placeholder={{ color: 'black' }}
                color="white"
                label="Filter with Time"
                name="timeOption"
                value={timeOption}
                onChange={(e) => setTimeOption(e.target.value)}
                options={[
                  {
                    label: 'Recent Projects',
                    value: 'allTime',
                  },
                  {
                    label: 'Last 24 Hours',
                    value: 'lastTwentyFourHours',
                  },
                  {
                    label: 'Past Week',
                    value: 'lastSevenDays',
                  },
                  {
                    label: 'Past Month',
                    value: 'lastThirtyDays',
                  },
                ]}
              />

              <CustomSelectField
                maxW={{ base: '20rem', md: 'auto' }}
                w="100%"
                placeholder="Category"
                fontSize="2rem"
                fontWeight="700"
                color="white"
                label="Category"
                name="categoryOption"
                value={categoryOption}
                onChange={(e) => setCategoryOption(e.target.value)}
                options={[
                  {
                    label: 'All',
                    value: '',
                  },
                  {
                    label: 'Art',
                    value: 'art',
                  },
                  {
                    label: 'Photography',
                    value: 'photography',
                  },
                  {
                    label: 'Music',
                    value: 'music',
                  },
                  {
                    label: 'Food',
                    value: 'food',
                  },
                  {
                    label: 'Fashion',
                    value: 'fashion',
                  },
                ]}
              />
            </Flex>
          </Flex>
          <TrendingTable projects={projects} />
        </Container>
      </Box>
      <Footer />
    </Styling>
  );
};

const Styling = styled.div`
  .active {
    border-color: #ff8cdf;
  }
`;

export default Explore;
