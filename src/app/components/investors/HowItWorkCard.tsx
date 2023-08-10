import { Box, Flex, Image, Heading, Stack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Fade } from 'react-reveal';

type Props = {
  icon: string;
  count: string;
  desc: string;
};
const HowItWorkCard: FC<Props> = ({ icon, count, desc }) => {
  return (
    <Flex
      p={{
        base: '4rem 3rem 5.4rem 5.7rem',
        sm: '6rem 5rem 7.4rem 6.7rem',
        md: '7.5rem 15rem 7.4rem 8.7rem',
      }}
      flexDir={{ base: 'column', sm: 'row' }}
      align={{ base: 'unset', sm: 'center' }}
      justify="space-between"
      gap={5}
      w="full"
      borderRadius="4rem"
      bgColor="rgb(152 151 151 / 25%)"
      filter="drop-shadow(2px 4px 6px black)"
      sx={{ WebkitBackdropFilter: 'blur(8px)' }}
      boxShadow="inset 0 0 0 100% rgba(255,255,255,0.08)"
    >
      <Stack>
        <Heading size="display1" color="#485155">
          {count}
        </Heading>
        <Fade duration="2500">
          <Heading size="display2" maxW={{ base: '42.5rem', md: '65%' }}>
            {desc}
          </Heading>
        </Fade>
      </Stack>

      <Fade duration="2500" right>
        <Box>
          <Image
            src={icon}
            alt="journey-step-img"
            maxW={{ base: '15rem', sm: '100%' }}
          />
        </Box>
      </Fade>
    </Flex>
  );
};

export default HowItWorkCard;
