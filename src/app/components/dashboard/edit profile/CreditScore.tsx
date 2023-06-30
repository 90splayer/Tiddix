import { Box, Button, Flex, Stack, VStack, Text,Input, Heading, FormControl, FormLabel } from '@chakra-ui/react'
import { CustomInput } from 'app/components/common/CustomInput';
import { useRef, useState } from 'react';
import React, { FC } from 'react'

const CreditScore: FC = () => {
    const steps = [
        'General',
        'Edit Profile',
        'Password',
        'Social media account',
        'Email Notification',
        'Credit Score Check',
        'Delete Account',
      ];

    // const [input, setInput] = useState('');
    

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     event.target.reset();
        
    // };
  return (
    <Box>
        <VStack>
            <Text size="body2" textAlign="justify" mb="2rem" lineHeight="2.5rem">
                We require this information for legal and credit checks purposes.
                <br/>
                Make sure all the info you provide is legally correct,
                because it can affect your ability to take out new forms of credit.
            </Text>
        </VStack>
        <Stack spacing="1.9rem">
            <FormControl isRequired>
                <FormLabel fontSize="2xl">Full Name</FormLabel>
                <Box w="100%" mb="2rem">
                    <CustomInput
                        type="text"
                        size="lg"
                        placeholder='Full Name'
                        name="fullname"
                />
                </Box>
                <FormLabel fontSize="2xl">Residential Address</FormLabel>
                <Box w="100%" mb="2rem">
                    <CustomInput
                        type="text"
                        size="lg"
                        placeholder='Residential Address'
                        name="address"
                    />
                </Box>
                <FormLabel fontSize="2xl">Date of Birth</FormLabel>
                <Box w="100%" mb="2rem">
                    <CustomInput
                        type="date"
                        size="lg"
                        name="date of birth"
                />
                </Box>

                <Flex flexDir="column" align="flex-end" mt="6px">
                    <Button
                        type="submit"
                        fontSize="1.6rem"
                        variant="multicolor"
                        size="md"
                    >
                        Submit
                    </Button>
                </Flex>

            </FormControl>
        
       
       

        
      </Stack>
    </Box>
  )
}

export default CreditScore