import React from 'react';
import { Button, Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import ProjectCard from '../ProjectCard';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { projectData } from '../data/ProjectData';

const TrendingProject = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Container maxW="144rem" p="7.5rem 7.2rem">
      <Heading
        as="h2"
        fontSize="4.8rem"
        textAlign="center"
        pb="2rem"
        lineHeight="54.62px"
        fontWeight="700"
        color="#fff"
      >
        Trending Projects
      </Heading>
      <Text fontSize="2rem" textAlign="center" color="#99A1AA" pb="11rem">
        Check out our weekly updated trending Projects
      </Text>
      <Flex justify="center" align="center" flexDir="column">
        <Slider {...settings}>
          {projectData.map((item, index) => (
            <Box key={index}>
              <ProjectCard
                full_name={item.name}
                investment_type={item.investment_type}
                avatar={item.avartar}
                progress={item.progress}
                img={item.img}
                category={item.category}
                title={item.category}
                amount={item.total_funding}
              />
            </Box>
          ))}
        </Slider>
        <Link to="/explore">
          <Button
            border="1px solid #fff"
            borderRadius="10rem"
            w="22rem"
            h="59px"
            fontSize="1.6rem"
            transition="0.5s ease"
            boxShadow="0px 4px 50px rgba(0, 0, 0, 0.15)"
            _hover={{
              opacity: 0.8,
              transform: 'scale(1.02)',
            }}
            bg="transparent"
            color="#fff"
          >
            Explore More Project
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default TrendingProject;
