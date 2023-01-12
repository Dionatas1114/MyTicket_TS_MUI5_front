import { Container, Toolbar } from '@mui/material';
import { Copyright, CustomPaper, Title } from 'components';
import { i18n } from 'translate/i18n';
import ConnectionDataGrid from './connectionDataGrid';

const Connections = () => {
  return (
    <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
      <CustomPaper>
        <div>
          <Title color="primary">{i18n.t('mainDrawer.listItems.connections')}</Title>
          <Toolbar variant="dense" />
          <ConnectionDataGrid />
        </div>
      </CustomPaper>
      <Copyright />
    </Container>
  );
};

export default Connections;
