import { apiClient } from './apiClient';
import type { Task, CreateTask } from '../types/task';

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

export const createTask = async (task: CreateTask): Promise<Task> => {
  try {
    const { data } = await apiClient.post(ENDPOINT, task);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
