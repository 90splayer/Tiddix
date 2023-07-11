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
import React, { FC } from 'react';
import { MdSettings } from 'react-icons/md';
import { BiRefresh } from 'react-icons/bi';
import { IoShareSocialSharp } from 'react-icons/io5';
import {
  DashboardIcon,
  InvestmentIcon,
  PaletteIcon,
  TestimonialIcon,
} from 'app/assets/icons';
import CustomTab from '../common/CustomTab';
import BecomeInvestor from '../landing-page/BecomeInvestor';
import DashboardOverview from './DashboardOverview';
import ProjectOverview from './project/ProjectOverview';
import useAuth from 'app/hooks/useAuth';
import { Link } from 'react-router-dom';
import TestimonialView from './TestimonialView';

const Overview: FC = () => {
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
              <Flex gap="12px" align="center">
                <Link to="/dashboard/edit-profile">
                  <Button variant="secondary" size="sm">
                    Edit Profile
                  </Button>
                </Link>
                <Flex
                  bg="#232629"
                  align="center"
                  justify="center"
                  borderRadius="100%"
                  w="50px"
                  h="50px"
                >
                  <Icon as={MdSettings} fontSize="2rem" color="#fff" />
                </Flex>

                <Flex
                  bg="#232629"
                  align="center"
                  justify="center"
                  borderRadius="100%"
                  w="50px"
                  h="50px"
                >
                  <Icon as={IoShareSocialSharp} fontSize="2rem" color="#fff" />
                </Flex>
              </Flex>
            </Stack>
          </Flex>
          <Flex
            borderRadius="30px"
            w="41.1rem"
            gap="2.2rem"
            px="3rem"
            align="center"
            h="145px"
            bgGradient="radial-gradient(170.01% 203.82% at 137.98% -39.33%, #FF2727 0%, #FF8CDF 44.52%, #448FFF 100%)'"
          >
            <Flex
              bg="#fff"
              align="center"
              justify="center"
              borderRadius="100%"
              w="70px"
              h="70px"
            >
              <Icon as={IoWallet} fontSize="3.4rem" color="#000" />
            </Flex>
            <Flex align="flex-end" gap="1.5rem">
              <Stack spacing="1rem">
                <Text size="body3" color="#fff">
                  Wallet Balance
                </Text>
                <Text fontSize="3.2rem" fontWeight="700" color="#fff">
                  ${walletBalance}
                </Text>
              </Stack>

              <Icon
                as={BiRefresh}
                fontSize="2.4rem"
                color="#fff"
                cursor="pointer"
              />
            </Flex>
          </Flex>
        </Flex>

        <CustomTab
          // largerHeading
          tabs={[
            {
              label: 'Dashboard',
              body: <DashboardOverview />,
              icon: DashboardIcon,
            },
            {
              label: 'Project',
              body: <ProjectOverview />,
              icon: PaletteIcon,
            },
            {
              label: 'Investment',
              body: 'lorem ipsum',
              icon: InvestmentIcon,
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

export default Overview;
