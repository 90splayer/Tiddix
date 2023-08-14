import {
  Flex,
  HStack,
  Image,
  Text,
  Box,
  Stack,
  Avatar,
  Heading,
} from '@chakra-ui/react';
import { verify } from 'app/assets/svgs/home';
import { thousandsSeparators } from 'app/utils/helpers';
import React from 'react';

const UserDebtInvestment = ({ investment }: any) => {
  const roi = (investment.amount * investment.interest) / 100;
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
        <Text size="body2"> Amount Due</Text>
        <Text color="#fff">
          £ {thousandsSeparators(investment.amount + roi)}
        </Text>
      </Stack>
      <Stack>
        <Text size="body2">Interest</Text>
        <Text color="#fff">{investment.interest}%</Text>
      </Stack>
      <Stack>
        <Text size="body2">Duration</Text>
        <Text color="#fff">{investment.projectDuration}</Text>
      </Stack>
      <Stack>
        <Text size="body2">ROI</Text>
        <Text color="#fff">£{thousandsSeparators(roi)}</Text>
      </Stack>
    </Flex>
  );
};

export default UserDebtInvestment;
