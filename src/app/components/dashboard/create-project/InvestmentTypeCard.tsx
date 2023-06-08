import { Stack, Text, ButtonProps, Flex, Icon, Box } from '@chakra-ui/react';
import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  desc: string;
  paintBorder?: boolean;
} & ButtonProps;

const InvestTypeCard: FC<Props> = ({
  title,
  icon,
  desc,
  paintBorder,
  ...rest
}) => {
  return (
    <Styling>
      <Box>
        <Flex
          bg="#232629"
          p="3rem 4rem"
          h="164px"
          gap="2rem"
          borderRadius="30px"
          cursor="pointer"
        >
          <Flex
            bg="#000"
            align="center"
            justify="center"
            borderRadius="100%"
            w="72px"
            h="72px"
          >
            <Icon as={icon} fontSize="3.4rem" />
          </Flex>
          <Stack spacing="1rem">
            <Text fontWeight="700" color="white">
              {title}
            </Text>
            <Text size="body2" maxW="29.7rem">
              {desc}
            </Text>
          </Stack>
        </Flex>
      </Box>
    </Styling>
  );
};

const Styling = styled.div``;

export default InvestTypeCard;
