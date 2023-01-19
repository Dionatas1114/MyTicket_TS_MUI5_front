import { Grid } from '@mui/material';

import NewTicket from '../Inputs/NewTicket';
import SwitchInput, { SwitchInputProps } from '../Inputs/Switch';
import SelectInput, { SelectInputProps } from '../Inputs/Select';

export default function SolvedPanel(props: SelectInputProps & SwitchInputProps) {
  const { showAllTickets, handleShowAllTickets, queues, handleSelectQueue } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs>
        <NewTicket />
      </Grid>
      <Grid item xs>
        <SwitchInput showAllTickets={showAllTickets} handleShowAllTickets={handleShowAllTickets} />
      </Grid>
      <Grid item xs>
        <SelectInput queues={queues} handleSelectQueue={handleSelectQueue} />
      </Grid>
    </Grid>
  );
}
