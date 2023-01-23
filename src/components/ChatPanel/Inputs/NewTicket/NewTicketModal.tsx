import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

import { i18n } from 'translate/i18n';
import { NewTicketProps } from '.';
import SelectContactInput from './SelectContactInput';

export default function NewTicketModal(props: NewTicketProps) {
  const { openModal, handleCloseModal, contact } = props;

  return (
    <Dialog fullWidth open={openModal} onClose={handleCloseModal}>
      <DialogTitle children={i18n.t('newTicketModal.title')} />
      <DialogContent>
        <DialogContentText children={i18n.t('newTicketModal.fieldLabel')} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pt: 3,
            m: 'auto',
            width: 'fit-content',
          }}
          noValidate
          component="form"
        >
          <SelectContactInput label={i18n.t('newTicketModal.add')} {...props} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal} children={i18n.t('newTicketModal.buttons.cancel')} />
        <Button
          onClick={handleCloseModal}
          disabled={!contact}
          children={i18n.t('newTicketModal.buttons.ok')}
        />
      </DialogActions>
    </Dialog>
  );
}
