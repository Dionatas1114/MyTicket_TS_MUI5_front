import React from 'react';
import { Grid, SelectChangeEvent } from '@mui/material';

// import SearchInput from './SearchInput';
import SelectInput from './SelectInput';

export default function InboxPanel() {
  const [queues, setQueues] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => setQueues(event.target.value as string);

  return (
    <Grid container spacing={2}>
      <Grid item md={8}>
        {/* <SearchInput /> */}
      </Grid>
      <Grid item md={4}>
        <SelectInput queues={queues} onChange={handleChange} />
      </Grid>
    </Grid>
  );
}
