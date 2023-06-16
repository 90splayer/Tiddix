import { Box, Container, Heading, VStack, Text } from '@chakra-ui/react'
import React from 'react'

const CoC = () => {
  return (
    <Box>
        <Container
            maxW="144rem"
            p="12.2rem"
        > 
        <VStack>
          <Heading
            size="display2"
            textAlign="center"
            maxW="68.4rem"
            pb="3.5rem"
          >
            Code Of Conduct
          </Heading>
          <Text size="body1" maxW="72.9rem" pb="10.7rem">
            Tiddix is a community of creatives, supporters, fans and investors. 
            We are here to ensure that your dreams are supported and given a fair 
            chance to come true.<br/><br/>
            Our community promotes equity and inclusion and we do our best to 
            ensure that we, and consequently our users are not aiding or 
            perpetuating harm to any segment of the community.
          </Text>
          <Heading
            size="h2"
            
            pb="2rem"
          >
          Projects
          </Heading>
          <Text size="body1" maxW="72.9rem" pb="5rem">
            Creators in particular are expected to do the research 
            required to ensure their projects and presence on the site are 
            not perpetuating harm to any segment of the community. 
            (Especially if you're telling a story that is not your own.) 
            We may decline to host a project or block a user's profile if
            we believe their presence may cause harm.
          </Text>
          <Heading
            pb="2rem"
            size="h2"
            
          >
          Creatives 
          </Heading>
          <Text size="body1" maxW="72.9rem" pb="5rem">
            Creatives are expected to act in a ethical manner at all times.
            You are expected to provide accurate information and description of your project and your profile. 
            You are expected to comply with the terms and conditions of the investment relationship
          </Text>
          <Heading
            pb="2rem"
            size="h2"
            textAlign="left"
          >
          Investors
          </Heading>
          <Text size="body1" maxW="72.9rem" pb="5rem">
            Investors are expected to do their research and due diligence 
            on each creative and project before they choose to support them. 
            You are also expected to comply with the terms and conditions of the investment relationship.
          </Text>
          <Heading
            pb="2rem"
            size="h2"
            
          >
          Supporters 
          </Heading>
          <Text size="body1" maxW="72.9rem">
            There is no us without you, and there is no stars without you! 
            While we are grateful for your support, we would implore you to 
            not use obscene, hateful, or harassing language. This community 
            is a safe space for everyone regardless of any status, race, 
            religious creed, colour, national origin, ancestry, physical disability,
            mental disability, medical condition, genetic information, marital status, 
            sex, gender, gender identity, gender expression, age and sexual orientation. 
            Be cool and provide only constructive feedback, to help the creative improve their projects.
          </Text>
          </VStack>
        </Container>
    </Box>
  )
}

export default CoC