import * as React from 'react';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchBar = () => {
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
      </Search>
    </>
    // <Paper
    //   component="form"
    //   sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }} //400
    // >
    //   <IconButton sx={{ p: '10px' }} aria-label="menu">
    //     <MenuIcon />
    //   </IconButton>
    //   <InputBase
    //     sx={{ ml: 1, flex: 1 }}
    //     placeholder="Search Google Maps"
    //     inputProps={{ 'aria-label': 'search google maps' }}
    //   />
    //   <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
    //     <SearchIcon />
    //   </IconButton>
    //   <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    //   <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
    //     <DirectionsIcon />
    //   </IconButton>
    // </Paper>
  );
};

export default SearchBar;
