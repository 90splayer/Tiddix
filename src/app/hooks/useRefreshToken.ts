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
    //   return { ...prev, accessToken: response.data.accessToken};
    // });

    const {
      accessToken,
      firstName,
      lastName,
      profilePicture,
      bio,
      walletBalance,
    } = response.data;
    authContext?.setAuth({
      accessToken,
      firstName,
      lastName,
      profilePicture,
      bio,
      walletBalance,
    });

    return accessToken;
  };

  return refresh;
}
