import { FormControlLabel, Switch } from '@mui/material';

import { i18n } from 'translate/i18n';

interface SwitchInputProps {
  showAllTickets: boolean;
  handleShowAllTickets: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export type { SwitchInputProps };

export default function SwitchInput({ showAllTickets, handleShowAllTickets }: SwitchInputProps) {
  return (
    <FormControlLabel
      control={<Switch checked={showAllTickets} onChange={handleShowAllTickets} />}
      label={i18n.t('tickets.buttons.showAll')}
      labelPlacement="start"
    />
  );
}
