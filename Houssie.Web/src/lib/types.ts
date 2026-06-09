import type { ReactNode } from 'react';

export type LinkGroup = {
  group: string;
  links: Link[];
};

export type Link = {
  name: string;
  icon: ReactNode;
  href?: string;
  subLinks?: {
    name: string;
    icon: ReactNode;
    href: string;
  }[];
};

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
