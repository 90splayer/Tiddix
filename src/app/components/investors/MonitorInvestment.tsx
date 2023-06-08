import {
  Flex,
  Stack,
  Heading,
  Container,
  Text,
  Box,
  Image,
} from '@chakra-ui/react';
import graphImg from '../../assets/images/home/graph.png';
import React from 'react';

const MonitorInvestment = () => {
  return (
    <Box>
      <Container maxW="144rem" p="10rem 16.2rem 3rem 10.2rem">
        <Flex
          align="center"
          flexDir={{ base: 'column', md: 'row' }}
          justify="space-between"
          gap={50}
        >
          <Box>
            <Image src={graphImg} alt="hero image" />
          </Box>

          <Stack spacing="54px" w={{ base: '100%', md: '50%' }}>
            <Heading maxW="41.3rem" size="display2">
              Monitor your investments
            </Heading>
            <Text maxW="47.5rem">
              We invite investors to the creative space where creator metrics
              (views, engagements, followers, rankings etc) can be used to
              properly determine a creator’s value and prospects for
              investments.
            </Text>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default MonitorInvestment;
