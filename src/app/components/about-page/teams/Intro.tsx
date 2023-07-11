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

const Teams: FC = () => {
  return (
    <Box>
      <Container maxW="144rem" pt="12.9rem" px="7.2rem" pb="18.7rem">
        <VStack spacing="4.8rem" pb="15.1rem">
          <Text
            size="body2"
            textAlign="center"
            bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
            bgClip="text"
            fontSize="2.6rem"
          >
            TEAM
          </Text>

          <Heading
            size="display4"
            maxW="64.9rem"
            textAlign="center"
            color="#fff"
            letterSpacing="1px"
          >
            Meet the team of professionals that ensure the magic happens
          </Heading>
        </VStack>
        <Grid templateColumns="repeat(4, 1fr)" pb="3.6rem" gap="3rem">
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
