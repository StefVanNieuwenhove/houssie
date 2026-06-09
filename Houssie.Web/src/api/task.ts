import { apiClient } from './apiClient';
import type { Task } from '../lib/types';

const ENDPOINT = '/todo';

export const getTasks = async (): Promise<Task[]> => {
  try {
    const { data } = await apiClient.get(ENDPOINT);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
