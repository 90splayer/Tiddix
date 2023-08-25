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
import { thousandsSeparators } from 'app/utils/helpers';
import InvestmentOverview from './project/InvestmentOveriew';

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
          <Flex
            gap={{ base: '2.5rem', md: '4rem' }}
            align="center"
            flexWrap="wrap"
          >
            <Box>
              <Avatar
                border="2px solid pink"
                boxSize={{ base: '120px', md: '159px' }}
                name={`${firstName} ${lastName}`}
                src={profilePicture ?? undefined}
              />
            </Box>
            <Stack spacing={{ base: '10px', sm: '15px' }} maxW="403px">
              <HStack spacing="12px">
                <Text
                  fontWeight="700"
                  fontSize={{ base: '1.6rem', sm: '2rem' }}
                  color="#fff"
                >
                  {`${firstName} ${lastName}`}
                </Text>
                <Box>{verify}</Box>
              </HStack>
              <Text fontSize={{ base: '1.6rem', sm: '2rem' }}>{bio}</Text>
              <Flex gap={{ base: '8px', sm: '12px' }} align="center">
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
            borderRadius={{ base: '20px', sm: '30px' }}
            maxW="41.1rem"
            flexWrap={{ base: 'wrap', sm: 'nowrap' }}
            gap={{ base: '1rem', md: '2.2rem' }}
            px={{ base: '1rem', sm: '3rem' }}
            align="center"
            h="145px"
            bgGradient="radial-gradient(170.01% 203.82% at 137.98% -39.33%, #FF2727 0%, #FF8CDF 44.52%, #448FFF 100%)'"
          >
            <Flex
              bg="#fff"
              align="center"
              justify="center"
              borderRadius="100%"
              w={{ base: '30px', sm: '70px' }}
              h={{ base: '30px', sm: '70px' }}
            >
              <Icon
                as={IoWallet}
                fontSize={{ base: '1.4rem', sm: '3.4rem' }}
                color="#000"
              />
            </Flex>
            <Flex
              align={{ base: 'center', sm: 'flex-end' }}
              gap={{ base: '1rem', sm: '1.5rem' }}
            >
              <Stack spacing="1rem">
                <Text fontSize={{ base: '1.6rem', sm: '2rem' }} color="#fff">
                  Wallet Balance
                </Text>
                <Text
                  fontSize={{ base: '2rem', sm: '3.2rem' }}
                  fontWeight="700"
                  color="#fff"
                >
                  £{thousandsSeparators(String(walletBalance))}
                </Text>
              </Stack>

              <Icon
                as={BiRefresh}
                fontSize={{ base: '2rem', sm: '2.4rem' }}
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
              body: <InvestmentOverview />,
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
