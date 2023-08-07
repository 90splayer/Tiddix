import {
  Box,
  VStack,
  Text,
  Container,
  Heading,
  Flex,
  Image,
  Stack,
} from '@chakra-ui/react';
import profile from '../../assets/images/about/coporate-profile.webp';
import { Fade, Bounce } from 'react-reveal';
import React from 'react';

const CorporateProfile = () => {
  return (
    <Box>
      <Container maxW="144rem" pt="12.2rem" px="0">
        <VStack mb="8.7rem">
          <Text
            mb="5rem"
            size="body2"
            bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
            bgClip="text"
            fontSize="2.6rem"
          >
            CORPORATE PROFILE
          </Text>

          <Bounce duration="2500">
            <Heading
              size="display2"
              textAlign="center"
              maxW="70.4rem"
              letterSpacing="1px"
              pb="3.5rem"
            >
              We are driving the shift towards decentralisation in finance
            </Heading>
          </Bounce>
        </VStack>
        <Box mb="8rem">
          <Image
            src={profile}
            alt="corporate-profile"
            borderRadius="30px"
            w="100%"
            maxH="428px"
            objectFit="cover"
          />
        </Box>
        <Flex flexDir="column" px="10.2rem">
          <Stack spacing="3rem">
            <Fade duration={3500}>
              <Heading as="h2">Status quo</Heading>
            </Fade>
            <Fade>
              <Text textAlign="justify">
                In the creative economy today, the nature of centralised markets
                means that creatives can only raise funds for production through
                corporations like record labels and publishers, often wrapping
                the artist into long-term unfavorable deals that can derail both
                creativity and longevity.
                <br />
                <br />
                This deadlock between creatives and corporations has been
                challenged via crowdfunding platforms like Kickstarter. But
                rather than creating opportunities for investment with valuable
                returns, these platforms often come with a “charity” spin,
                making the “supporters” just donors happy to receive a
                stipulated reward. The result of this is a fan-only supporting
                model that cuts out investors that might be interested in
                funding for financial return.
              </Text>
            </Fade>

            <Fade duration={3500}>
              <Heading as="h2">The disruption</Heading>
            </Fade>
            <Fade>
              <Text textAlign="justify">
                Tiddix aims to take advantage of the shift towards
                decentralisation in finance to invite investors to the creative
                space where creator metrics (views, engagements, followers,
                rankings, etc.) can be used to properly determine a creator’s
                value and prospects for investments.
                <br />
                <br />
                We hope that this new pipeline to funding will provide creators
                with the freedom to put out their best work while also giving
                investors an early-stage entrance into both projects and the
                associated creators. A single smartphone is now a powerful
                enough tool to launch a career in creativity. With our unique
                scoring system, we provide a platform that takes advantage of
                the latest technologies to launch exciting projects to be a part
                of and the funding to make them a reality.
              </Text>
            </Fade>

            <Fade duration={3500}>
              <Heading as="h2">Come Join Us</Heading>
            </Fade>

            <Fade>
              <Text textAlign="justify">
                The trend already exists in the emergence of many successful
                independent artists across the creative field, but with investor
                backing, we believe the next producer would not need an
                established production studio to go to market. After all, with
                the democratisation of technology, most of the creativity we
                experience today is developed by a network of creators building
                magic from the comfort of their homes.
                <br />
                <br />
                What are you waiting for you? Come join the movement! See you at
                the top, with all the other great creators.
              </Text>
            </Fade>

            <br />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default CorporateProfile;
