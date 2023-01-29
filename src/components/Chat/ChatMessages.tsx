import React from 'react';
import {
  Avatar,
  Checkbox,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Paper,
  Typography,
} from '@mui/material';

import { i18n } from 'translate/i18n';

interface Messages {
  id: number;
  primary: string;
  secondary: string;
  person: string;
}

interface ChatMessagesProps {
  checked: number[];
  handleSelectMessages: (toggleValue: number) => () => void;
  messages: Messages[];
}

export type { Messages, ChatMessagesProps };

const ChatMessages = ({ checked, handleSelectMessages, messages }: ChatMessagesProps) => {
  return (
    <Paper elevation={2} square sx={{ pb: '50px' }}>
      <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
        {i18n.t('mainDrawer.listItems.tickets')}
        <Checkbox edge="end" tabIndex={-1} disableRipple />
      </Typography>
      <List sx={{ mb: 2 }}>
        {messages.map(({ id, primary, secondary, person }) => (
          <React.Fragment key={id}>
            {id === 1 && <ListSubheader sx={{ bgcolor: 'background.paper' }} children={'Today'} />}
            {id === 3 && (
              <ListSubheader sx={{ bgcolor: 'background.paper' }} children={'Yesterday'} />
            )}
            <ListItemButton role={undefined} onClick={handleSelectMessages(id)}>
              <ListItemAvatar children={<Avatar alt="Profile Picture" src={person} />} />
              <ListItemText primary={primary} secondary={secondary} />
              <Checkbox // inputProps={{ 'aria-labelledby': labelId }}
                edge="end"
                checked={checked.indexOf(id) !== -1}
                tabIndex={-1}
                disableRipple
              />
            </ListItemButton>
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default ChatMessages;
