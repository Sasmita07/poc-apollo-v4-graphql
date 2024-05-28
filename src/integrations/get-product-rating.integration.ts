import { AxiosRequestConfig } from 'axios';
import { axiosAdapter } from '../adapters/axios-adapter/axios.adapter';

export const getProductRatingIntegration = async (productId: string) => {
  try {
    const config: AxiosRequestConfig = {
      url: `https://fakestoreapi.com/products/${productId}`,
      method: 'GET',
    };
    const { rating: productRatingResponse } = await axiosAdapter(config);

    return productRatingResponse;
  } catch (err) {
    throw err;
  }
};
