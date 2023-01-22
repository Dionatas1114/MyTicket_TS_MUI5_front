import { Grid } from '@mui/material';

import SearchInput, { SearchInputProps } from '../Inputs/Search';
import SelectInput, { SelectInputProps } from '../Inputs/Select';

export default function SearchPanel(props: SearchInputProps & SelectInputProps) {
  return (
    <Grid container spacing={2}>
      <Grid item md={8}>
        <SearchInput {...props} />
      </Grid>
      <Grid item md={4}>
        <SelectInput {...props} />
      </Grid>
    </Grid>
  );
}
