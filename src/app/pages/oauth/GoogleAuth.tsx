import React, { useEffect } from 'react';
import api from 'app/api/tiddix';
import { chkToaster } from 'app/components/common/Toaster';
import useAuth from 'app/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function GoogleAuth() {
  const authContext = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = window.location.href.split('?');
    const params = urlParams[1];

    api
      .get(`/google/oauthcallback?${params}`, {
        withCredentials: true,
      })
      .then(({ data }) => {
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

        navigate('/dashboard', { replace: true });
      })
      .catch((err) => {
        if (err.response.data.message.includes('Duplicate request')) return;
        chkToaster.error({ title: err.response.data.message });
      });
  }, []);
  return <div>Loading...</div>;
}
