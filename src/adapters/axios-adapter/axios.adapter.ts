import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  HttpStatusCode,
} from 'axios';

export const axiosAdapter = async (config: AxiosRequestConfig) => {
  try {
    const response: AxiosResponse = await axios.request(config);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err.response?.status === HttpStatusCode.NotFound) {
        throw new Error('Data not available');
      }
      throw new Error('Something went wrong');
    }
    throw err;
  }
};
