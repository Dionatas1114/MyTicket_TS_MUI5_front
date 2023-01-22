import { Grid } from '@mui/material';

import NewTicket, { NewTicketProps } from '../Inputs/NewTicket';
import SwitchInput, { SwitchInputProps } from '../Inputs/Switch';
import SelectInput, { SelectInputProps } from '../Inputs/Select';

export default function SolvedPanel(props: SelectInputProps & SwitchInputProps & NewTicketProps) {
  return (
    <Grid container justifyContent="space-evenly" alignItems="center">
      <Grid item xs>
        <NewTicket {...props} />
      </Grid>
      <Grid item xs>
        <SwitchInput {...props} />
      </Grid>
      <Grid item>
        <SelectInput {...props} />
      </Grid>
    </Grid>
  );
}
