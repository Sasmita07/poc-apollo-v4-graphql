import { AxiosRequestConfig } from 'axios';
import { axiosAdapter } from '../adapters/axios-adapter/axios.adapter';

export const getProductByIdIntegration = async (id: string) => {
  try {
    const config: AxiosRequestConfig = {
      url: `https://fakestoreapi.com/products/${id}`,
      method: 'GET',
    };
    const productResponse = await axiosAdapter(config);
    return productResponse;
  } catch (err) {
    throw err;
  }
};
