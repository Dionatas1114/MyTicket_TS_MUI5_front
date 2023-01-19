import * as React from 'react';
import { Button } from '@mui/material';

import { i18n } from 'translate/i18n';
import NewTicketModal from './NewTicketModal';

export default function NewTicketInput() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <React.Fragment>
      <Button
        sx={{ width: 125 }}
        variant="outlined"
        onClick={handleClickOpen}
        children={i18n.t('ticketsManager.buttons.newTicket')}
      />
      <NewTicketModal open={open} handleCloseModal={handleCloseModal} />
    </React.Fragment>
  );
}
