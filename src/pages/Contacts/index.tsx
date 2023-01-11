import { Container, Toolbar } from '@mui/material';
import { Copyright, CustomPaper, Title } from 'components';
import ContactDataGrid from 'pages/Contacts/contactDataGrid';
import { i18n } from 'translate/i18n';

export default function Contacts() {
  return (
    <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
      <CustomPaper>
        <div>
          <Title color="primary">{i18n.t('mainDrawer.listItems.contacts')}</Title>
          <Toolbar variant="dense" />
          <ContactDataGrid />
        </div>
      </CustomPaper>
      <Copyright />
    </Container>
  );
}
