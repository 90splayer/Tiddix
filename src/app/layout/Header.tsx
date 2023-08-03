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
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Icon,
} from '@chakra-ui/react';
import { RxHamburgerMenu } from 'react-icons/rx';
import tiddix from '../assets/images/tiddix.png';
import { NavLink } from 'react-router-dom';
import AccountState from 'app/components/auth/AccountState';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';

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
        zIndex={5}
        p={{
          base: '3.5rem 2rem',
          sm: '3.6rem 3rem 3rem',
          md: '3.6rem 5.2rem 3rem',
          lg: '3.6rem 7.2rem 3rem',
        }}
      >
        <Flex align="center" justify="space-between">
          <Flex gap="50px" align="center">
            <NavLink to="/">
              <Image src={tiddix} alt="tiddix logo" maxW="120px" />
            </NavLink>
            <HStack
              display={{ base: 'none', lg: 'flex' }}
              spacing={{ base: '15px', md: '30px', xl: '40px' }}
              fontSize={{ md: '1.4rem', lg: '1.6rem' }}
              color="#99A1AA"
              zIndex={5}
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

              <Menu isLazy>
                <MenuButton
                  px={0}
                  py={0}
                  transition="all 0.2s"
                  borderRadius="md"
                  whiteSpace="nowrap"
                  _hover={{
                    bgGradient: 'linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)',
                    bgClip: 'text',
                  }}
                >
                  About Us{' '}
                  <ChevronDownIcon
                    sx={{
                      path: { fill: '#99A1AA' },
                    }}
                  />
                </MenuButton>
                <MenuList
                  overflow="hidden"
                  boxShadow="base"
                  padding="0px"
                  minW="20rem"
                  borderRadius="2rem"
                  border="1px solid grey"
                >
                  <MenuItem
                    as="li"
                    gap="5px"
                    padding="1.2rem"
                    bg="blackShade.2"
                    _hover={{
                      bg: 'blackShade.1',
                    }}
                    transition="0.2s ease-in-out"
                  >
                    <NavLink to="/corporate-profile">Corporate Profile</NavLink>
                  </MenuItem>
                  <MenuItem
                    as="a"
                    href="/teams"
                    gap="5px"
                    padding="1.2rem"
                    bg="blackShade.2"
                    _hover={{
                      bg: 'blackShade.1',
                    }}
                  >
                    Our Team
                  </MenuItem>
                  <MenuItem
                    as="a"
                    href="/code-of-conduct"
                    gap="5px"
                    padding="1.2rem"
                    bg="blackShade.2"
                    _hover={{
                      bg: 'blackShade.1',
                    }}
                    // fontSize={{ base: '1.0rem', sm: '1.4rem', xl: '1.6rem' }}
                  >
                    Code of Conduct
                  </MenuItem>
                </MenuList>
              </Menu>
              <NavLink to="/investors">
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

          <Box
            px="2rem"
            maxW="30.6rem"
            zIndex={5}
            display={{ base: 'none', sm: 'block' }}
          >
            <Input
              pos="relative"
              placeholder="Search projects and creatives"
              px="2rem"
              borderRadius="10rem"
              border="1px solid #99A1AA"
              w={{ base: '30.6rem', lg: '100%', xl: '26.9rem' }}
              h="5.6rem"
              _placeholder={{
                fontSize: '1.4rem',
                color: '#99A1AA',
                fontWeight: '700',
              }}
            />
          </Box>

          <Box display={{ base: 'none', lg: 'flex' }} zIndex={5}>
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
