import * as React from 'react';
import { Button } from '@mui/material';

import { i18n } from 'translate/i18n';
import NewTicketModal from './NewTicketModal';

interface NewTicketProps {
  contact: Contact;
  contacts: Contact[];
  openModal: boolean;
  showContacts: boolean;
  setContact: React.Dispatch<React.SetStateAction<Contact>>;
  handleCloseModal: () => void;
  handleClickOpen: () => void;
  handleOpenContacts: () => void;
  handleCloseContacts: () => void;
}

export type { NewTicketProps };

export default function NewTicketInput(props: NewTicketProps) {
  return (
    <React.Fragment>
      <Button
        sx={{ width: 125 }}
        variant="outlined"
        onClick={props.handleClickOpen}
        children={i18n.t('ticketsManager.buttons.newTicket')}
      />
      <NewTicketModal {...props} />
    </React.Fragment>
  );
}
