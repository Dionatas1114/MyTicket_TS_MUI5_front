import React from 'react';

import { Container, Grid, Toolbar } from '@mui/material';

import { Chat, Copyright } from 'components';
import { getRandomNumber } from 'utils/functions/RandomNumber';

const Tickets = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Toolbar />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {/* 1265x560 */}
          {getRandomNumber(20, 25)}
        </Grid>
        <Grid item xs={4} md={3} lg={4}>
          <Chat />
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  );
};

export default Tickets;
