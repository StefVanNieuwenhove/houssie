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
