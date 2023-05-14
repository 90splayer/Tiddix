import { FC, useState } from 'react';
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
  Image,
  Button,
  Input,
  Avatar,
  Stack,
  Icon,
} from '@chakra-ui/react';
// import { FaSun, FaMoon } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import tiddix from '../../assets/images/tiddix.png';
import { NavLink } from 'react-router-dom';
import love from '../../assets/svgs/dashboard/love.svg';
import { RiSearchLine } from 'react-icons/ri';
import { IoWallet } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import AccountState from '../auth/AccountState';

const TopNav = () => {
  const [isMobile, setIsMobile] = useState('none');

  const closeMenu = () => setIsMobile('none');
  return (
    <Box
      as="nav"
      bg="transparent"
      borderBottom={{ base: '1px solid #eded', lg: 'none' }}
    >
      <Container
        maxW="144rem"
        zIndex={3}
        p={{
          base: '3.5rem 2rem',
          sm: '3.6rem 5rem 3rem',
          md: '3.6rem 5.2rem 3rem',
          lg: '3.6rem 7.2rem 3rem',
        }}
      >
        <Flex align="center" justify="space-between">
          <HStack
            spacing={{ base: '15px', lg: '48px' }}
            fontSize={{ md: '1.4rem', lg: '1.6rem' }}
            color="#99A1AA"
          >
            <NavLink to="/">
              <Image src={tiddix} alt="tiddix logo" w="120px" />
            </NavLink>
            <NavLink to="/explore">
              <Text
                size="body2"
                display={{ base: 'none', md: 'flex', lg: 'flex' }}
                transition="0.2s ease-in-out"
                _hover={{
                  bgGradient: 'linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)',
                  bgClip: 'text',
                }}
              >
                Explore
              </Text>
            </NavLink>
            <NavLink to="/about">
              <Text
                size="body2"
                display={{ base: 'none', md: 'flex', lg: 'flex' }}
                transition="0.2s ease-in-out"
                _hover={{
                  bgGradient: 'linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)',
                  bgClip: 'text',
                }}
              >
                About Us
              </Text>
            </NavLink>
            <NavLink to="/invest">
              <Text
                size="body2"
                display={{ base: 'none', md: 'flex', lg: 'flex' }}
                transition="0.2s ease-in-out"
                _hover={{
                  bgGradient: 'linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)',
                  bgClip: 'text',
                }}
              >
                Investors
              </Text>
            </NavLink>
          </HStack>

          <Input
            pos="relative"
            placeholder="Search projects and creatives"
            px="2rem"
            borderRadius="10rem"
            border="1px solid #99A1AA"
            w="30.6rem"
            h="5.6rem"
            _placeholder={{
              fontSize: '1.6rem',
              color: '#99A1AA',
              fontWeight: '700',
            }}
          />

          <AccountState />

          <Box display={{ base: 'block', md: 'none', lg: 'none' }}>
            <IconButton
              _hover={{ bgColor: '#f4f4f4', color: '#0A0A0A' }}
              onClick={() => setIsMobile('flex')}
              color="white"
              bg="#191919"
              borderRadius="5px"
              p="2.5rem 1rem"
              aria-label="hamburger menu"
              transition="0.5s ease-in-out"
              size="md"
              fontSize="3.6rem"
              icon={<RxHamburgerMenu />}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default TopNav;
