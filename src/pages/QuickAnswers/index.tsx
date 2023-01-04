import { Container, Grid, Toolbar } from '@mui/material';
import { CustomPaper } from 'components';

const QuickAnswers = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Toolbar />
      <Grid container spacing={3}>
        QuickAnswers
        <Grid item xs={12} md={8} lg={9}>
          <CustomPaper sx={{ height: 240 }}>
            <>{'/* <QuickAnswers /> */'}</>
          </CustomPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default QuickAnswers;
