import { AxiosRequestConfig } from 'axios';
import { axiosAdapter } from '../adapters/axios-adapter/axios.adapter';

export const getProductCatalogIntegration = async () => {
  try {
    const config: AxiosRequestConfig = {
      url: 'https://fakestoreapi.com/products',
      method: 'GET',
    };
    const productCatalogResponse = await axiosAdapter(config);
    return productCatalogResponse;
  } catch (err) {
    throw err;
  }
};
