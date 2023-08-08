import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import AudienceCard from './AudienceCard';
import AudienceImg from '../../assets/images/about/audience.png';
import InvestorImg from '../../assets/images/about/investor-icons.png';
import { Fade } from 'react-reveal';

const Audiences: FC = () => {
  return (
    <Box>
      <Container
        maxW="144rem"
        p={{
          base: '8.8rem 1.9rem 11.8rem',
          sm: '10.8rem 5rem 18.8rem',
          md: '10.8rem 18.2rem 18.8rem ',
        }}
      >
        <VStack>
          <Fade duration={3500}>
            <Heading size="display2" textAlign="center" pb="5.1rem">
              Our Audience
            </Heading>
          </Fade>

          <Fade duration={3500}>
            <Text
              size="body1"
              textAlign="center"
              pb={{ base: '6rem', md: '13.9rem' }}
              maxW="72.9rem"
            >
              We invite investors to the creative space where creator metrics
              (views, engagements, followers, rankings etc) can be used to
              properly determine a creator’s value and prospects for
              investments.
            </Text>
          </Fade>

          <Flex
            justify="center"
            flexDir={{ base: 'column', md: 'row' }}
            gap="3.1rem"
          >
            <AudienceCard
              title={'Creator'}
              image={AudienceImg}
              desc={
                'Are you a creative in need of some investment to kick-start a project? share your creativity with the world, get funded and build your audience'
              }
            />

            <AudienceCard
              title={'Investor'}
              image={InvestorImg}
              desc={
                'Be the catalyst and spark to ignite the flame in the journey of a creative. You just might be funding the next big thing!'
              }
            />
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default Audiences;
