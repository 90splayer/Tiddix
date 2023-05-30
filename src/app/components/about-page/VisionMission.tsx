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
import VisionImg from '../../assets/images/about/vision.png';

const VisionMission: FC = () => {
  return (
    <Box>
      <Container maxW="144rem" p="0">
        <Flex justify="spacebetween" pr="21.2rem">
          <Box w="89.9rem">
            <Image src={VisionImg} />
          </Box>
          <Stack spacing="3.7rem">
            <Box maxW="46.2rem">
              <Heading pt="25.2rem" mb="3rem" size="h1" color="#fff">
                The Vision
              </Heading>
              <Text size="body1" color="#99A1AA">
                A thriving metric-based creative economy backed by direct
                investment in creatives and their projects.
              </Text>
            </Box>
            <Box maxW="46.2rem">
              <Heading size="h1" mb="3rem" color="#fff">
                The Mission
              </Heading>
              <Text size="body1" pb="35.1rem" color="#99A1AA">
                Building a platform to help creatives realise their dreams by
                connecting them with supporters, investors and funding
              </Text>
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default VisionMission; //
