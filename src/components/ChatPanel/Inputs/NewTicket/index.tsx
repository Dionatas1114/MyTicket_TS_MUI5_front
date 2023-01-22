import * as React from 'react';
import { Button } from '@mui/material';

import { i18n } from 'translate/i18n';
import NewTicketModal from './NewTicketModal';

interface NewTicketProps {
  contact: Contact;
  contacts: Contact[];
  setContact: React.Dispatch<React.SetStateAction<Contact>>;
  loading: boolean;
  handleLoading: (event: React.ChangeEvent<HTMLInputElement>, loading: boolean) => void;
}

export type { NewTicketProps };

export default function NewTicketInput(props: NewTicketProps) {
  const { loading, handleLoading, contacts, contact, setContact } = props;

  const [openModal, setOpenModal] = React.useState(false);
  const [showContacts, setShowContacts] = React.useState(false);

  const handleClickOpen = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const ticketProps = {
    openModal,
    handleCloseModal,
    loading,
    handleLoading,
    showContacts,
    setShowContacts,
    contacts,
    contact,
    setContact,
  };

  return (
    <React.Fragment>
      <Button
        sx={{ width: 125 }}
        variant="outlined"
        onClick={handleClickOpen}
        children={i18n.t('ticketsManager.buttons.newTicket')}
      />
      <NewTicketModal {...ticketProps} />
    </React.Fragment>
  );
}
