import React from 'react';
import { Container, Flex, Heading } from '@chakra-ui/react';
import { plus, setUp, funds } from '../../assets/svgs/home';
import HowItWorkCard from './HitwCard';
import { Link } from 'react-router-dom';

const HowItWork = () => {
  return (
    <Container maxW="144rem" p="7.5rem 7.2rem">
      <Heading
        as="h2"
        fontSize="4.8rem"
        textAlign="center"
        mb="10rem"
        lineHeight="54.62px"
        fontWeight="700"
        color="#fff"
      >
        How it works
      </Heading>
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
