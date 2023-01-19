import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

import { i18n } from 'translate/i18n';

interface NewTicketModalProps {
  open: boolean;
  handleCloseModal: () => void;
}

export default function NewTicketModal({ open, handleCloseModal }: NewTicketModalProps) {
  return (
    <Dialog fullWidth maxWidth={'xs'} open={open} onClose={handleCloseModal}>
      <DialogTitle children={i18n.t('newTicketModal.title')} />
      <DialogContent>
        <DialogContentText children={i18n.t('newTicketModal.fieldLabel')} />
        <Box
          noValidate
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pt: 3,
            m: 'auto',
            width: 'fit-content',
          }}
          children={
            <TextField
              id="newTicketModal-input"
              label={i18n.t('newTicketModal.add')}
              variant="outlined"
            />
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal} children={i18n.t('newTicketModal.buttons.cancel')} />
        <Button
          onClick={handleCloseModal}
          disabled={true}
          children={i18n.t('newTicketModal.buttons.ok')}
        />
      </DialogActions>
    </Dialog>
  );
}
