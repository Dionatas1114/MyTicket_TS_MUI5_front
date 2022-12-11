import React from 'react';

import { AppBar, Box, IconButton, Toolbar, Menu, MenuItem } from '@mui/material';
import { MoreVert, Search } from '@mui/icons-material';

import OpenIcon from './OpenIcon';
import SearchBar from './SearchBar';

const ChatAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <SearchBar />
        <IconButton color="inherit" aria-label="open drawer" onClick={handleClick}>
          <Search />
        </IconButton>

        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <OpenIcon />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <MoreVert />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default ChatAppBar;
