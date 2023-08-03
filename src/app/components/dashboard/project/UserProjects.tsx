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
import { chkToaster } from 'app/components/common/Toaster';

type projectT = {
  amount: number;
  creativeName: string;
  creativeId: string;
  id: string;
  coverArt: string;
  investmentType: string;
  creativeVerified: boolean;
  category: string;
  projectName: string;
  creativePicture: string;
  progress: number;
};

const UserProjects: FC = () => {
  const apiPrivate = useApiPrivate();

  const [projects, setProjects] = useState<projectT[]>([]);

  useEffect(() => {
    apiPrivate
      .get('/user/projects')
      .then(({ data }) => {
        console.log('RESPONSE', data.projects);
        setProjects(data.projects);
      })
      .catch(() => {
        chkToaster.error({ title: 'Something went wrong' });
      });
  }, []);

  return (
    <Box w="100%" py="3rem" h="auto">
      {projects.map((project) => (
        <Flex
          align="center"
          gap="3rem"
          borderBottom="1px solid #485155"
          py="2rem"
        >
          <Flex w="100%" justify="space-between" align="center">
            <HStack spacing="19px">
              <Box boxSize="10rem">
                <Image
                  w="100%"
                  h="10rem"
                  borderRadius="2rem"
                  objectFit="cover"
                  src="https://bit.ly/dan-abramov"
                  alt="dan"
                />
              </Box>
              <Stack>
                <HStack>
                  <Avatar
                    boxSize="25px"
                    name="dan abramov"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Text size="body2" color="#fff">
                    {project.creativeName}
                  </Text>
                  <Box>{project.creativeVerified && verify}</Box>
                </HStack>
                <Heading size="h3">{project.projectName}</Heading>
                <Text fontSize="1.4rem">{project.investmentType}</Text>
              </Stack>
            </HStack>
            <Stack>
              <Text size="body2">Funding Type</Text>
              <Text color="#fff">{project.investmentType}</Text>
            </Stack>
            <Stack>
              <Text size="body2">Period</Text>
              <Text color="#fff">5 Month</Text>
            </Stack>
            <Box>
              <Button
                variant="multiradial"
                fontSize="1.4rem"
                size="sm"
                isDisabled={project.progress !== 100}
              >
                Withdraw
              </Button>
            </Box>
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};

export default UserProjects;
