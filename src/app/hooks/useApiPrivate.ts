import { apiPrivate } from 'app/api/tiddix';
import { useEffect } from 'react';
import useRefreshToken from './useRefreshToken';
import useAuth from './useAuth';

const useApiPrivate = () => {
  const refresh = useRefreshToken();
  const authContext = useAuth();

  useEffect(() => {
    const requestIntercept = apiPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers!['Authorization']) {
          config.headers![
            'Authorization'
          ] = `Bearer ${authContext?.auth?.access_token}`;
        }
        return config;
      },
      (error: any) => Promise.reject(error),
    );

    const responseIntercept = apiPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return apiPrivate(prevRequest);
        }
        return Promise.reject(error);
      },
    );

    return () => {
      apiPrivate.interceptors.response.eject(responseIntercept);
      apiPrivate.interceptors.request.eject(requestIntercept);
    };
  }, [authContext?.auth, refresh]);

  return apiPrivate;
};

export default useApiPrivate;
