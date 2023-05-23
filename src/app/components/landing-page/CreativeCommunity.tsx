import { Box, Flex, Heading, Stack } from '@chakra-ui/react';
// import creativeBox from '../../assets/images/home/growing-creativeBg.png';
// import Marquee from 'react-fast-marquee';
import React, { FC } from 'react';
// import MarqueBtn from './MarqueBtn';
// import { CategoryData } from '../data/Category';

const CreativeCommunity: FC = () => {
  return (
    <Box p="8.3rem 0 7.5rem">
      <Flex flexDir="column" align="center">
        <Heading
          as="h2"
          size="display2"
          maxW="49.8rem"
          textAlign="center"
          mb="10rem"
        >
          Our growing creative community
        </Heading>

        {/* <Stack spacing="30px">
          <Marquee pauseOnHover speed={10} autoFill={true}>
            {CategoryData.slice(0, 10).map((item, index) => (
              <Box key={index} m="0 2.5rem">
                <MarqueBtn title={item} />
              </Box>
            ))}
          </Marquee>
          <Marquee pauseOnHover speed={10} autoFill={true}>
            {CategoryData.slice(10, 20).map((item, index) => (
              <Box key={index} m="0 2.5rem">
                <MarqueBtn title={item} />
              </Box>
            ))}
          </Marquee>

          <Marquee pauseOnHover speed={10} autoFill={true}>
            {CategoryData.slice(20).map((item, index) => (
              <Box key={index} m="0 2.5rem">
                <MarqueBtn title={item} />
              </Box>
            ))}
          </Marquee>
        </Stack> */}
        {/* <Box bgImg={creativeBox} w="full" h="279px"></Box> */}
      </Flex>
    </Box>
  );
};

export default CreativeCommunity;
