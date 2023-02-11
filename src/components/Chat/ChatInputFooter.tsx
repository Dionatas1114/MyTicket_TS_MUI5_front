import React from 'react';

import { AppBar, Box, IconButton, Toolbar, InputBase, styled, alpha } from '@mui/material';
import { Mic, InsertEmoticon, AttachFile } from '@mui/icons-material';

// import OpenIcon from './OpenIcon';
import SearchInput, { SearchInputProps } from 'components/Others/Search';

import { i18n } from 'translate/i18n';

const IconButtons = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
}));

const StyledInput = styled('div')(({ theme }) => ({
  padding: 0,
  marginLeft: 0,
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  backgroundColor: alpha(theme.palette.common.black, 0.07),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.09),
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
}));

const ChatInputFooter = (props: SearchInputProps) => {
  return (
    <AppBar position="sticky" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <IconButtons children={<InsertEmoticon fontSize="medium" />} disabled />
        <IconButtons children={<AttachFile fontSize="medium" />} />
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <StyledInput children={<StyledInputBase placeholder={i18n.t('Mensagem')} />} />
        </Box>
        <IconButtons children={<Mic fontSize="medium" />} disabled />
      </Toolbar>
    </AppBar>
  );
};

export default ChatInputFooter;
