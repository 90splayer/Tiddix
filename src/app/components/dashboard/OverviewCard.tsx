import { Flex, Heading, Icon, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  count: string;
  price?: string;
  fundDetail: string;
};
const OverviewCard: FC<Props> = ({ icon, count, price, fundDetail }) => {
  return (
    <Flex
      bg="#232629"
      flexDir="column"
      justify="space-between"
      maxW="411px"
      h="239px"
      p="25px 30px 40px"
      borderRadius="30px"
    >
      <Flex justify="space-between" align="center">
        <Flex
          bg="#000"
          align="center"
          justify="center"
          borderRadius="100%"
          w="70px"
          h="70px"
        >
          <Icon as={icon} fontSize="3.4rem" />
        </Flex>
        <Heading size="display2">{count}</Heading>
      </Flex>
      <Flex justify="space-between" align="center">
        <Text color="#fff">{fundDetail}</Text>
        <Text color="#fff" fontWeight="700">
          {price}
        </Text>
      </Flex>
    </Flex>
  );
};

export default OverviewCard;
