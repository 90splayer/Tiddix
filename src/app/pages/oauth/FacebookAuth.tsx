import React, { useEffect } from 'react';
import api from 'app/api/tiddix';
import { chkToaster } from 'app/components/common/Toaster';
import useAuth from 'app/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function FacebookAuth() {
  const authContext = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = window.location.href.split('?');
    const params = urlParams[1];

    console.log('URLLL', params);

    api
      .get(`/facebook/oauthcallback?${params}`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        console.log('DATAAA', data);

        const {
          accessToken,
          firstName,
          lastName,
          profilePicture,
          bio,
          walletBalance,
        } = data;

        authContext?.setAuth({
          accessToken,
          firstName,
          lastName,
          profilePicture,
          bio,
          walletBalance,
        });

        chkToaster.success({ title: 'Logged in successfully' });

        // navigate('/dashboard', { replace: true });
      })
      .catch((err) => {
        if (err.response.data.message.includes('Duplicate request')) return;
        chkToaster.error({ title: err.response.data.message });
      });
  }, []);
  return <div>FaceBook state</div>;
}
