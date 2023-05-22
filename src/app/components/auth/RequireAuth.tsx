import { useLocation, Outlet, Navigate } from 'react-router-dom';
import useAuth from 'app/hooks/useAuth';

// Checks to see if a user is logged in or not
const RequireAuth = () => {
  const auth = useAuth();
  const location = useLocation();

  return auth?.auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
