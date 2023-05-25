import { Box, Heading, Stack, Text, Container, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = {
  title: string;
  image: any;
  desc: string;
};

const AudienceCard: FC<Props> = ({ title, image, desc }) => {
  return (
    <Stack spacing="3.1rem" bg="#232629" p="5rem 3rem" borderRadius="30px">
      <Heading color="#fff">{title}</Heading>
      <Box>
        <Image src={image} alt="creative/investor" />
      </Box>
      <Text size="body1" maxW="46.2rem">
        {desc}
      </Text>
    </Stack>
  );
};

export default AudienceCard;
