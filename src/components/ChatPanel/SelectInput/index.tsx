import { InputLabel, MenuItem, FormControl, Select, SelectChangeEvent } from '@mui/material';

import { i18n } from 'translate/i18n';

interface SelectInputProps {
  queues: string;
  onChange: (event: SelectChangeEvent<string>) => void;
}

export default function SelectInput(props: SelectInputProps) {
  const { queues, onChange } = props;

  return (
    <FormControl fullWidth size="small">
      <InputLabel>{i18n.t('ticketsQueueSelect.placeholder')}</InputLabel>
      <Select value={queues} label={i18n.t('ticketsQueueSelect.placeholder')} onChange={onChange}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
