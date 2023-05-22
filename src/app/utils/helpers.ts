import useAuth from 'app/hooks/useAuth';

export const isAuthenticated = () => {
  const authContext = useAuth();
  if (!authContext?.auth) return false;
  return true;
};
