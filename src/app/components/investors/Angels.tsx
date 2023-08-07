import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  Flex,
  Stack,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import angels from '../../assets/images/investor/angel.png';
import { Zoom, Fade } from 'react-reveal';

const Angels: FC = () => {
  return (
    <Box>
      <Container maxW="144rem" pt="6.2rem" px=" 7.2rem">
        <Flex
          bgColor="#232629"
          align="center"
          gap={10}
          justify="space-between"
          borderRadius="4rem"
          pl="9.8rem"
          pr="8.9rem"
          w="full"
          h="66.4rem"
        >
          <Zoom>
            <Box>
              <Image src={angels} alt="angels-img" />
            </Box>
          </Zoom>

          <Stack>
            <Text
              fontSize="2.6rem"
              bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
              bgClip="text"
              mb="1.8rem"
            >
              ANGELS
            </Text>
            <Fade duration="2500">
              <Heading maxW="45.8rem" size="display1sub" pb="6.6rem">
                The gift that keeps on giving!
              </Heading>
            </Fade>

            <Text maxW="53.8rem">
              <Fade duration="3500">
                At Tiddix we recognise our everyday heroes that are selfless and
                just desire to bask in the joy of fully supporting dreams, no
                strings attached!
              </Fade>
              <br />
              <br />
              <Fade duration="4500">
                Our Angels invest in projects and dreams and require nothing but
                success back from the creatives.
              </Fade>
            </Text>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Angels;
