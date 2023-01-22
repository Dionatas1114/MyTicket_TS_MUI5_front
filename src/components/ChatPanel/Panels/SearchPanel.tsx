import { Grid } from '@mui/material';

import SearchInput, { SearchInputProps } from '../Inputs/Search';
import SelectInput, { SelectInputProps } from '../Inputs/Select';

export default function SearchPanel(props: SearchInputProps & SelectInputProps) {
  return (
    <Grid container spacing={2} justifyContent="space-evenly" alignItems="center">
      <Grid item xs>
        <SearchInput {...props} />
      </Grid>
      <Grid item>
        <SelectInput {...props} />
      </Grid>
    </Grid>
  );
}
