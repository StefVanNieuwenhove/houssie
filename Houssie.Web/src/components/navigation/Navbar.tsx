import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from 'react-router-dom';
import { routes } from '../../lib/Routes';
import { useState } from 'react';
import SubLink from './SubLink';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AppBar position='static'>
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0 2rem',
          }}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Drawer
            variant='temporary'
            open={isDrawerOpen}
            onClose={toggleDrawer}
            ModalProps={{ keepMounted: true }}>
            <Box role='presentation' sx={{ width: 300 }}>
              <Box
                sx={{
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <Typography
                  variant='h6'
                  component='h2'
                  sx={{ textAlign: 'center', width: '100%' }}>
                  Houssie
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ width: '100%', py: 2, spacing: 0 }}>
                {routes.map((route) => (
                  <Box
                    key={route.group}
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 0,
                      m: 0,
                    }}>
                    <Typography
                      variant='body2'
                      component='h2'
                      sx={{
                        px: 2,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 1,
                        alignItems: 'center',
                        position: 'relative',
                        '&::before, &::after': {
                          content: '""',
                          flex: 1,
                          borderBottom: '1px solid #ccc',
                        },
                        '&::before': {
                          mr: 1,
                        },
                        '&::after': {
                          ml: 1,
                        },
                      }}>
                      {route.group}
                    </Typography>
                    {route.links.map((link) => (
                      <SubLink
                        key={link.name}
                        {...link}
                        onClose={() => setIsDrawerOpen(false)}
                      />
                    ))}
                  </Box>
                ))}
              </Box>
            </Box>
          </Drawer>

          <Typography
            variant='h4'
            component='h1'
            sx={{ flexGrow: 1, textAlign: 'center' }}>
            Houssie
          </Typography>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navbar;
