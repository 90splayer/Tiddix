import { Box, Container, Flex, VStack, Text, Heading } from '@chakra-ui/react'
import React, { FC } from 'react'

const ContactUs: FC = () => {
  return (
    <Box>
        <Container maxW="144rem" pt="8.06rem" pb="12.19rem" px="11rem">
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
                    <Heading size="display2" textAlign="center">
                        Got questions about any of our services?
                    </Heading>
                </VStack>
            </Flex>
        </Container>
    </Box>
  )
}

export default ContactUs