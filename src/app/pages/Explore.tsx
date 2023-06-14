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
import Category from 'app/components/explore/Category';
import TopTrending from 'app/components/explore/TopTrending';
import { Footer } from 'app/layout/Footer';
import Header from 'app/layout/Header';
import CategoryCard from 'app/components/CategoryCard';
import TrendingTable from 'app/components/explore/TrendingTable';
// import useApiPrivate from 'app/hooks/useApiPrivate';
import api from 'app/api/tiddix';

const Explore: FC = () => {
  // const apiPrivate = useApiPrivate();
  // lastThirtyDays, lastSevenDays, lastTwentyFourHours, lastEighteenHours, lastTwelveHours, lastSixHours, allTime
  const [timeOption, setTimeOption] = useState('allTime');
  const [categoryOption, setCategoryOption] = useState('');
  // const [priceOption, setPriceOption] = useState('');
  const [project, setProjects] = useState<any[]>([]);

  useEffect(() => {
    let url = `/projects?date=${timeOption}`;

    if (categoryOption) url += `&category=${categoryOption}`;

    api
      .get(url)
      .then(({ data }) => {
        console.log('PORTFOLIO RESPONSE', data.projects);
      })
      .catch(() => {
        alert('Something went wrong');
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
              <Button size="md" variant="default">
                All
              </Button>
              <Button size="md" variant="default">
                Art
              </Button>
              <Button size="md" variant="default">
                Music
              </Button>
              <Button size="md" variant="default">
                Fashion
              </Button>
              <Button size="md" variant="default">
                Photography
              </Button>
            </Flex>
            <Flex justify="space-between" gap="2rem">
              <CategoryCard />
              <CategoryCard />
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
              <Select
                placeholder="Last 24 Hours"
                h="4.9rem"
                color="#fff"
                fontWeight="700"
                fontSize="1.6rem"
                border="2px solid #99A1AA"
                borderRadius="10rem"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Select
                placeholder="Last 7 Days"
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
              </Select>
              <Select
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
              </Select>
            </Flex>
          </Flex>
          <TrendingTable />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Explore;
