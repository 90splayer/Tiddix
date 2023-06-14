import useAuth from 'app/hooks/useAuth';

export const isAuthenticated = () => {
  const authContext = useAuth();
  if (!authContext?.auth) return false;
  return true;
};

export const thousandsSeparators = (
  num: number | string,
  separator = ',',
  returnDefault?: any,
) => {
  if (num || num === 0) {
    const numParts = num.toString().split('.');
    numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return numParts.join('.');
  }
  return returnDefault ?? '';
};
