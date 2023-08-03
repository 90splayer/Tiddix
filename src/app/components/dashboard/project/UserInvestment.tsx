import React, { FC, useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Flex,
  Image,
  Text,
  HStack,
  Heading,
  Stack,
  Button,
} from '@chakra-ui/react';
import ProjectCard from 'app/components/ProjectCard';
import { projectData } from 'app/components/data/ProjectData';
import { verify } from 'app/assets/svgs/home';
import useApiPrivate from 'app/hooks/useApiPrivate';

type investmentT = {
  id: string;
  interest: number;
  amount: number;
  coverArt: string;
  category: string;
  creativeId: string;
  projectName: string;
  creativeVerified: boolean;
  investmentType: string;
  progress: number;
  creativeName: string;
  creativePicture: string;
};
const UserInvestment: FC = () => {
  const apiPrivate = useApiPrivate();
  const [investments, setInvestments] = useState<investmentT[]>([]);

  useEffect(() => {
    apiPrivate
      .get('/user/investments')
      .then(({ data }) => {
        console.log(data);
        setInvestments(data.projects);
      })
      .catch((err) => console.log('RESPOND', err));
  }, []);
  return (
    <Box w="100%" borderLeft="1px solid #485155" pl="4rem" py="3rem" h="auto">
      {investments.map((investment, index) => (
        <Flex
          align="center"
          gap="3rem"
          borderBottom="1px solid #485155"
          py="2rem"
        >
          <Box>
            <Text>{index}</Text>
          </Box>
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
              <Text size="body2">Repayment Amount</Text>
              <Text color="#fff">£ {investment.amount}</Text>
            </Stack>
            <Stack>
              <Text size="body2">Interest</Text>
              <Text color="#fff">{investment.interest}%</Text>
            </Stack>
            <Stack>
              <Text size="body2">Period</Text>
              <Text color="#fff">..month</Text>
            </Stack>
            <Stack>
              <Text size="body2">Interest Payment</Text>
              <Text color="#fff">£ {investment.amount}</Text>
            </Stack>
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};

export default UserInvestment;
