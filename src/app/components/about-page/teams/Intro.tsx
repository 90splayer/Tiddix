import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import TeamsCard from './TeamsCard';
import { TeamsData } from 'app/components/data/about/TeamsData';
import { Fade } from 'react-reveal';

const Teams: FC = () => {
  return (
    <Box>
      <Container
        maxW="144rem"
        pt={{ base: '9rem', md: '12.2rem' }}
        px={{ base: '3rem', md: '5rem', lg: '7.2rem' }}
        pb={{ base: '11rem', md: '18.7rem' }}
      >
        <VStack spacing="4.8rem" pb={{ base: '10.7rem', md: '15.1rem' }}>
          <Text
            size="body2"
            textAlign="center"
            bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
            bgClip="text"
            fontSize={{ base: '1.6rem', md: '2.6rem' }}
          >
            TEAM
          </Text>
          <Fade duration="3500">
            <Heading
              size="display4"
              maxW={{ base: '35rem', md: '64.9rem' }}
              textAlign="center"
              color="#fff"
              letterSpacing="1px"
            >
              Meet the team of professionals that ensure the magic happens
            </Heading>
          </Fade>
        </VStack>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          pb="3.6rem"
          gap="3rem"
        >
          {TeamsData.map((item) => (
            <GridItem w="100%" key={item.id}>
              <TeamsCard
                image={item.image}
                name={item.full_name}
                title={item.job_title}
                portfolio={item.portfolio}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Teams;
