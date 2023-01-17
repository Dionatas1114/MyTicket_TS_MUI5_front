import { Grid } from '@mui/material';

import NewTicket from '../Inputs/NewTicket';
import SwitchInput from '../Inputs/Switch';
import SelectInput from '../Inputs/Select';

interface PanelProps {
  showAllTickets: boolean;
  setShowAllTickets: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SolvedPanel({
  queues,
  handleChange,
  showAllTickets,
  setShowAllTickets,
}: ChatPanelProps & PanelProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs>
        <NewTicket />
      </Grid>
      <Grid item xs>
        <SwitchInput showAllTickets={showAllTickets} setShowAllTickets={setShowAllTickets} />
      </Grid>
      <Grid item xs>
        <SelectInput queues={queues} onChange={handleChange} />
      </Grid>
    </Grid>
  );
}
