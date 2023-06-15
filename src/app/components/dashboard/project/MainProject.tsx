import React, { FC } from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import ProjectCard from 'app/components/ProjectCard';
import { projectData } from 'app/components/data/ProjectData';

const MainProject: FC = () => {
  return (
    <Box borderLeft="1px solid #485155" pl="4rem" py="5rem" h="auto">
      <Grid templateColumns="repeat(3, 1fr)" gap="2rem">
        {projectData.map((item, index) => (
          <GridItem w="100%" key={index}>
            {/* <ProjectCard
              full_name={item.name}
              investment_type={item.investment_type}
              avatar={item.avartar}
              progress={item.progress}
              img={item.img}
              category={item.category}
              title={item.category}
              amount={item.total_funding}
            /> */}
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default MainProject;
