import { FC, useState } from 'react';
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
  Image,
  Input,
} from '@chakra-ui/react';
// import { FaSun, FaMoon } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import tiddix from '../assets/images/tiddix.png';
import { NavLink } from 'react-router-dom';
import AccountState from 'app/components/auth/AccountState';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { DashboardIcon, LogoutIcon } from 'app/assets/icons';
import CustomMenuButton from 'app/components/common/CustomMenuButton';
import { useNavigate } from 'react-router-dom';

const TopNav = () => {
  const [isMobile, setIsMobile] = useState('none');
  const navigate = useNavigate();

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
          sm: '3.6rem 3rem 3rem',
          md: '3.6rem 5.2rem 3rem',
          lg: '3.6rem 7.2rem 3rem',
        }}
      >
        <Flex align="center" justify="space-between">
          <Flex gap="50px">
            <NavLink to="/">
              <Image src={tiddix} alt="tiddix logo" maxW="120px" />
            </NavLink>
            <HStack
              display={{ base: 'none', lg: 'flex' }}
              spacing={{ base: '15px', md: '30px', xl: '40px' }}
              fontSize={{ md: '1.4rem', lg: '1.6rem' }}
              color="#99A1AA"
            >
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
                {/* <Text
                  size="body2"
                  whiteSpace="nowrap"
                  display={{ base: 'none', md: 'flex', lg: 'flex' }}
                  transition="0.2s ease-in-out"
                  _hover={{
                    bgGradient: 'linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)',
                    bgClip: 'text',
                  }}
                >
                  About Us
                </Text> */}
                <CustomMenuButton
                  title={
                    <Flex gap="1.4rem" align="center">
                      <Text
                        size="body2"
                        whiteSpace="nowrap"
                        display={{ base: 'none', md: 'flex', lg: 'flex' }}
                        transition="0.2s ease-in-out"
                        _hover={{
                          bgGradient: 'linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)',
                          bgClip: 'text',
                        }}
                      >
                        About Us
                      </Text>
                      <ChevronDownIcon style={{ marginLeft: '.1rem' }} />
                    </Flex>
                  }
                  options={[
                    {
                      label: 'Corporate Profile',
                      value: 'corporate profile',
                      onSelect() {
                        return;
                      },
                    },
                    {
                      label: 'Our Team',
                      value: 'our team',
                      onSelect() {
                        return;
                      },
                    },
                    {
                      label: 'Code of Conduct',
                      value: 'code of conduct',
                      onSelect() {
                        return;
                      },
                    },
                  ]}
                />
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
              <NavLink to="/creative">
                <Text
                  size="body2"
                  display={{ base: 'none', md: 'flex', lg: 'flex' }}
                  transition="0.2s ease-in-out"
                  _hover={{
                    bgGradient: 'linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)',
                    bgClip: 'text',
                  }}
                >
                  Creatives
                </Text>
              </NavLink>
            </HStack>
          </Flex>

          <Box px="2rem" maxW="30.6rem" display={{ base: 'none', sm: 'block' }}>
            <Input
              pos="relative"
              placeholder="Search projects and creatives"
              px="2rem"
              borderRadius="10rem"
              border="1px solid #99A1AA"
              w={{ base: '30.6rem', lg: '100%', xl: '30rem' }}
              h="5.6rem"
              _placeholder={{
                fontSize: '1.6rem',
                color: '#99A1AA',
                fontWeight: '700',
              }}
            />
          </Box>

          <Box display={{ base: 'none', lg: 'flex' }}>
            <AccountState />
          </Box>

          <Box display={{ base: 'block', lg: 'none' }}>
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
