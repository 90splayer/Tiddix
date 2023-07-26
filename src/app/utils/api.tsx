import useApiPrivate from 'app/hooks/useApiPrivate';
import { chkToaster } from 'app/components/common/Toaster';
import useAuth from 'app/hooks/useAuth';

export default function updateUserSummary() {
  const apiPrivate = useApiPrivate();
  const authContext = useAuth();
  export const updateUserSummary = () => {
    apiPrivate
      .get('/user/summary')
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
      })
      .catch(() => {
        chkToaster.error({ title: 'Something went wrong' });
      });
  };
  return <div>T</div>;
}
