import React from 'react';
import { CssBaseline } from '@mui/material';

import ChatMessages, { Messages } from './ChatMessages';
import ChatAppBar from './ChatAppBar';

const Chat = (messages: Messages[]) => {
  const [checked, setChecked] = React.useState<number[]>([]);
  const [search, setSearch] = React.useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value as string);

  const handleSelectMessages = (messageIdSelected: number) => () => {
    const currentIndex = checked.indexOf(messageIdSelected);
    const newChecked = [...checked];
    currentIndex === -1 ? newChecked.push(messageIdSelected) : newChecked.splice(currentIndex, 1);
    newChecked.sort((a, b) => {
      return a - b;
    });
    setChecked(newChecked);
    console.log(newChecked);
  };

  const chatMessagesProps = { checked, handleSelectMessages, messages };
  const appBarProps = { search, handleSearch };

  return (
    <React.Fragment>
      <CssBaseline />
      <ChatMessages {...chatMessagesProps} />
      <ChatAppBar {...appBarProps} />
    </React.Fragment>
  );
};

export default Chat;
