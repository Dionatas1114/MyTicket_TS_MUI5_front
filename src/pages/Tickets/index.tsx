import React from 'react';

import { Container, Grid, Paper, Toolbar } from '@mui/material';

const Tickets = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Toolbar />
      <Grid container spacing={3}>
        Tickets
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            {/* <Tickets /> */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tickets;
