import { FC, useState } from 'react';
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
  // useColorMode,
  Heading,
  Button,
} from '@chakra-ui/react';
// import { FaSun, FaMoon } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
// import { MdOutlineClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Header: FC = () => {
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
          sm: '4rem 5rem',
          md: '5rem 5.2rem',
          lg: '5rem 7.2rem',
        }}
      >
        <Flex align="center" justify="space-between">
          <HStack
            spacing={{ base: '15px', md: '20px', lg: '48px' }}
            fontSize={{ md: '1.4rem', lg: '1.6rem' }}
            color="#99A1AA"
          >
            <NavLink to="/">
              <Heading
                pr="10px"
                transition="0.2s ease-in-out"
                fontSize="3.6rem"
                bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
                bgClip="text"
                fontWeight="700"
              >
                tiddix
              </Heading>
            </NavLink>
            <NavLink to="/explore">
              <Text
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

          <HStack
            spacing="26px"
            display={{ base: 'none', md: 'flex', lg: 'flex' }}
          >
            <NavLink to="/signup">
              <Button variant="borderless" size="lg">
                Sign Up
              </Button>
            </NavLink>
            <NavLink to="/login">
              <Button variant="multiradial" size="lg">
                Login
              </Button>
            </NavLink>
          </HStack>

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

export default Header;
