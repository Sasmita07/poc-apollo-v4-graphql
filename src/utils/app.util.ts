import { readFileSync } from 'fs';
import { currencyConfig } from './constants/app.constant';

export const productTypedef = (filePath: string) => {
  return readFileSync(filePath, {
    encoding: 'utf-8',
  });
};

export const currencyFormatter = (
  amount: number,
  locale: string = currencyConfig.LOCALE_USD,
  currency: string = currencyConfig.CURRENCY_USD
) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
};
