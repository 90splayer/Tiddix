import {
  Box,
  Container,
  HStack,
  Heading,
  Image,
  VStack,
  Text,
  Stack,
  Flex,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { Fade } from 'react-reveal';
import VisionImg from '../../assets/images/about/vision.png';

const VisionMission: FC = () => {
  return (
    <Box>
      <Container maxW="144rem" p="0">
        <Flex
          justify="spacebetween"
          flexDir={{ base: 'column', md: 'row' }}
          pr={{ base: '0', md: '21.2rem' }}
          gap={10}
        >
          <Box w={{ base: '100%', md: '89.9rem' }}>
            <Image src={VisionImg} />
          </Box>
          <Stack spacing="3.7rem" px={{ base: '1.9rem', md: '0' }}>
            {/* <Fade duration={2500} bottom delay={200}> */}
            <Box maxW="46.2rem">
              <Heading
                pt={{ base: '6rem', md: '25.2rem' }}
                mb="3rem"
                size="h1"
                color="#fff"
              >
                The Vision
              </Heading>
              <Text size="body1" color="#99A1AA">
                A thriving metric-based creative economy backed by direct
                investment in creatives and their projects.
              </Text>
            </Box>
            {/* </Fade> */}

            {/* <Fade duration={2500} bottom delay={400}> */}
            <Box maxW="46.2rem">
              <Heading size="h1" mb="3rem" color="#fff">
                The Mission
              </Heading>
              <Text
                size="body1"
                pb={{ base: '3rem', md: '35.1rem' }}
                color="#99A1AA"
              >
                Building a platform to help creatives realise their dreams by
                connecting them with supporters, investors and funding
              </Text>
            </Box>
            {/* </Fade> */}
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default VisionMission; //
