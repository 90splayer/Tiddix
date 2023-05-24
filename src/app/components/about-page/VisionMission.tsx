import { Box, Container, HStack, Heading, Image, VStack, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import VisionImg from '../../assets/images/about/vision.png'

const VisionMission: FC = () => {
  return (
    <Box>
        <Container maxW="144rem" pr="12.2rem">
            <HStack
             gap="13.8rem"
            >
                <Box
                w="89.9rem"
                >
                    <Image src={VisionImg}/>
                </Box>
                <VStack>
                    <Box
                    maxW="46.2rem"
                    >
                        <Heading 
                         pt="25.2rem"
                         pb="3.7rem"
                         size="h1"
                         color="#fff"
                        >
                            The Vision
                        </Heading>
                        <Text
                        size="body1"
                        pb="4.1rem"
                        color="#99A1AA"
                        >
                            A thriving metric-based creative economy backed 
                            by direct investment in creatives and their projects.
                        </Text>
                    </Box>
                    <Box
                    maxW="46.2rem"
                    >
                        <Heading
                        pb="3.7rem"
                        size="h1"
                        color="#fff"
                        >
                            The Mission
                        </Heading>
                        <Text
                        size="body1"
                        pb="35.1rem"
                        color="#99A1AA"
                        >
                            Building a platform to help creatives realise their dreams 
                            by connecting them with supporters, investors and funding 
                        </Text>
                    </Box>
                </VStack>
            </HStack>
        </Container>
    </Box>
  )
}

export default VisionMission