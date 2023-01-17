import { Grid } from '@mui/material';

import SearchInput from '../Inputs/Search';
import SelectInput from '../Inputs/Select';

export default function SearchPanel({ queues, handleChange }: ChatPanelProps) {
  return (
    <Grid container spacing={2}>
      <Grid item md={8}>
        <SearchInput />
      </Grid>
      <Grid item md={4}>
        <SelectInput queues={queues} onChange={handleChange} />
      </Grid>
    </Grid>
  );
}
