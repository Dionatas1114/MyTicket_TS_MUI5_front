import React from 'react';
import { Outlet } from 'react-router-dom';

import { Box, List, Menu, Toolbar, Divider, IconButton, CssBaseline } from '@mui/material';
import { ChevronLeft, Notifications, AccountCircle as Account, Logout } from '@mui/icons-material';

import { CustomMenuItem as MenuItem } from '..';

import { DashHeader } from './Header';
import LeftBar from './LeftBar';
import { Drawer } from './styles';

const LayoutContent = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMenu, setMobileMenu] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMenu);

  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const handleMobileMenuClose = () => setMobileMenu(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setMobileMenu(event.currentTarget);

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem size="medium" content="Profile" icon={<Account />} onClick={handleMenuClose} />
      <MenuItem size="medium" content="Logout" icon={<Logout />} onClick={handleMenuClose} />
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMenu}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem content={<p>Notifications</p>} icon={<Notifications />} />
      <MenuItem content={<p>Profile</p>} icon={<Account />} onClick={handleProfileMenuOpen} />
    </Menu>
  );

  const props = { openDrawer, toggleDrawer, handleProfileMenuOpen, handleMobileMenuOpen };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DashHeader {...props} />
      {renderMobileMenu}
      {renderMenu}
      <Drawer variant="permanent" open={openDrawer}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
          children={<IconButton onClick={toggleDrawer} children={<ChevronLeft />} />}
        />
        <Divider />
        <List children={<LeftBar />} />
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

const Layout = () => {
  return <LayoutContent />;
};

export default Layout;
