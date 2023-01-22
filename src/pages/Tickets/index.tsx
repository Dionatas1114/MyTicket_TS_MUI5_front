import * as React from 'react';
import { Grid } from '@mui/material';
import { ChatPanel, Chat, Copyright, CustomPaper } from 'components';

import useTickets from 'hooks/useTickets';
import useContacts from 'hooks/useContacts';

const Tickets = () => {
  const { contacts } = useContacts();

  return (
    <CustomPaper>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ChatPanel {...contacts} />
          </Grid>
          {/* <Grid item xs={8} md={3} lg={8}>
            <Chat />
          </Grid> */}
        </Grid>
        <Copyright />
      </div>
    </CustomPaper>
  );
};

export default Tickets;
