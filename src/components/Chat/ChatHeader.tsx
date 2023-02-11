import React from 'react';

import {
  IconButton,
  AppBar,
  Toolbar,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  styled,
  Typography,
} from '@mui/material';
import { Search, MoreVert } from '@mui/icons-material';

const IconButtons = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
}));

// const IconButtons = styled(IconButton)(({ theme }) => ({
//   color: theme.palette.common.white,
// }));

export default function ChatHeader() {
  const avatarNumber = 3;
  const src = `https://material-ui.com/static/images/avatar/${avatarNumber}.jpg`;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar elevation={0} position="static">
      <Toolbar style={{ minWidth: '100px' }}>
        <ListItemAvatar children={<Avatar alt="Profile Picture" src={src} />} />
        <ListItemText
          primary={'Navami Chahal'}
          secondary={
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color={(theme) => theme.palette.common.white}
              children={'Ali Connors'}
            />
          }
        />
        <IconButton children={<Search />} />
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose} children={'My account'} />
          <MenuItem onClick={handleClose} children={'Logout'} />
        </Menu>
        <IconButtons onClick={handleClick} children={<MoreVert />} />
      </Toolbar>
    </AppBar>
  );
}
