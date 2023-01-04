import { Container, Grid, Toolbar } from '@mui/material';
import { CustomPaper } from 'components';

const Contacts = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Toolbar />
      <Grid container spacing={3}>
        Contacts
        <Grid item xs={12} md={8} lg={9}>
          <CustomPaper sx={{ height: 240 }}>
            <>{'/* <Contacts /> */'}</>
          </CustomPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contacts;
