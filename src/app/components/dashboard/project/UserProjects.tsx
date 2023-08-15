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
  Card,
  CardHeader,
  Progress,
  SimpleGrid,
  useDisclosure,
} from '@chakra-ui/react';
import ProjectCard from 'app/components/ProjectCard';
import { projectData } from 'app/components/data/ProjectData';
import { verify } from 'app/assets/svgs/home';
import useApiPrivate from 'app/hooks/useApiPrivate';
import { chkToaster } from 'app/components/common/Toaster';
import { debt } from 'app/assets/svgs/dashboard/dashboard';
import { thousandsSeparators } from 'app/utils/helpers';
import { progress } from 'framer-motion';
import img from 'app/assets/images/contact.png';
import ConfirmationDialogModal from 'app/components/common/ConfirmationDialogModal';
import NoUserProjects from './NoUserProjects';

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
  isActive: boolean;
};

const UserProjects: FC = () => {
  const apiPrivate = useApiPrivate();

  const [projects, setProjects] = useState<projectT[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const confirmActionDialogue = {
    title: 'Confirm Action',
    text: `Are you sure you want to move project's funds to your wallet?`,
    accept: 'YES',
    reject: 'CANCEL',
  };

  const withdrawProjectFunds = () => {
    apiPrivate
      .post(`/user/projects/${selectedProjectId}/withdraw`)
      .then((res) => {
        console.log('RESPONSE', res);
        chkToaster.success({ title: 'Projects fund withdraw successful' });
      })
      .catch(() => {
        chkToaster.error({ title: 'Something went wrong' });
      });
  };

  useEffect(() => {
    apiPrivate
      .get('/user/projects')
      .then(({ data }) => {
        // console.log('RESPONSE', data.projects);
        setProjects(data.projects);
      })
      .catch(() => {
        chkToaster.error({ title: 'Something went wrong' });
      });
  }, []);

  return projects.length === 0 ? (
    <NoUserProjects />
  ) : (
    <SimpleGrid w="100%" columns={3} spacingX="24px" spacingY="30px">
      <ConfirmationDialogModal
        dialogContent={confirmActionDialogue}
        next={withdrawProjectFunds}
        modalState={isOpen}
        closeModal={onClose}
      />
      {projects.map((project) => (
        <Card bgColor="#232629" borderRadius="30px" p="13px 14.5px 32px 13px">
          <Box
            borderRadius="20px"
            bgImage={project.coverArt}
            backgroundPosition="center"
            bgSize="cover"
            h="265px"
            w="100%"
            mb="2rem"
            pos="relative"
            pl="1.5rem"
            pb="1.5rem"
          >
            <Flex pos="absolute" bottom={5} flexDir="column" justify="flex-end">
              <Text fontWeight="700" mb="3px" color="#fff">
                {project.projectName}
              </Text>
              <Text size="body2">{project.category}</Text>
            </Flex>
          </Box>
          <Flex justify="space-between" align="center" color="#fff">
            <Stack spacing="2rem">
              <HStack spacing="1rem">
                <Box>{debt}</Box>
                <Heading fontSize="1.6rem">{project.investmentType}</Heading>
              </HStack>

              <Heading fontSize="2rem">
                £ {thousandsSeparators(project.amount)}
              </Heading>
            </Stack>
            <Stack spacing="2rem">
              <HStack gap="1rem">
                <Button
                  variant="multiradial"
                  fontSize="1.2rem"
                  p="1.5rem 1rem"
                  size="xs"
                  isDisabled={project.progress < 100 && project.isActive}
                  onClick={() => {
                    setSelectedProjectId(project.id);
                    onOpen();
                  }}
                >
                  Withdraw
                </Button>
                <Text mb="15px" fontSize="1.6rem" textAlign="right">
                  {project.progress}%
                </Text>
              </HStack>

              <Progress
                value={project.progress}
                size="md"
                colorScheme="transparent"
                borderRadius="20px"
                background="linear-gradient(transparent, transparent) padding-box, linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%) border-box"
                w="10rem"
              />
            </Stack>
          </Flex>
        </Card>
      ))}
    </SimpleGrid>
  );
  // </Box>
};

export default UserProjects;
