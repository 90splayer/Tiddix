import { FC } from 'react';
import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';
import { MdOutlineFacebook } from 'react-icons/md';
import { TiArrowRight } from 'react-icons/ti';
import tiddix from '../assets/images/tiddix.png';

export const Footer: FC = () => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Container maxW="1440px" p="0 7.2rem 7.1rem">
        <Stack
          spacing={{ base: '50px', md: '110px' }}
          p="14.7rem 5.1rem 11.5rem"
          bgColor="#232629"
          borderRadius="4rem"
        >
          <Flex
            justify={{ base: 'flex-start', lg: 'space-between' }}
            flexWrap="wrap"
          >
            <Stack
              spacing="62px"
              mb={{ base: '3rem', lg: '0' }}
              w={{ base: '100%', lg: '40%' }}
            >
              <NavLink to="/">
                <Image src={tiddix} alt="tiddix logo" maxW="120px" />
              </NavLink>

              <Box>
                <Text color="#fff" mb="2rem">
                  Subscribe To Newsletter
                </Text>

                <InputGroup
                  borderRadius="10rem"
                  border="1px solid #99A1AA"
                  maxW="30.6rem"
                  h="5.6rem"
                >
                  <Input
                    pos="relative"
                    placeholder="Email Address"
                    px="2rem"
                    borderRadius="10rem"
                    border="1px solid #99A1AA"
                    maxW="30.6rem"
                    // h="5.6rem"
                    _placeholder={{
                      fontSize: '1.6rem',
                      color: '#99A1AA',
                      fontWeight: '700',
                    }}
                  />
                  <InputRightElement
                    top="10px"
                    right="10px"
                    pos="absolute"
                    bgGradient="linear(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%)"
                    borderRadius="50px"
                    maxW="3.6rem"
                    maxH="3.6rem"
                    fontSize="2.4rem"
                    children={<TiArrowRight color="#000" />}
                  />
                </InputGroup>
              </Box>
            </Stack>
            <Flex
              flexWrap="wrap"
              justify="space-between"
              w={{ base: '100%', lg: '60%' }}
            >
              <Stack spacing="4rem">
                <Text fontWeight={700} color="#fff">
                  Quick links
                </Text>
                <Link to="/">
                  <Text color="#99A1AA">Home</Text>
                </Link>
                <Link to="/explore">
                  <Text color="#99A1AA">Explore</Text>
                </Link>
                <Link to="/investors">
                  <Text color="#99A1AA">Investors</Text>
                </Link>
              </Stack>
              <Stack spacing="4rem">
                <Text fontWeight={700} color="#fff">
                  Company
                </Text>
                <Link to="/corporate-profile">
                  <Text color="#99A1AA">About Us</Text>
                </Link>
                <Link to="/teams">
                  <Text color="#99A1AA">The Team</Text>
                </Link>
                <Link to="/">
                  <Text color="#99A1AA">Contact Us</Text>
                </Link>
              </Stack>
              <Stack spacing="4rem">
                <Text fontWeight={700} color="#fff">
                  Resources
                </Text>
                <Link to="/faqs">
                  <Text color="#99A1AA">FAQs</Text>
                </Link>
                <Text color="#99A1AA">Blog</Text>
              </Stack>
              <Stack spacing="4rem">
                <Text fontWeight={700} color="#fff">
                  Office
                </Text>
                <Text color="#99A1AA" maxW="235px" lineHeight="32px">
                  Pippins, Cherry Drive, Forty Green, Beaconsfield,
                  Buckinghamshire HP9 1XP
                </Text>
                <HStack spacing="16px" fontSize="24px" color="#99A1AA">
                  <Link
                    to="https://web.facebook.com/profile.php?id=100093786846340"
                    target="_blank"
                  >
                    <Icon
                      as={MdOutlineFacebook}
                      transition="0.5s ease"
                      _hover={{ cursor: 'pointer', transform: 'scale(1.2)' }}
                    />
                  </Link>
                  <Link to="#" target="_blank">
                    <Icon
                      as={IoLogoTwitter}
                      transition="0.5s ease"
                      _hover={{ cursor: 'pointer', transform: 'scale(1.2)' }}
                    />
                  </Link>
                  <Link
                    to="https://www.instagram.com/tiddixcreative/"
                    target="_blank"
                  >
                    <Icon
                      as={IoLogoInstagram}
                      transition="0.5s ease"
                      _hover={{ cursor: 'pointer', transform: 'scale(1.2)' }}
                    />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/tiddix-creatives-429a77258/"
                    target="_blank"
                  >
                    <Icon
                      as={IoLogoLinkedin}
                      transition="0.5s ease"
                      _hover={{ cursor: 'pointer', transform: 'scale(1.2)' }}
                    />
                  </Link>
                </HStack>
              </Stack>
            </Flex>
          </Flex>
          <Flex
            justify="space-between"
            // flexWrap={{ base: "wrap", md: "nowrap" }}
            flexDir={{ base: 'column', md: 'row' }}
          >
            <Text>Tiddix © 2023, All right reserved.</Text>

            <Flex
              flexDir={{ base: 'column', sm: 'row' }}
              align={{ base: 'flex-start', sm: 'center' }}
              gap={{ base: '15px', sm: '25px' }}
              color={colorMode === 'light' ? '#94A3B8' : 'darkGray'}
              fontSize="14px"
              // visibility="hidden"
              textAlign="center"
            >
              <Text>Legal Terms of Service</Text>
              <Link to="/privacy-policy">
                <Text _hover={{ textDecoration: 'underline' }}>
                  Terms & Conditions
                </Text>
              </Link>
              <Text>Privacy Policy</Text>
            </Flex>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};
