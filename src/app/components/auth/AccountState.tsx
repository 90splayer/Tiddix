import React from 'react';
import {
  HStack,
  Input,
  Icon,
  Flex,
  Text,
  Avatar,
  Stack,
  Button,
  Heading,
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { IoWallet } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { UserData } from '../data/dashboard/UserData';
import { isAuthenticated } from 'app/utils/helpers';
import CustomMenuButton from '../common/CustomMenuButton';
import {
  WalletIcon,
  ChevronDownIcon,
  DashboardIcon,
  LogoutIcon,
} from 'app/assets/icons';
import { useNavigate } from 'react-router-dom';
import { apiPrivate } from 'app/api/tiddix';
import useAuth from 'app/hooks/useAuth';

const {
  likes,
  avartar,
  first_name: firstName,
  last_name: lastName,
  wallet_bal: bal,
} = UserData[0];

const UserInfo = () => {
  return (
    <Flex gap="2rem" align="center" zIndex={5}>
      <Avatar boxSize="40px" name="Segun Adebayo" src={avartar} />
      <Stack>
        <Heading size="h5">
          {firstName} {lastName}
        </Heading>
        <Text size="body2">Creative & Investor</Text>
      </Stack>
    </Flex>
  );
};

export default function AccountState() {
  const authContext = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    authContext?.setAuth(null);
    apiPrivate.post('/logout');
  };

  return (
    <>
      {isAuthenticated() ? (
        <HStack spacing={{ base: '15px', md: '2.8rem' }}>
          <Flex gap="5px">
            <Icon as={FaHeart} color="pink" />
            <Text size="body2">{likes}</Text>
          </Flex>
          <CustomMenuButton
            title={
              <Flex gap="1.4rem" align="center">
                <Avatar boxSize="40px" name="Segun Adebayo" src={avartar} />
                <Stack>
                  <Text size="body2">Hello, {firstName}</Text>
                  <Flex align="center" gap=".5rem">
                    <WalletIcon />
                    <Text size="body2">{bal}</Text>
                  </Flex>
                </Stack>
                <ChevronDownIcon style={{ marginLeft: '.3rem' }} />
              </Flex>
            }
            options={[
              {
                label: <UserInfo />,
                value: 'userInfo',
                onSelect() {
                  return;
                },
              },
              {
                label: 'Dashboard',
                value: 'dashboard',
                icon: <DashboardIcon />,
                onSelect() {
                  navigate('/dashboard', { replace: true });
                },
              },
              {
                label: 'Logout',
                value: 'logout',
                icon: <LogoutIcon />,
                onSelect() {
                  logout();
                },
              },
            ]}
          />

          <NavLink to="/dashboard">
            <Button size="sm">Create</Button>
          </NavLink>
        </HStack>
      ) : (
        <HStack>
          <NavLink to="/signup">
            <Button variant="borderless" size="sm">
              Sign Up
            </Button>
          </NavLink>
          <NavLink to="/login">
            <Button variant="multiradial" size="sm">
              Login
            </Button>
          </NavLink>
        </HStack>
      )}
    </>
  );
}
