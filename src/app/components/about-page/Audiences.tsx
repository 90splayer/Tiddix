import { Box, Container, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React, { FC } from 'react'
import AudienceCard from './AudienceCard';
import AudienceImg from '../../assets/images/about/audience.png'


const Audiences: FC = () => {
  return (
    <Box>
        <Container maxW="144rem" p="10.2rem 21.2rem 24.5rem 21.2rem" >
            <VStack
            >
                <Heading
                size="display2"
                textAlign="center"
                color="#fff"
                pb="5.1rem"
                >
                    Our Audiences
                </Heading>

                <Text
                 size="body1"
                 textAlign="center"
                 color="#99A1AA"
                 pb="13.9rem"
                 maxW="72.9rem"
                >
                    We invite investors to the creative space where creator 
                    metrics (views, engagements, followers, rankings etc) 
                    can be used to properly determine a creator’s value and prospects for investments.  
                </Text>
                <HStack
                 gap="3.1rem"
                >
                    <AudienceCard
                        title = {'Creator'}
                        image= {AudienceImg}
                        desc= {'We invite investors to the creative space where creator metrics (views, engagements, followers, rankings etc) can be used to properly determine a creator’s value and prospects for investments.'}
                    />

                    <AudienceCard
                        title = {'Investor'}
                        image= {AudienceImg}
                        desc= {'We invite investors to the creative space where creator metrics (views, engagements, followers, rankings etc) can be used to properly determine a creator’s value and prospects for investments.'}
                    />
                </HStack>
            </VStack>
        </Container>
    </Box>
  );
};

export default Audiences