import React from 'react';
import { Container, Flex, Heading } from '@chakra-ui/react';
import { plus, setUp, funds } from '../../assets/svgs/home';
import HowItWorkCard from './HitwCard';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const HowItWork = () => {
  return (
    <Container maxW="144rem" p={{ base: '7.5rem 2rem', md: '7.5rem 7.2rem' }}>
      <Fade duration={3500}>
        <Heading
          as="h2"
          size="display1sub"
          textAlign="center"
          mb={{ base: '3.8rem', sm: '5rem', md: '10rem' }}
        >
          How it works
        </Heading>
      </Fade>

      <Flex
        justify="center"
        flexWrap={{ base: 'wrap', lg: 'nowrap' }}
        gap={{ base: '2%', lg: '3%' }}
      >
        <Link to="/signup">
          <HowItWorkCard
            icon={plus}
            title={'Sign up '}
            desc={'Sign up as a creative or an investor to optimise projects.'}
          />
        </Link>
        <Link to="/dashboard/create-project">
          <HowItWorkCard
            icon={setUp}
            title={'Create a project'}
            desc={
              'Share your creative ideas and attract funding from investors. '
            }
          />
        </Link>
        <Link to="dashboard/invest">
          <HowItWorkCard
            icon={funds}
            title={'Fund a project'}
            desc={
              'Become an investor in any project and make returns over time.'
            }
          />
        </Link>
      </Flex>
    </Container>
  );
};

export default HowItWork;
