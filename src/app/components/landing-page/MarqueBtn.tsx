import { Flex, Heading } from '@chakra-ui/react';
import React, { FC } from 'react';
type Props = {
  title: string;
};
const MarqueBtn: FC<Props> = ({ title }) => {
  return (
    <Flex
      align="center"
      justify="center"
      sx={{
        borderRadius: '100px',
        border: '2px solid transparent',
        background:
          'linear-gradient(transparent, transparent) padding-box, linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%) border-box',

        // borderImage:
        //   'linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%) 1',
      }}
      p="20px 50px"
    >
      <Heading as="h2">{title}</Heading>
    </Flex>
  );
};

export default MarqueBtn;
