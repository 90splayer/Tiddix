import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  Button,
} from '@chakra-ui/react';
import noinvest from '../../../assets/images/dashboard/no-invest.png';
import React from 'react';
import { Link } from 'react-router-dom';

const NoUserInvestment = () => {
  return (
    <Box>
      <VStack spacing="3rem">
        <Image maxW="12rem" src={noinvest} alt="no-investment img" />
        <Heading size="display4">No investment found</Heading>
        <Text maxW="59rem" textAlign="center" pb="1rem">
          Looks like you are yet to make an investment! Click explore Project to
          make your first investment
        </Text>

        <Link to="/explore">
          <Button variant="multicolor" size="sm">
            Explore Project
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default NoUserInvestment;
