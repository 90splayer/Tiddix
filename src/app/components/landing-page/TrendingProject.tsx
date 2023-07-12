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
    </Box>
  );
};

export default TrendingProject;
