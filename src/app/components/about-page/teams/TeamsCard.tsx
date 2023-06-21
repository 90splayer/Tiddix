import { Box, Stack, Text, Heading, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = {
  image: any;
  name: string;
  title: string;
};

const TeamsCard: FC<Props> = ({ image, name, title }) => {
  return (
    <Stack
      alignItems="center"
      bg="#232629"
      borderRadius="30px"
      // maxW="29.6rem"
      w="100%"
      h="41.4rem"
      pt="5.8rem"
      px="2rem"
    >
      <Box pb="3.7rem" >
        <Image src={image} alt="team member" w="15.7rem" h="15.7rem" borderRadius="50rem" />
      </Box>
      <Heading as="h2" textAlign="center" mb="1.6rem" color="#fff">
        {name}
      </Heading>
      <Text color="#99A1AA" size="body2" textAlign="center">
        {title}
      </Text>
    </Stack>
  );
};

export default TeamsCard;
