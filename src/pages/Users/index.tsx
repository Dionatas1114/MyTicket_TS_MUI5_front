import { Container, Toolbar } from '@mui/material';
import { Title, CustomPaper, Copyright } from 'components';
import { i18n } from 'translate/i18n';
import UserDataGrid from './userDataGrid';

export default function Users() {
  return (
    <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
      <CustomPaper>
        <div>
          <Title color="primary">{i18n.t('mainDrawer.listItems.users')}</Title>
          <Toolbar sx={{ m: -3 }} />
          <UserDataGrid />
        </div>
      </CustomPaper>
      <Copyright />
    </Container>
  );
}
