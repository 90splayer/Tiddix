import { Box, Flex, Grid, GridItem, Heading, Stack } from '@chakra-ui/react';
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

        <Grid templateColumns="repeat(5, 1fr)" gap="20px">
          {CategoryData.slice(0, 15).map((item, index) => (
            <GridItem w="100%" key={index}>
              <MarqueBtn title={item} />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default CreativeCommunity;
