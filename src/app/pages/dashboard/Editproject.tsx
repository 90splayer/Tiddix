import React from 'react';
import {
  Container,
  Box,
  Avatar,
  Button,
  Flex,
  HStack,
  Text,
  Icon,
  Stack,
  Input,
} from '@chakra-ui/react';
import Header from 'app/layout/Header';
import { Footer } from 'app/layout/Footer';
import General from 'app/components/dashboard/edit profile/General';
import EditProfile from 'app/components/dashboard/edit profile/EditProfile';
import ProfilePassword from 'app/components/dashboard/edit profile/ProfilePassword';
import SocialMedia from 'app/components/dashboard/edit profile/SocialMedia';
import Notification from 'app/components/dashboard/edit profile/Notification';
import { SideTabsLayout } from 'app/components/common/SideTabsLayout';
import useAuth from 'app/hooks/useAuth';
import CreditScore from 'app/components/dashboard/edit profile/CreditScore';

const Delete = () => {
  return <Text>Needs Design</Text>;
};

const ProfileEdit = () => {
  const authContext = useAuth();
  const firstName = authContext?.auth?.firstName;
  const lastName = authContext?.auth?.lastName;
  const profilePicture = authContext?.auth?.profilePicture;

  return (
    <Box>
      <Header />
      <Container maxW="144rem" p="6.4rem 18.2rem">
        <Flex gap="2rem" align="center" mb="7.2rem">
          <Box>
            <Avatar
              border="2px solid pink"
              boxSize="64px"
              name={`${firstName} ${lastName}`}
              src={profilePicture ?? undefined}
            />
          </Box>
          <Stack spacing="15px" maxW="485px">
            <HStack spacing="6px">
              <Text fontWeight="700" size="h2" color="#fff">
                {`${firstName} ${lastName}`}
              </Text>
              <Text fontSize="2.4rem">/</Text>
              <Text fontWeight="700" fontSize="2.4rem" color="#fff">
                General
              </Text>
            </HStack>
            <Text size="body2">
              Update your account details and manage your preferences
            </Text>
          </Stack>
        </Flex>
        <SideTabsLayout
          components={[
            { title: 'General', component: <General /> },
            { title: 'Edit Profile', component: <EditProfile /> },
            { title: 'Password', component: <ProfilePassword /> },
            { title: 'Social media account', component: <SocialMedia /> },
            { title: 'Email Notification', component: <Notification /> },
            { title: 'Credit Score', component: <CreditScore/> },
            { title: 'Delete Account', component: <Delete /> },
          ]}
        />
      </Container>
      <Footer />
    </Box>
  );
};

export default ProfileEdit;
