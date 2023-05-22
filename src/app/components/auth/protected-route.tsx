import React from 'react';
import { Outlet } from 'react-router-dom';
// import { withAuthenticationRequired } from '@auth0/auth0-react';
// import { Spinner } from '@chakra-ui/react';

const ProtectedRoute = ({ component, ...args }: any) => {
  return (
    <Outlet
      // component={withAuthenticationRequired(component, {
      //   onRedirecting: () => <Spinner />
      // })}
      {...args}
    />
  );
};

export default ProtectedRoute;
