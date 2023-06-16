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

const Explore: FC = () => {
  // const apiPrivate = useApiPrivate();
  // lastThirtyDays, lastSevenDays, lastTwentyFourHours, lastEighteenHours, lastTwelveHours, lastSixHours, allTime
  const [timeOption, setTimeOption] = useState('allTime');
  const [categoryOption, setCategoryOption] = useState('');
  // const [priceOption, setPriceOption] = useState('');
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    let url = `/projects?date=${timeOption}`;

    if (categoryOption) url += `&category=${categoryOption}`;

    api
      .get(url)
      .then(({ data }) => {
        console.log('PORTFOLIO RESPONSE', data.projects);
        setProjects(data.projects);
      })
      .catch(() => {
        console.log('SOMETHING WENT WRONG');
      });
  }, [timeOption, categoryOption]);

  return (
    <Box>
      <Header />
      {/* <Category /> */}
      <Box>
        <Container maxW="144rem" p="6.4rem 7.4rem 8rem 7.2rem">
          <Stack spacing="3.4rem">
            <Heading size="display3">Browse by Category</Heading>
            <Flex gap="2rem">
              <Button
                size="md"
                variant="default"
                onClick={(e) => setCategoryOption('')}
              >
                All
              </Button>
              <Button
                size="md"
                variant="default"
                onClick={(e) => setCategoryOption('art')}
              >
                Art
              </Button>
              <Button
                size="md"
                variant="default"
                onClick={(e) => setCategoryOption('music')}
              >
                Music
              </Button>
              <Button
                size="md"
                variant="default"
                onClick={(e) => setCategoryOption('fashion')}
              >
                Fashion
              </Button>
              <Button
                size="md"
                variant="default"
                onClick={(e) => setCategoryOption('photography')}
              >
                Photography
              </Button>
            </Flex>
            <Flex justify="space-between" gap="2rem">
              {projects.slice(0, 2).map((project) => (
                <CategoryCard project={project} key={project.id} />
              ))}
            </Flex>
          </Stack>
        </Container>
      </Box>

      {/* <TopTrending /> */}
      <Box>
        <Container maxW="144rem" p="6.4rem 7.2rem 8rem ">
          <Flex justify="space-between" mb="7.4rem">
            <Stack spacing="1.4rem" maxW="44rem">
              <Heading size="display3">Top Trending Projects</Heading>
              <Text size="body2">
                Top projects currently raising funds on Tiddix ranked by the
                amount raised and project type.
              </Text>
            </Stack>
            <Flex gap="2.3rem">
              <CustomSelectField
                placeholder="Time"
                fontSize="2rem"
                fontWeight="700"
                color="white"
                label="Filter with Time"
                name="timeOption"
                value={timeOption}
                onChange={(e) => setTimeOption(e.target.value)}
                options={[
                  {
                    label: 'All',
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
                    label: 'Photograph',
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
              {/* <Select
                placeholder="All"
                h="4.9rem"
                fontWeight="700"
                color="#fff"
                fontSize="1.6rem"
                border="2px solid #99A1AA"
                borderRadius="10rem"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select> */}
            </Flex>
          </Flex>
          <TrendingTable projects={projects} />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Explore;
