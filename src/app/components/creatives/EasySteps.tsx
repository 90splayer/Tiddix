import React from 'react';
import { Container, Flex, Heading } from '@chakra-ui/react';
import { plus, setUp, funds } from '../../assets/svgs/home';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import EasyStepCard from './EasyStepCard';
import profile from '../../assets/images/creatives/profile.png';
import file from '../../assets/images/creatives/files.png';
import explore from '../../assets/images/creatives/explore.png';
const EasySteps = () => {
  return (
    <Container maxW="144rem" margin="0 auto" p="7.5rem 7.2rem 13rem">
      <Flex justify="center">
        <Fade duration={3500}>
          <Heading
            as="h2"
            maxW="51rem"
            size="display2"
            textAlign="center"
            mb="9.8rem"
          >
            Start your journey in three easy steps
          </Heading>
        </Fade>
      </Flex>

      <Flex
        justify="space-between"
        mb="20.4rem"
        flexWrap={{ base: 'wrap', lg: 'nowrap' }}
        // gap="4.2rem"
        gap={{ base: '2%', lg: '3%' }}
      >
        <EasyStepCard
          icon={profile}
          desc={'Sign up on Tiddix platfrom'}
          count={'01'}
        />
        <EasyStepCard
          icon={file}
          desc={'Create a project / campaign'}
          count={'02'}
        />
        <EasyStepCard
          icon={explore}
          desc={'Promote it across your social media platforms'}
          count={'03'}
        />
      </Flex>

      <Flex justify="center">
        <Fade duration={3500}>
          <Heading maxW="97.9rem" size="display1" textAlign="center">
            We are here to support your journey and cannot wait to see your name
            in lights!🥰
          </Heading>
        </Fade>
      </Flex>
    </Container>
  );
};

export default EasySteps;
