import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useRefreshToken from 'app/hooks/useRefreshToken';
import useAuth from 'app/hooks/useAuth';

export default function PersistLogin() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const refresh = useRefreshToken();
  const authContext = useAuth();

  useEffect(() => {
    let isMounted = true;
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    !authContext!.auth?.access_token
      ? verifyRefreshToken()
      : setIsLoading(false);
    return () => {
      // To avoid state setting when component has unmounted (memory leak)
      isMounted = false;
    };
  }, []);

  return (
    <>
      {!(authContext?.persist === 'true') ? (
        <Outlet />
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <Outlet />
      )}
    </>
  );
}
