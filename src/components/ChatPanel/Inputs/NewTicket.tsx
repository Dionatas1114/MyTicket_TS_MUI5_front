import { Button } from '@mui/material';

import { i18n } from 'translate/i18n';

export default function NewTicket() {
  return (
    <Button
      variant="outlined"
      sx={{ width: 125 }}
      children={i18n.t('ticketsManager.buttons.newTicket')}
    />
  );
}
