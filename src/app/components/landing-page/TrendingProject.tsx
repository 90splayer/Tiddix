import React, { useEffect, useState } from 'react';
import { Button, Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import ProjectCard from '../ProjectCard';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
// import { projectData } from '../data/ProjectData';
import api from 'app/api/tiddix';
import { chkToaster } from '../common/Toaster';

const TrendingProject = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
        setProjects(data.projects);
      })
      .catch(() => {
        chkToaster.error({ title: 'Something went wrong' });
      });
  }, []);

  return (
    <Container maxW="144rem" p="7.5rem 3rem">
      <Heading as="h2" size="display1sub" textAlign="center" pb="2rem">
        Trending Projects
      </Heading>
      <Text textAlign="center" pb="11rem">
        Check out our weekly updated trending projects
      </Text>

      <Box>
        <Slider {...settings}>
          {projects.map((item, index) => (
            <Box key={index}>
              <Link to={`/projects/${item.id}`}>
                <ProjectCard
                  creativeName={item.creativeName}
                  investmentType={item.investmentType}
                  images={item.coverArt}
                  progress={item.progress}
                  creativePicture={item.creativePicture}
                  category={item.category}
                  projectName={item.projectName}
                  amount={item.amount}
                />
              </Link>
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
              Explore More Projects
            </Button>
          </Link>
        </Flex>{' '}
      </Box>
    </Container>
  );
};

export default TrendingProject;
