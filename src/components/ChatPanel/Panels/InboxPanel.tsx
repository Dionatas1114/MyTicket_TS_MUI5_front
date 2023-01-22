import { Grid } from '@mui/material';

import NewTicket, { NewTicketProps } from '../Inputs/NewTicket';
import SwitchInput, { SwitchInputProps } from '../Inputs/Switch';
import SelectInput, { SelectInputProps } from '../Inputs/Select';

export default function InboxPanel(props: SelectInputProps & SwitchInputProps & NewTicketProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs>
        <NewTicket {...props} />
      </Grid>
      <Grid item xs>
        <SwitchInput {...props} />
      </Grid>
      <Grid item xs>
        <SelectInput {...props} />
      </Grid>
    </Grid>
  );
}
