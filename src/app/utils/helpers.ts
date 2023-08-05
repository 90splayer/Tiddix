import useAuth from 'app/hooks/useAuth';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import tz from 'dayjs/plugin/timezone';
import { format } from 'date-fns-tz';

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

export const round = (value: number, precision?: number) => {
  if (!precision && value % 1 !== 0) precision = 1;
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

export const capitalizeFirstLetter = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

export const resolveDataToTableData = <T>(
  data: T[],
  reshape?: (curObject: T, i: number) => T | object,
) => {
  if (data.length) {
    return data.reduce((res: any[], _cur, i) => {
      if (reshape) {
        const overwrite = reshape(_cur, i);
        res.push({ sn: i + 1, ..._cur, ...overwrite });
      } else res.push({ sn: i + 1, ..._cur });
      return res;
    }, []);
  }
  return data;
};

export const setSN = (_page = 1, limit = 10, idx = 0) => {
  const page = _page < 1 ? 1 : _page;
  const number = limit * page - (limit - idx) + 1;

  return (number < 10 ? '00' : number < 100 ? '0' : '') + number;
};

export const dateFormat = (date: Date) => {
  dayjs.extend(utc);
  dayjs.extend(tz);

  const timezone = dayjs.tz.guess();

  return {
    time: format(new Date(date), 'p', { timeZone: 'Europe/London' }),
    date: format(new Date(date), 'dd/MM/yyy', { timeZone: 'Europe/London' }),
    filterType: format(new Date(date), 'dd/MM/yyy', {
      timeZone: 'Europe/London',
    }),
    inputType: format(new Date(date), 'dd-MM-yyy', {
      timeZone: 'Europe/London',
    }),
    easyDate: format(new Date(date), 'MMM dd, yyyy', {
      timeZone: 'Europe/London',
    }),
    tableType: dayjs.utc(date).tz(timezone).format('DD MMM YYYY - HH:mm A'),
    friendlyDate: dayjs.utc(date).tz(timezone).format('DD MMM YYYY'),
    simpleDate: dayjs.utc(date).tz(timezone).format('MMM DD, YYYY'),
  };
};
