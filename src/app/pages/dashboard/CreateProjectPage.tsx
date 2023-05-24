import { Box } from '@chakra-ui/react';
import Header from 'app/layout/Header';
import { Footer } from 'app/layout/Footer';
import React, { FC } from 'react';
import CreateProject from 'app/components/dashboard/CreateProject';

const CreateProjectPage: FC = () => {
  return (
    <Box>
      <Header />
      <CreateProject />
      <Footer />
    </Box>
  );
};

export default CreateProjectPage;
