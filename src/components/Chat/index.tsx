import React from 'react';
import {
  Avatar,
  Checkbox,
  CssBaseline,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Paper,
  Typography,
} from '@mui/material';

import messages from 'mocks/Messages';
import ChatAppBar from './ChatAppBar';
import { i18n } from 'translate/i18n';

const Chat = () => {
  const [checked, setChecked] = React.useState<number[]>([]);
  const [search, setSearch] = React.useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value as string);

  const props = { search, handleSearch };

  const handleToggle = (toggleValue: number) => () => {
    const currentIndex = checked.indexOf(toggleValue);
    const newChecked = [...checked];
    currentIndex === -1 ? newChecked.push(toggleValue) : newChecked.splice(currentIndex, 1);
    newChecked.sort((a, b) => {
      return a - b;
    });
    setChecked(newChecked);
    console.log(newChecked);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper elevation={2} square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          {i18n.t('mainDrawer.listItems.tickets')}
          <Checkbox edge="end" tabIndex={-1} disableRipple />
        </Typography>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }} children={'Today'} />
              )}
              {id === 3 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }} children={'Yesterday'} />
              )}
              <ListItemButton role={undefined} onClick={handleToggle(id)}>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
                <Checkbox
                  edge="end"
                  checked={checked.indexOf(id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  // inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemButton>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <ChatAppBar {...props} />
    </React.Fragment>
  );
};

export default Chat;
