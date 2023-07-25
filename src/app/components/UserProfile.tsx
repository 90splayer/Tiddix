import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { verify } from 'app/assets/svgs/home';
import { IoWallet } from 'react-icons/io5';
import { FC } from 'react';
import { MdSettings } from 'react-icons/md';
import { BiRefresh } from 'react-icons/bi';
import { IoShareSocialSharp } from 'react-icons/io5';
import {
  DashboardIcon,
  InvestmentIcon,
  PaletteIcon,
  TestimonialIcon,
} from 'app/assets/icons';
import CustomTab from '../components/common/CustomTab';

import useAuth from 'app/hooks/useAuth';
import { Link } from 'react-router-dom';
import { thousandsSeparators } from 'app/utils/helpers';
import DashboardOverview from './dashboard/DashboardOverview';
import ProjectOverview from './dashboard/project/ProjectOverview';
import TestimonialView from './dashboard/TestimonialView';

const UserProfile: FC = () => {
  const authContext = useAuth();
  const firstName = authContext?.auth?.firstName;
  const lastName = authContext?.auth?.lastName;
  const bio = authContext?.auth?.bio;
  const profilePicture = authContext?.auth?.profilePicture;
  const walletBalance = authContext?.auth?.walletBalance;

  return (
    <Box>
      <Container
        maxW="144rem"
        zIndex={3}
        p={{
          base: '3.5rem 2rem',
          sm: '4rem 5rem',
          md: '5rem 5.2rem',
          lg: '5rem 7.2rem',
        }}
      >
        <Flex justify="space-between" mb="5rem">
          <Flex gap="4rem" align="center">
            <Box>
              <Avatar
                border="2px solid pink"
                boxSize="159px"
                name={`${firstName} ${lastName}`}
                src={profilePicture ?? undefined}
              />
            </Box>
            <Stack spacing="15px" maxW="403px">
              <HStack spacing="12px">
                <Text fontWeight="700" color="#fff">
                  {`${firstName} ${lastName}`}
                </Text>
                <Box>{verify}</Box>
              </HStack>
              <Text size="body1">{bio}</Text>
            </Stack>
          </Flex>
        </Flex>

        <CustomTab
          // largerHeading
          tabs={[
            {
              label: 'Project',
              body: 'coming soon',
              icon: PaletteIcon,
            },

            {
              label: 'Testimonials',
              body: <TestimonialView />,
              icon: TestimonialIcon,
            },
          ]}
        />
      </Container>
    </Box>
  );
};

export default UserProfile;
