import React from 'react';
import { Container, Flex, Heading } from '@chakra-ui/react';
import { plus, setUp, funds } from '../../assets/svgs/home';
import HowItWorkCard from './HitwCard';

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
        <HowItWorkCard
          icon={plus}
          title={'Sign up & create your account'}
          desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
        <HowItWorkCard
          icon={setUp}
          title={'Setup & create your project'}
          desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
        <HowItWorkCard
          icon={funds}
          title={'Start getting funds'}
          desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
      </Flex>
    </Container>
  );
};

export default HowItWork;
