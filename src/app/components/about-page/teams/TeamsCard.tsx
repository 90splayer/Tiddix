import { Box, Stack, Text, Image } from '@chakra-ui/react'
import React, { FC } from 'react'

type Props ={
    image: any;
    name: string;
    title: string;
}

const TeamsCard: FC<Props> = ({ image, name, title}) => {
  return (
    <Stack alignItems="center" bg="#232629" borderRadius="30px" spacing="3.7rem" w="29.6rem" h="41.4rem">
      <Box pt="5.8rem">
        <Image src={image} alt="team member" w="15.7rem"/>
      </Box>
      <Text size="Header2" textAlign="center" color="#fff">
        {name}
      </Text>
      <Text color="#99A1AA" size="body2" textAlign="center">
        {title}
      </Text>

    </Stack>
  )
}

export default TeamsCard