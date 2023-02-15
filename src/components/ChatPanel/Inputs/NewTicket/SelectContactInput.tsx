import * as React from 'react';
import { TextField, Autocomplete, CircularProgress } from '@mui/material';
import { NewTicketProps } from '.';
import { i18n } from 'translate/i18n';
import { Sleep } from 'utils/functions/Sleep';

interface AsynchronousInputProps extends NewTicketProps {
  label: string;
}

export default function AsynchronousInput(props: AsynchronousInputProps) {
  const {
    label,
    openModal,
    contact,
    contacts,
    showContacts,
    setContact,
    handleOpenContacts,
    handleCloseContacts,
  } = props;

  const loading = showContacts && contacts.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) return undefined;

    (async () => {
      await Sleep(1e3);
      if (active) setContact(contacts);
    })();

    return () => {
      active = false;
    };
  }, [loading, contacts, setContact]);

  React.useEffect(() => {
    if (!openModal) setContact(null);
  }, [openModal, setContact]);

  return (
    <Autocomplete
      id="asynchronous-input"
      sx={{ width: 300 }}
      open={showContacts}
      onOpen={handleOpenContacts}
      onClose={handleCloseContacts}
      value={contact}
      onChange={(_: React.SyntheticEvent, newValue: Contact[] | null) => setContact(newValue)}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={contacts}
      loading={loading}
      noOptionsText={i18n.t('ticketsManager.noContacts')}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          autoFocus
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
