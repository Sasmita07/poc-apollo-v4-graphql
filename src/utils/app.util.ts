import { readFileSync } from 'fs';

export const productTypedef = (filePath: string) => {
  return readFileSync(filePath, {
    encoding: 'utf-8',
  });
};
