import * as React from 'react';
import { Grid } from '@mui/material';
import { ChatPanel, Chat, Copyright, CustomPaper } from 'components';

import useTickets from 'hooks/useTickets';

const Tickets = () => {
  const { tickets } = useTickets();
  return (
    <CustomPaper>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ChatPanel />
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
