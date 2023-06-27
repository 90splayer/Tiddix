import { Box, Container, Flex, VStack, Text, Heading, HStack, Image, Input, Stack, Button, Icon } from '@chakra-ui/react'
import React, { FC } from 'react'
import ContactImg from 'app/assets/images/contact.png'
import { AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'

const ContactUs: FC = () => {
  return (
    <Box>
        <Container maxW="144rem" pt="8.06rem" pb="12.19rem">
            <Flex flexDir="column" fontFamily="bold" align="center" w="full">
                <VStack mb="8.13rem">
                    <Text
                    mb="2.94rem"
                    size="body2"
                    bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
                    bgClip="text"
                    fontSize="2rem"
                    >
                        Contact Us
                    </Text>
                    <Heading size="display2" pb="1.81rem">
                        Got questions about any of our services?
                    </Heading>
                    <Text size="body1" px="22.20rem" textAlign="center">
                        Contact us now through the channels below; email, by phone, or the contact form.
                        <br/>Let us assist you with any of your queries. We will get back to you promptly.
                    </Text>
                </VStack>
                <HStack spacing="40.75px" align="flex-start">
                    <VStack spacing="20px" align="flex-start">
                        <Box minH="24rem" minW="30rem" mb="2.25rem">
                            <Image src={ContactImg} alt="contact us"/>
                        </Box>
                        <Text size="body2" maxW="24.5rem" color="#fff">
                            Pippins, Cherry Drive, Forty Green, Beaconsfield,
                            Buckinghamshire HP9 1XP
                        </Text>
                        <HStack>
                            <Icon as={BiPhoneCall} color="#fff"/>
                            <Text as="span" size="body3" color="#fff"
                            >
                                +234 812 345 6789
                            </Text>
                        </HStack>
                        <HStack>
                            <Icon as={AiOutlineMail} color="#fff" />
                            <Text as="span" size="body3" color="#fff"
                            >
                                contact@tiddix.com
                            </Text>
                        </HStack>
                    </VStack>
                    <Stack spacing="20px" px="5rem" w="full">
                        <Heading size="h1" pb="3.94rem">
                            Get in touch with us
                        </Heading>
                            <Input type="text" size="lg" placeholder="Full Name"/>
                            <Input type="text" size="lg" placeholder="Email Address"/>
                            <Input type="text" size="lg" placeholder="Company Name"/>
                            <Input type="text" size="lg" placeholder="Country"/>
                            <Input type="text" size="lg" placeholder="How can we help you?"/>
                    </Stack>
            
                </HStack>
                <Button
                    variant="multicolor"
                    mt="2.75rem"
                    size="sm"
                    type="submit"
                    ml="60rem"
                >
                    Send Message
                </Button>
            </Flex>
        </Container>
    </Box>
  )
}

export default ContactUs