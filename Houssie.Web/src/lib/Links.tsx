import { ListTodo } from 'lucide-react';
import type { Linkgroup } from './types';

export const Links: Linkgroup[] = [
  {
    name: 'House',
    links: [
      {
        name: 'Tasks',
        path: '/tasks',
        icon: <ListTodo size={18} />,
        sublinks: [
          {
            name: 'Tasks',
            path: '/tasks',
          },
        ],
      },
    ],
  },
  {
    name: 'finances',
    links: [
      {
        name: 'Expenses',
        path: '/expenses',
        icon: <ListTodo size={18} />,
        sublinks: [
          {
            name: 'Expenses',
            path: '/expenses',
          },
        ],
      },
    ],
  },
  {
    name: 'Stats',
    links: [
      {
        name: 'Stats',
        path: '/stats',
        icon: <ListTodo size={18} />,
      },
    ],
  },
];
