import { Flex, Heading } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Button } from '@chakra-ui/react';
import styled from 'styled-components';

type Props = {
  title: string;
};
const MarqueBtn: FC<Props> = ({ title }) => {
  return (
    <Styling>
      <Flex
        align="center"
        justify="center"
        sx={{
          borderRadius: '100px',
          background:
            'linear-gradient(transparent, transparent) padding-box, linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%) border-box',

          // borderImage:
          //   'linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%) 1',
        }}
        p="20px 50px"
        className="gradient-border"
      >
        <Heading
          as="h2"
          fontSize={{ base: '1.6rem', md: '2.4rem' }}
          padding={{ base: '0 2rem', md: '0 5rem' }}
        >
          {title}
        </Heading>
      </Flex>
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
    height: 80px;
    letter-spacing: 1px;
    margin: 0 auto;
    padding: 2px;
    position: relative;
    z-index: 2;
  }

  .gradient-border:hover {
    color: #fff;
  }

  .gradient-border h2 {
    align-items: center;
    background: #15181d;
    border-radius: 10rem;
    display: flex;
    justify-content: center;
    height: 100%;
    transition: 0.5 ease-in-out;
    width: 100%;
    cursor: pointer;
  }

  .gradient-border:hover h2 {
    background: transparent;
    color: #15181d;
  }
`;

export default MarqueBtn;
