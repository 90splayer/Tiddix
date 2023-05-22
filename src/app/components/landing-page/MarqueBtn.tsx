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
      background="transparent"
      border="2px solid pink"
      borderRadius="100px"
      p="20px 50px"
    >
      <Heading as="h2">{title}</Heading>
    </Flex>
  );
};

export default MarqueBtn;
