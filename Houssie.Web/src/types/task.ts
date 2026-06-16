import type { PropsWithChildren } from 'react';

export type Task = {
  id: string;
  name: string;
  description: string;
  isDone: boolean;
  dueDate: string;
};

export type CreateTask = {
  name: string;
  description: string;
  dueDate: string;
};

export type UpdateTask = Partial<Task> & {
  isDone?: boolean;
};

export type TaskProviderProps = PropsWithChildren<{
  tasks: Task[];
  isLoading: boolean;
  isError: boolean;
  error: string | null;

  getTasks: () => Promise<void>;
  createTask: (task: CreateTask) => Promise<void>;
  //   updateTask: (id: string, task: UpdateTask) => Promise<Task>;
  //   deleteTask: (id: string) => Promise<void>;
}>;
