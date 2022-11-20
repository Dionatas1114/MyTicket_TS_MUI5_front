import React from 'react';

import { Container, Grid } from '@mui/material';
import { Chart, Calendar, Copyright } from 'components';

const MainPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* <Toolbar /> */}
      <Grid container spacing={3}>
        <Grid item md={8} lg={7}>
          <Chart />
        </Grid>
        <Grid item md={4} lg={4}>
          <Calendar />
        </Grid>
        {/* Recent Orders */}
        {/* <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid> */}
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  );
};

export default MainPage;
