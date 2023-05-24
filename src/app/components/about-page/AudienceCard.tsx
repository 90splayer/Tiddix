import { Box, Heading, VStack, Text, Container } from '@chakra-ui/react'
import React, { FC } from 'react'

type Props = {
   title: string;
   image: any;
   desc: string;
};

const AudienceCard: FC<Props> = ({title, image, desc}) => {
  return (
        <VStack
            display="flex"
            flexDir="column"
            alignItems="flex-start"
            bg="#232629"
            w="52.2rem"
            h="36.6rem" 
            p="5rem 3rem"
            borderRadius="30px"
            >
                <Heading
                color="#fff"
                maxW="12.5rem"
                >
                    {title}
                </Heading>
                <Box
                pb="3.1rem"
                w="22.2rem"
                h="6.9rem"
                >
                    {image}
                </Box>
                <Text
                size="body1"
                //  maxW="46.2rem"
                color="#99A1AA"
                >
                    {desc}
                </Text>
        </VStack>
  )
}

export default AudienceCard