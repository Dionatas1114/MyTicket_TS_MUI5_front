import React from 'react';

import { Container, Grid, Paper, Toolbar } from '@mui/material';
import { Copyright } from '../../components';
import Chart from './Chart';

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Toolbar />
      <Chart />
      {
        /* <Grid container spacing={3}>
        Dashboard
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            {/* <Page /> */
        //     </Paper>
        //   </Grid>
        //   Dashboard
        //   <Grid item xs={12} md={4} lg={3}>
        //     <Paper
        //       sx={{
        //         p: 2,
        //         display: 'flex',
        //         flexDirection: 'column',
        //         height: 240,
        //       }}
        //     >
        //       {/* <Page /> */}
        //     </Paper>
        //   </Grid>
        //   Dashboard
        //   <Grid item xs={12}>
        //     <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>{/* <Page /> */}</Paper>
        //   </Grid>
        // </Grid> */}
        <Copyright sx={{ pt: 4 }} />
      }
    </Container>
  );
};

export default Dashboard;
