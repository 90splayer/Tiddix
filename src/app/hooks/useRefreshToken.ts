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

    authContext?.setAuth((prev: any) => {
      return { ...prev, access_token: response.data.access_token };
    });

    return response.data.access_token;
  };

  return refresh;
}
