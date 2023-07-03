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

export const numberMetricFormatter = (num: number, digits: number) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find((item) => num >= item.value);
  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0';
};

export const formikErrorHandler = (name: string, formikInstance: any) => {
  return (
    formikInstance.errors[name] &&
    formikInstance.touched[name] &&
    formikInstance.errors[name]
  );
};
