import type { LinkGroup } from './types';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export const routes: LinkGroup[] = [
  {
    group: 'Household',
    links: [
      {
        name: 'Tasks',
        icon: <FormatListBulletedIcon />,
        subLinks: [
          {
            name: 'Overview',
            icon: <FormatListBulletedIcon />,
            href: '/tasks',
          },
          {
            name: 'Create',
            icon: <PlaylistAddIcon />,
            href: '/tasks/create',
          },
        ],
      },
      {
        name: 'Groceries',
        icon: <LocalGroceryStoreIcon />,
        href: '/groceries',
      },
    ],
  },
];
