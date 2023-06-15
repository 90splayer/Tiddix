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
          >
            CORPORATE PROFILE
          </Text>

          <Heading
            size="display2"
            textAlign="center"
            maxW="70.4rem"
            pb="3.5rem"
          >
            We take advantage of the shift towards decentralisation in finance
          </Heading>
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
        <Flex flexDir="column" px="7.2rem">
          <Text mb="5rem">
            We are established in the United Kingdom in 2022, Tiddix is 100%
            British owned and operated and our head office is in London.
            <br />
            <br />
            We are proud to be the bridge upon which the recognition of the
            financial power of young creative minds stand. Since our
            establishment, we have made over 100 dreams come though and we are
            proud to report that we provided the launching pad to over a dozen
            very successful creatives careers thus far
          </Text>
          <Stack spacing="3rem">
            <Heading as="h2">Status quo</Heading>
            <Text>
              In the creative economy today, the nature of centralised markets
              means that creatives can only raise funds for production through
              corporations like record labels and publishers often wrapping the
              artist into long-term unfavourable deals that can derail both
              creativity and longevity.
              <br />
              <br />
              This deadlock between creatives and corporations has been
              challenged via crowdfunding platforms like Kickstarter. But rather
              than creating opportunities for investment with valuable returns,
              these platforms often come with a “charity” spin making the
              “supporters” just donors happy to receive a stipulated reward. The
              result of this is a fan-only supporting model cutting out
              investors that might be interested in funding for financial
              return.
            </Text>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default CorporateProfile;
