import type { ReactNode } from 'react';

export type Link = {
  name: string;
  path: string;
  icon: ReactNode;
  sublinks?: {
    name: string;
    path: string;
  }[];
};

export type Linkgroup = {
  name: string;
  links: Link[];
};

export type Task = {
  id: string;
  name: string;
  description: string;
  isDone: boolean;
  dueDate: Date;
};

export type ApiResponse<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };
