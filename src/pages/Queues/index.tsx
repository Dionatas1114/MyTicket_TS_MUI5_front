import { Container, Toolbar } from '@mui/material';
import { Copyright, CustomPaper, Title } from 'components';
import { i18n } from 'translate/i18n';
import QueueDataGrid from './queueDataGrid';

const Queues = () => {
  return (
    <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
      <CustomPaper>
        <div>
          <Title color="primary">{i18n.t('mainDrawer.listItems.queues')}</Title>
          <Toolbar variant="dense" />
          <QueueDataGrid />
        </div>
      </CustomPaper>
      <Copyright />
    </Container>
  );
};

export default Queues;
