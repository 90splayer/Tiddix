import React, { FC } from 'react';

import { Box, Container, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import Header from 'app/layout/Header';
import { Footer } from 'app/layout/Footer';

const Nopage: FC = () => {
  // const { colorMode } = useColorMode();
  return (
    <Box position="relative">
      <Header />
      <Container
        maxW="1440px"
        px={{ base: '20px', sm: '50px', md: '182px' }}
        pt={{ base: '61px', md: '91px' }}
        pb={{ base: '32px', md: '57px' }}
      >
        <Flex
          flexDir="column"
          justify="center"
          align="center"
          fontFamily="bold"
        >
          <Text
            fontSize={{ base: '24px', md: '32px' }}
            fontWeight="600"
            color="white"
          >
            Oops! Page Not Found😔
          </Text>
          <Text
            py="15px"
            textAlign="center"
            fontSize={{ base: '16px', md: '20px' }}
          >
            Sorry, the requested page is not available at the moment...
          </Text>
          <Link to="/">
            <HStack
              bgGradient="linear(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%)"
              spacing="8px"
              borderRadius="8px"
              transition="0.5s ease"
              boxShadow="0px 4px 50px rgba(0, 0, 0, 0.15)"
              _hover={{
                opacity: 0.8,
              }}
              padding="10px 20px"
              color="white"
            >
              <Icon as={FaHome} boxSize={5} />
              <Text color="#fff">Back to Home</Text>
            </HStack>
          </Link>
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};

export default Nopage;
