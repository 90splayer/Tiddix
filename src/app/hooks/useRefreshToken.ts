import api from '../api/tiddix';
import useAuth from './useAuth';

export default function useRefreshToken() {
  const authContext = useAuth();

  const refresh = async () => {
    const response = await api.post(
      '/refresh',
      {},
      {
        withCredentials: true,
      },
    );

    // authContext?.setAuth((prev: any) => {
    //   console.log('PREV AUTH DATA', prev);
    //   return { ...prev, access_token: response.data.access_token };
    // });

    const { access_token, firstName, lastName } = response.data;
    authContext?.setAuth({ access_token, firstName, lastName });

    return access_token;
  };

  return refresh;
}
