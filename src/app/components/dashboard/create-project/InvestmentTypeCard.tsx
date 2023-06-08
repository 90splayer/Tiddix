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
      <Box
        borderRadius="3.0rem"
        padding="2px"
        className={paintBorder ? 'gradient-border' : ''}
      >
        <Flex
          bg="#232629"
          p="3rem 4rem"
          h="164px"
          gap="2rem"
          borderRadius="30px"
          cursor="pointer"
          align="center"
          justify="center"
          className="card-content"
        >
          <Flex
            bg={paintBorder ? 'gradientStyle.1' : 'blackShade.3'}
            align="center"
            justify="center"
            borderRadius="100%"
            // w="72px"
            // h="72px"
            boxSize="7.2rem"
          >
            <Icon
              as={icon}
              fontSize="3.4rem"
              sx={{
                path: {
                  fill: 'white',
                },
              }}
            />
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

const Styling = styled.div`
  .gradient-border {
    background-image: linear-gradient(
      235.92deg,
      #ffc227 -14.27%,
      #ff8cdf 50.09%,
      #4efcf9 114.81%
    );
  }

  .gradient-border .card-content {
    border-radius: 3rem;
    transition: 0.5 ease-in-out;
    width: 100%;
    cursor: pointer;
  }

  .gradient-border:hover .card-content {
    /* background: transparent; */
  }
`;

export default InvestTypeCard;
