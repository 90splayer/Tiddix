import { Box, Flex, Grid, GridItem, Heading, Stack } from '@chakra-ui/react';
// import creativeBox from '../../assets/images/home/growing-creativeBg.png';
import Marquee from 'react-fast-marquee';
import React, { FC } from 'react';
import MarqueBtn from './MarqueBtn';
import { CategoryData } from '../data/Category';

const CreativeCommunity: FC = () => {
  return (
    <Box p="8.3rem 0 7.5rem">
      <Flex flexDir="column" align="center">
        <Heading
          as="h2"
          size="display2"
          maxW="49.8rem"
          textAlign="center"
          mb="10rem"
        >
          Our growing creative community
        </Heading>

        {/* <Stack spacing="30px">
          <Marquee speed={15} direction="left">
            {CategoryData.slice(0, 6).map((item, index) => (
              <Box key={index} m="0 2.5rem">
                <MarqueBtn title={item} />
              </Box>
            ))}
          </Marquee>
          <Marquee speed={10} direction="right">
            {CategoryData.slice(6, 13).map((item, index) => (
              <Box key={index} m="0 2.5rem">
                <MarqueBtn title={item} />
              </Box>
            ))}
          </Marquee>
          <Marquee speed={20} direction="left">
            {CategoryData.slice(13, 20).map((item, index) => (
              <Box key={index} m="0 2.5rem">
                <MarqueBtn title={item} />
              </Box>
            ))}
          </Marquee>
        </Stack> */}
        <Grid templateColumns="repeat(5, 1fr)" gap={10}>
          {CategoryData.slice(0, 15).map((item, index) => (
            <GridItem key={index}>
              <MarqueBtn title={item} />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default CreativeCommunity;
