import React, { useEffect, useState } from 'react';
import { Button, Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import ProjectCard from '../ProjectCard';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
// import { projectData } from '../data/ProjectData';
import api from 'app/api/tiddix';

const TrendingProject = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    let url = `/projects`;
    api
      .get(url)
      .then(({ data }) => {
        console.log('PORTFOLIO RESPONSE', data.projects);
        setProjects(data.projects);
      })
      .catch(() => {
        console.log('SOMETHING WENT WRONG');
      });
  }, []);

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
      <Slider {...settings}>
        {projects.map((item, index) => (
          <Box key={index}>
            <ProjectCard
              creativeName={item.creativeName}
              investmentType={item.investmentType}
              images={item.images}
              progress={item.progress}
              creativePicture={item.creativePicture}
              category={item.category}
              projectName={item.projectName}
              amount={item.amount}
            />
          </Box>
        ))}
      </Slider>
      <Flex align="center" justify="center" mt="19rem">
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
