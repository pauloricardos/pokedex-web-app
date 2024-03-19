import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

class HttpClient {
  private baseURL: string = `${process.env.API_URL}/v1`;

  async get<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.get<T>(
        this.baseURL + url,
        config
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post<T, D>(
    url: string,
    data: D,
    config: AxiosRequestConfig = {}
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.post<T>(
        this.baseURL + url,
        data,
        config
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default HttpClient;
