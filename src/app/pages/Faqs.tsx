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
  UnorderedList,
  ListItem,
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
          <VStack mb="12.7rem">
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
                  <UnorderedList>
                    <ListItem>
                      Click the sign up button on the navigation bar and fill in
                      the form to submit.
                    </ListItem>
                    <ListItem>
                      After your signup is successful verify the link from your
                      email then login
                    </ListItem>
                    <ListItem>
                      To be an investor you can view and invest in any project
                      in categories from the explore page
                    </ListItem>
                  </UnorderedList>
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
                  <UnorderedList>
                    <ListItem>
                      You can start making dreams come true with as little as
                      £200 and with as much as you wish to invest in any
                      creatives dreams/projects
                    </ListItem>
                  </UnorderedList>
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
                  <UnorderedList>
                    <ListItem>
                      The timing of your return on investments is set without
                      the construct of creating a project.
                    </ListItem>
                    <ListItem>
                      Before you invest in any project, please review to make
                      sure that you are happy with the returns timeline proposed
                      by the creative.
                    </ListItem>
                  </UnorderedList>
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
                  <UnorderedList>
                    <ListItem>
                      Once you have signed up to invest in a project and the
                      funds have been exchanged, you will have to remain on the
                      project till the end of the project.
                    </ListItem>
                    <ListItem>
                      You can invest in multiple creatives and you do not have
                      to work with any creatives more than once if you do not
                      want to.
                    </ListItem>
                  </UnorderedList>
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
                  <UnorderedList>
                    <ListItem>
                      Tiddix offers three types of funding schemes - Debt
                      (similar to a loan), Equity (shared risk shared reward)
                      and Angel (supporting dreams without requiring any returns
                      back).
                    </ListItem>
                    <ListItem>
                      You can choose from any of these and fund projects with a
                      mix of these funding schemes.
                    </ListItem>
                  </UnorderedList>
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
                  <UnorderedList>
                    <ListItem>
                      Investors are encouraged to read about each project
                      carefully before investing.
                    </ListItem>
                    <ListItem>
                      Click on the project you are interested in from the
                      explore page to view details and get more information
                      about the project
                    </ListItem>
                  </UnorderedList>
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
                  <UnorderedList>
                    <ListItem>
                      Creatives provide additional documents and project details
                      to support their request for funding.
                    </ListItem>
                    <ListItem>
                      You should read these documents and do your analysis to
                      determine if the creative is asking for an appropriate
                      amount of investment or not.
                    </ListItem>
                    <ListItem>
                      You can access the creative’s project on the explore page.
                    </ListItem>
                    <ListItem>
                      Click on the project you are interested in from the
                      explore page to view details and get more information
                      about the project
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderTop="1px solid #485155">
                <Heading as="h2">
                  <AccordionButton py="25px" fontSize="2rem">
                    <Box as="span" flex="1" textAlign="left" fontWeight="700">
                      How do I monitor my investments?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4} fontSize="1.6rem">
                  <UnorderedList>
                    <ListItem>
                      Creatives are required to send investors status updates
                      and periodic reports, to ensure that the project is on
                      track.
                    </ListItem>
                  </UnorderedList>
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
                  <UnorderedList>
                    <ListItem>
                      Click the sign up button on the navigation bar and fill in
                      the form to submit.
                    </ListItem>
                    <ListItem>
                      Once your profile has been set up, you can view project
                      across various categories from the explore page.
                    </ListItem>
                    <ListItem>
                      As a creative you have access to create project, set
                      budget, fundraise and promote your project.
                    </ListItem>
                  </UnorderedList>
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
                  <UnorderedList>
                    <ListItem>
                      You can upload any project you need funding for, from
                      music to art to vlogging, design and film.
                    </ListItem>
                    <ListItem>
                      You can look through the different project categories on
                      the explore page.
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderTop="1px solid #485155" borderBottom="0px">
                <Heading as="h2">
                  <AccordionButton py="25px" fontSize="2rem">
                    <Box as="span" flex="1" textAlign="left" fontWeight="700">
                      How do I upload my project?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4} fontSize="1.6rem">
                  <UnorderedList>
                    <ListItem>
                      You sign up, login, click on the create button on the
                      navigation bar the fill the multistep form to create and
                      upload a project
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderTop="1px solid #485155" borderBottom="0px">
                <Heading as="h2">
                  <AccordionButton py="25px" fontSize="2rem">
                    <Box as="span" flex="1" textAlign="left" fontWeight="700">
                      Can I upload more than one project at a time?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4} fontSize="1.6rem">
                  <UnorderedList>
                    <ListItem>Yes you can create multiple projects</ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderTop="1px solid #485155" borderBottom="0px">
                <Heading as="h2">
                  <AccordionButton py="25px" fontSize="2rem">
                    <Box as="span" flex="1" textAlign="left" fontWeight="700">
                      How do I (un)subscribe to Tiddix newsletters?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4} fontSize="1.6rem">
                  <UnorderedList>
                    <ListItem>
                      You automatically subscribed to our newsletters when you
                      signed up on our platform.
                    </ListItem>
                    <ListItem>
                      You can unsubscribe from our newsletters through the link
                      provided in your mail.{' '}
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderTop="1px solid #485155" borderBottom="0px">
                <Heading as="h2">
                  <AccordionButton py="25px" fontSize="2rem">
                    <Box as="span" flex="1" textAlign="left" fontWeight="700">
                      I have forgotten my password. What should I do?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4} fontSize="1.6rem">
                  <UnorderedList>
                    <ListItem>
                      Go to the Login page then click 'Forgotten password', and
                      you will be sent an email to verify your account
                    </ListItem>
                  </UnorderedList>
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
