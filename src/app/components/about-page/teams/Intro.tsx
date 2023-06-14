import { Box, Container, VStack, Heading, Text, Grid, GridItem } from '@chakra-ui/react'
import React, { FC } from 'react'
import TeamsCard from './TeamsCard'
import { TeamsData } from 'app/components/data/about/TeamsData'

const Teams: FC = () => {
  return (
    <Box>
        <Container
          maxW="144rem"
          pt="12.9rem"
          px="2rem"
          pb="18.7rem"
        >
          <VStack>
            <Text
              size="body2"
              textAlign="center"
              pb="4.7rem"
              bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
              bgClip="text"
            >
              TEAM
            </Text>

            <Heading
              size="display2"
              textAlign="center"
              pb="4.5rem"
              color="#fff"
            >
              Meet our team
            </Heading>

            <Text
              size="body1"
              textAlign="center"
              pb="15.1rem"
              maxW="72.9rem"
              color="#99A1AA"
            >
              We invite investors to the creative space where creator 
              metrics (views, engagements, followers, rankings etc) 
              can be used to properly determine a creator’s value 
              and prospects for investments.
            </Text>

            <Box>
              
                <Grid
                  templateColumns="repeat(4, 1fr)"
                  pb="3.6rem"
                  gap="3.7rem"
                >
                  {TeamsData.map((item) => (
                  <GridItem w="100%"
                      key={item.id}
                    >

                      <TeamsCard image={item.image} name={item.full_name} title={item.job_title} />

                    </GridItem>
                  ))}
                </Grid>
              
            </Box>
          </VStack>
        </Container>
    </Box>
  )
}

export default Teams