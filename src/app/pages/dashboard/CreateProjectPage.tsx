import { Box } from '@chakra-ui/react';
import Header from 'app/layout/Header';
import { Footer } from 'app/layout/Footer';
import React, { FC } from 'react';
import CreateProject from 'app/components/dashboard/create-project/CreateProject';
import InvestmentType from 'app/components/dashboard/create-project/InvestmentType';
import Success from 'app/components/dashboard/create-project/Success';

const CreateProjectPage: FC = () => {
  return (
    <Box>
      <Header />
      {/* <CreateProject /> */}
      <InvestmentType />
      {/* <Success /> */}
      <Footer />
    </Box>
  );
};

export default CreateProjectPage;
