import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Text,
  Flex,
  Image,
  Progress,
  Heading,
  HStack,
} from '@chakra-ui/react';
import { debt } from 'app/assets/svgs/dashboard/dashboard';
import { verify } from 'app/assets/svgs/home';
import React, { FC } from 'react';

type Props = {
  full_name: string;
  investment_type: string;
  avatar: string;
  progress: any;
  img: string;
  category: string;
  // icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  amount: string;
};
const ProjectCard: FC<Props> = ({
  avatar,
  img,
  investment_type,
  category,
  title,
  full_name,
  progress,
  amount,
}) => {
  return (
    <Card maxW="30rem" bgColor="#232629" borderRadius="30px" p="16px 14px 37px">
      <CardHeader p="0">
        <Flex gap="1rem" alignItems="center">
          <Avatar boxSize="25px" name={full_name} src={avatar} />

          <Flex gap="3px" align="center">
            <Text fontSize="1.6rem" color="#fff">
              {full_name}
            </Text>
            <Box w="16.58px" h="16.58px">
              {verify}
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <Box borderRadius="20px" my="20px" pos="relative">
        <Image
          h="268px"
          borderRadius="20px"
          objectFit="cover"
          src={img}
          alt={title}
        />
        <Box pos="absolute" bottom={15} left={15}>
          <Text fontWeight={700} fontSize="2rem" color="#fff">
            {title}
          </Text>
          <Text color="#99A1AA" fontSize="1.4rem">
            {category}
          </Text>
        </Box>
      </Box>
      <Flex justify="space-between" align="center" color="#fff">
        <Box>
          <HStack mb="15px">
            <Box>{debt}</Box>
            <Heading fontSize="1.6rem">{investment_type}</Heading>
          </HStack>

          <Heading fontSize="2.4rem">{amount}</Heading>
        </Box>
        <Box>
          <Text mb="15px" fontSize="1.6rem" textAlign="right" color="#99A1AA">
            {progress}%
          </Text>
          <Progress
            value={progress}
            size="md"
            colorScheme="transparent"
            borderRadius="20px"
            background="linear-gradient(transparent, transparent) padding-box, linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%) border-box"
            w="8.8rem"
          />
        </Box>
      </Flex>
    </Card>
  );
};

export default ProjectCard;
