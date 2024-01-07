import axios, { AxiosRequestConfig } from 'axios';

export const getProductCatalogIntegration = async (
  config: AxiosRequestConfig
) => {
  try {
    const { data } = await axios.request(config);
    return data;
  } catch (err) {
    throw err;
  }
};
