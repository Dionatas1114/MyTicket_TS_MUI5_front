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
} from '@mui/icons-material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import LeftBar from './LeftBar';
import { AppBar, Drawer } from './styles';
import { CustomMenuItem } from '..';

const theme = createTheme();

const LayoutContent = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMenu, setMobileMenu] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMenu);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenu(null);
  };

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
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={openDrawer}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(openDrawer && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              MyTicket
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="show new notifications" color="inherit">
                <Badge badgeContent={1} color="error">
                  <Notifications />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreVert />
              </IconButton>
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
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeft />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>{LeftBar}</List>
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
    </ThemeProvider>
  );
};

// LayoutContent.defaultProps = {

// }

const Layout = () => {
  return <LayoutContent />;
};

export default Layout;