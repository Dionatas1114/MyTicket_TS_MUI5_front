import { Grid } from '@mui/material';

import SearchInput, { SearchInputProps } from '../Inputs/Search';
import SelectInput, { SelectInputProps } from '../Inputs/Select';

export default function SearchPanel(props: SearchInputProps & SelectInputProps) {
  const { search, handleSearch, queues, handleSelectQueue } = props;

  return (
    <Grid container spacing={2}>
      <Grid item md={8}>
        <SearchInput search={search} handleSearch={handleSearch} />
      </Grid>
      <Grid item md={4}>
        <SelectInput queues={queues} handleSelectQueue={handleSelectQueue} />
      </Grid>
    </Grid>
  );
}
