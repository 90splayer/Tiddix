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
import DebtUserInvestment from './UserDebtInvestment';
import UserDebtInvestment from './UserDebtInvestment';
import UserEquityInvestment from './UserEquityInvestment';
import UserAngelInvestment from './UserAngelInvestment';
import NoUserInvestment from './NoUserInvestment';

type investmentT = {
  id: string;
  interest: number;
  amount: number;
  equityBought: number;
  coverArt: string;
  category: string;
  creativeId: string;
  projectName: string;
  projectDuration: string;
  creativeVerified: boolean;
  investmentType: string;
  progress: number;
  creativeName: string;
  isAngel: boolean;
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
  return investments.length === 0 ? (
    <NoUserInvestment />
  ) : (
    <Box w="100%">
      {investments.map((investment, index) => (
        <Flex
          align="center"
          gap="3rem"
          borderBottom="1px solid #485155"
          py="2rem"
        >
          <Box>
            <Text>{index + 1}</Text>
          </Box>

          {investment.investmentType === 'Debt' && (
            <UserDebtInvestment investment={investment} />
          )}
          {investment.investmentType === 'Equity' && (
            <UserEquityInvestment investment={investment} />
          )}
          {/* {investment.isAngel && (
            <UserAngelInvestment investment={investment} />
          )} */}
        </Flex>
      ))}
    </Box>
  );
};

export default UserInvestment;
