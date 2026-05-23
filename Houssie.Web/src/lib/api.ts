import axios from 'axios';
import type { ApiResponse } from './types';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000, // 10 seconds
});

export const ApiGet = async <T>(url: string): Promise<ApiResponse<T>> => {
  try {
    const response = await api.get<T>(url);
    return {
      success: true,
      data: response.data,
    };
  } catch (error: unknown) {
    let message = 'An error occurred while fetching data';

    if (axios.isAxiosError(error)) {
      message = error.response?.data?.error ?? error.message;
    } else if (error instanceof Error) {
      message = error.message;
    }

    return {
      success: false,
      error: message,
    };
  }
};
