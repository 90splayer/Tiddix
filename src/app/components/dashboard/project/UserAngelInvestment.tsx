import {
  Flex,
  HStack,
  Stack,
  Image,
  Text,
  Avatar,
  Box,
  Heading,
} from '@chakra-ui/react';
import { verify } from 'app/assets/svgs/home';
import React from 'react';

const UserAngelInvestment = ({ investment }: any) => {
  return (
    <Flex w="100%" justify="space-between" align="center">
      <HStack spacing="19px">
        <Box boxSize="10rem">
          <Image
            w="100%"
            h="10rem"
            borderRadius="2rem"
            objectFit="cover"
            src={investment.coverArt}
            alt={investment.projectName}
          />
        </Box>
        <Stack>
          <HStack>
            <Avatar
              boxSize="25px"
              name={investment.creativeName}
              src={investment.creativePicture}
            />
            <Text size="body2" color="#fff">
              {investment.creativeName}
            </Text>
            <Box>{investment.creativeVerified && verify}</Box>
          </HStack>
          <Heading size="h3">{investment.projectName}</Heading>
          <Text fontSize="1.4rem">{investment.investmentType}</Text>
        </Stack>
      </HStack>
      <Stack>
        <Text size="body2"> Amount Raised</Text>
        <Text color="#fff">£ {investment.amount}</Text>
      </Stack>
      <Stack>
        <Text size="body2">Duration</Text>
        <Text color="#fff">{investment.interest}%</Text>
      </Stack>
    </Flex>
  );
};

export default UserAngelInvestment;
