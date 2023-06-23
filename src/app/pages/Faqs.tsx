import React, { FC } from 'react';
import {
  Flex,
  Heading,
  Container,
  Box,
  VStack,
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';
import Header from 'app/layout/Header';
import { Footer } from 'app/layout/Footer';

const Faqs: FC = () => {
  return (
    <Box>
      <Header />
      <Container
        id="faqs"
        p={{
          base: '4.5rem 2rem 7.7rem 2rem',
          sm: '3.5rem 5rem 8.7rem 5rem',
          md: '7.3rem 10.3rem 16rem 10.3rem',
          lg: '10.3rem 17.2rem 18rem 17.5rem',
        }}
        maxW="144rem"
      >
        <Flex flexDir="column" fontFamily="bold" align="center" w="full">
          <VStack mb="15.7rem">
            <Text
              mb="5rem"
              size="body2"
              bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
              bgClip="text"
              fontSize="2.6rem"
            >
              FAQs
            </Text>

            <Heading size="display2" textAlign="center" maxW="45.6rem">
              Frequently Asked Questions
            </Heading>
          </VStack>

          <Box w={{ sm: '62rem', md: '100rem', lg: '109rem' }}>
            <Accordion defaultIndex={[0]} w="100%">
              <AccordionItem borderTop={0}>
                <Heading as="h2">
                  <AccordionButton py="25px" fontSize="2rem">
                    <Box as="span" flex="1" textAlign="left" fontWeight="700">
                      How do i login to my account?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4} fontSize="1.6rem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderTop="1px solid #485155">
                <Heading as="h2">
                  <AccordionButton py="25px" fontSize="2rem">
                    <Box as="span" flex="1" textAlign="left" fontWeight="700">
                      Why do i have to enter my phone number?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4} fontSize="1.6rem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderTop="1px solid #485155">
                <Heading as="h2">
                  <AccordionButton py="25px" fontSize="2rem">
                    <Box as="span" flex="1" textAlign="left" fontWeight="700">
                      I cant remeber my password what do i do next?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4} fontSize="1.6rem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderTop="1px solid #485155">
                <Heading as="h2">
                  <AccordionButton py="25px" fontSize="2rem">
                    <Box as="span" flex="1" textAlign="left" fontWeight="700">
                      Why do i have to enter my phone number?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4} fontSize="1.6rem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderTop="1px solid #485155">
                <Heading as="h2">
                  <AccordionButton py="25px" fontSize="2rem">
                    <Box as="span" flex="1" textAlign="left" fontWeight="700">
                      I cant remember my password what do i do next?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4} fontSize="1.6rem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderTop="1px solid #485155">
                <Heading as="h2">
                  <AccordionButton py="25px" fontSize="2rem">
                    <Box as="span" flex="1" textAlign="left" fontWeight="700">
                      I cant remember my password what do i do next?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4} fontSize="1.6rem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderTop="1px solid #485155" borderBottom="0px">
                <Heading as="h2">
                  <AccordionButton py="25px" fontSize="2rem">
                    <Box as="span" flex="1" textAlign="left" fontWeight="700">
                      I cant remember my password what do i do next?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4} fontSize="1.6rem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};

export default Faqs;
