/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { HStack, Text, Flex, Avatar, Box } from '@chakra-ui/react';
import React, { FC } from 'react';
type Props = {
  iconColor: any;
  textColor: any;
  mr: string;
};

const UserOnline: FC<Props> = ({ iconColor, textColor, mr }) => {
  return (
    <HStack>
      <Box mr={mr}>
        <BellIcon w="2rem" h="1.8rem" color={iconColor} />
      </Box>
      <Flex align="center">
        <Text color={textColor} fontSize="1.4rem" fontWeight="500" mr="3.9rem">
          Mark Gray
        </Text>
        <Flex align="center" justify="center">
          <Avatar
            size="md"
            mr="1.4rem"
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
            border="1px solid #F806CC"
          />
        </Flex>
        <Box>
          <ChevronDownIcon w="1.6rem" h="9rem" color={iconColor} />
        </Box>
      </Flex>
    </HStack>
  );
};

export default UserOnline;
