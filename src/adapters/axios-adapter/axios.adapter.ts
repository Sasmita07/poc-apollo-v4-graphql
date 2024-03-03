import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  HttpStatusCode,
} from 'axios';
import { DEVELOPER_ERROR_MESSAGES } from '../utils/constants/adapter.constant';

export const axiosAdapter = async (config: AxiosRequestConfig) => {
  try {
    const response: AxiosResponse = await axios.request(config);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err.response?.status === HttpStatusCode.NotFound) {
        throw new Error(DEVELOPER_ERROR_MESSAGES.DATA_NOT_FOUND);
      }
      throw new Error(DEVELOPER_ERROR_MESSAGES.SERVER_ERROR);
    }
    throw err;
  }
};
