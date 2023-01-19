import { InputLabel, MenuItem, FormControl, Select, SelectChangeEvent } from '@mui/material';

import { i18n } from 'translate/i18n';

interface SelectInputProps {
  queues: string;
  handleSelectQueue: (event: SelectChangeEvent<string>) => void;
}

export type { SelectInputProps };

export default function SelectInput({ queues, handleSelectQueue }: SelectInputProps) {
  return (
    <FormControl size="small" sx={{ width: 100 }}>
      <InputLabel>{i18n.t('ticketsQueueSelect.placeholder')}</InputLabel>
      <Select
        value={queues}
        label={i18n.t('ticketsQueueSelect.placeholder')}
        onChange={handleSelectQueue}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
