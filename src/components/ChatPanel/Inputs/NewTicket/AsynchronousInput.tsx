import * as React from 'react';
import { TextField, Autocomplete, CircularProgress } from '@mui/material';
import { NewTicketModalProps } from './NewTicketModal';
import { NewTicketProps } from '.';
import { i18n } from 'translate/i18n';

interface AsynchronousInputProps extends NewTicketModalProps, NewTicketProps {
  label: string;
}

const sleep = (delay = 0) => new Promise((resolve) => setTimeout(resolve, delay));

export default function AsynchronousInput(props: AsynchronousInputProps) {
  const { label, showContacts, setShowContacts, contacts, contact, setContact } = props;

  const loading = showContacts && contacts.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) return undefined;

    (async () => {
      await sleep(1e3);
      if (active) setContact(contacts);
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  // React.useEffect(() => {
  //   if (!showContacts) setValue(null);
  // }, [showContacts]);

  return (
    <Autocomplete
      id="asynchronous-input"
      sx={{ width: 300 }}
      open={showContacts}
      onOpen={() => setShowContacts(true)}
      onClose={() => setShowContacts(false)}
      value={contact}
      onChange={(_: any, newValue: Contact[] | null) => setContact(newValue)}
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
