import React from 'react';
import { Outlet } from 'react-router-dom';

import {
  Box,
  List,
  Menu,
  Badge,
  Toolbar,
  Divider,
  Typography,
  IconButton,
  CssBaseline,
  PopoverOrigin,
} from '@mui/material';

import {
  MoreVert,
  ChevronLeft,
  Notifications,
  AccountCircle,
  Menu as MenuIcon,
  Logout,
  LensBlur,
} from '@mui/icons-material';

import LeftBar from './LeftBar';
import { AppBar, Drawer } from './styles';
import { CustomMenuItem, SwitchTheme } from '..';

const LayoutContent = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMenu, setMobileMenu] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMenu);

  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => setMobileMenu(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenu(event.currentTarget);
  };

  const menuStyle: PopoverOrigin = { vertical: 'top', horizontal: 'center' };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={menuStyle}
      id={menuId}
      keepMounted
      transformOrigin={menuStyle}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <CustomMenuItem
        onClick={handleMenuClose}
        size="medium"
        icon={<AccountCircle />}
        content="Profile"
      />
      <CustomMenuItem onClick={handleMenuClose} size="medium" icon={<Logout />} content="Logout" />
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMenu}
      anchorOrigin={menuStyle}
      id={mobileMenuId}
      keepMounted
      transformOrigin={menuStyle}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <CustomMenuItem icon={<Notifications />} content={<p>Notifications</p>} />
      <CustomMenuItem
        onClick={handleProfileMenuOpen}
        icon={<AccountCircle />}
        content={<p>Profile</p>}
      />
    </Menu>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute" open={openDrawer}>
        <Toolbar sx={{ pr: '24px' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(openDrawer && { display: 'none' }),
            }}
            children={<MenuIcon />}
          />
          <LensBlur sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
            children={'MyTicket'}
          />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <SwitchTheme />
            <IconButton
              size="large"
              color="inherit"
              children={<Badge badgeContent={1} color="error" children={<Notifications />} />}
            />
            <IconButton
              size="large"
              edge="end"
              aria-controls={menuId}
              onClick={handleProfileMenuOpen}
              color="inherit"
              children={<AccountCircle />}
            />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls={mobileMenuId}
              onClick={handleMobileMenuOpen}
              color="inherit"
              children={<MoreVert />}
            />
          </Box>
        </Toolbar>
      </AppBar>
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
