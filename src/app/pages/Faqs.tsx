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
                      How can I create an account as an Investor?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4} fontSize="1.6rem">
                  click the sign up button on the navbar and fill in the form to
                  submit
                  <br />
                  After your signup is successful verify the link from your
                  email then login
                  <br />
                  To be an investor you can view and invest in any project in
                  categories from the explore page
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderTop="1px solid #485155">
                <Heading as="h2">
                  <AccordionButton py="25px" fontSize="2rem">
                    <Box as="span" flex="1" textAlign="left" fontWeight="700">
                      What is the minimum amount to invest in a project?
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
                      At what point should I expect returns on investment?
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
                      Can I quit being an investor for a particular project?
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
                      Can I change to another funding scheme?
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
                      How do I know the details of a project I am investing in?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4} fontSize="1.6rem">
                  click the particular project of choice from the explore page
                  to view details and get more information about the project
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem borderTop="1px solid #485155">
                <Heading as="h2">
                  <AccordionButton py="25px" fontSize="2rem">
                    <Box as="span" flex="1" textAlign="left" fontWeight="700">
                      How can I ascertain a creative's value for a proper
                      investment?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4} fontSize="1.6rem">
                  You can access the creative’s project on the explore page,
                  click the particular project of choice to view details and get
                  more information about the project
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderTop="1px solid #485155">
                <Heading as="h2">
                  <AccordionButton py="25px" fontSize="2rem">
                    <Box as="span" flex="1" textAlign="left" fontWeight="700">
                      How do I sign up as a creative?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4} fontSize="1.6rem">
                  click the sign up button on the navbar and fill in the form to
                  submit
                  <br />
                  After your signup is successful verify the link from your
                  email then login
                  <br />
                  To be a creative you have access to create project, set budget
                  and upload successfully
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderTop="1px solid #485155" borderBottom="0px">
                <Heading as="h2">
                  <AccordionButton py="25px" fontSize="2rem">
                    <Box as="span" flex="1" textAlign="left" fontWeight="700">
                      What kind of project can I upload?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4} fontSize="1.6rem">
                  Any project in the following Category: Fashion, Music, Film,
                  Art, and Photography.
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
