import { Box, Flex, Heading, Text, Button, Icon } from '@chakra-ui/react';
import noinvest from '../../../assets/images/dashboard/no-invest.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { EmptyTableIcon } from 'app/assets/icons';

const NoUserInvestment = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      height="100%"
      gap="1rem"
    >
      <Icon as={EmptyTableIcon} boxSize={'8rem'} />
      <Heading size="h3">No investment found</Heading>
      <Text maxW="59rem" textAlign="center" pb="1rem" size="body2">
        Looks like you are yet to make an investment! Click explore Project to
        make your first investment
      </Text>

      <Link to="/explore">
        <Button variant="multicolor" size="sm">
          Explore Project
        </Button>
      </Link>
    </Flex>
  );
};

export default NoUserInvestment;
