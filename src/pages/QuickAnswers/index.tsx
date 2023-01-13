import { Container, Toolbar } from '@mui/material';
import { Copyright, CustomPaper, Title } from 'components';
import { i18n } from 'translate/i18n';
import QuickAnswerDataGrid from './quickAnswerDataGrid';

const QuickAnswers = () => {
  return (
    <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
      <CustomPaper>
        <div>
          <Title color="primary">{i18n.t('mainDrawer.listItems.quickAnswers')}</Title>
          <Toolbar variant="dense" />
          <QuickAnswerDataGrid />
        </div>
      </CustomPaper>
      <Copyright />
    </Container>
  );
};

export default QuickAnswers;
