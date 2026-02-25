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
