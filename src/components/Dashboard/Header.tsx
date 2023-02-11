import { Toolbar, IconButton, Typography, Box, Badge } from '@mui/material';
import {
  LensBlur,
  Notifications,
  MoreVert,
  Menu as MenuIcon,
  AccountCircle as Account,
} from '@mui/icons-material';
import { CustomMenuItem as MenuItem, SwitchTheme } from '..';

import { AppBar } from './styles';

export const DashHeader = (props: any) => {
  const { openDrawer, toggleDrawer, handleProfileMenuOpen, handleMobileMenuOpen } = props;
  return (
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
            onClick={handleProfileMenuOpen}
            color="inherit"
            children={<Account />}
          />
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            onClick={handleMobileMenuOpen}
            color="inherit"
            children={<MoreVert />}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
