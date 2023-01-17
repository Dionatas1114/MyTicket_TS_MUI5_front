import { FormControlLabel, Switch } from '@mui/material';

import { i18n } from 'translate/i18n';

interface PanelProps {
  showAllTickets: boolean;
  setShowAllTickets: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SwitchInput({ showAllTickets, setShowAllTickets }: PanelProps) {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={showAllTickets}
          onChange={() => setShowAllTickets((prevState: boolean) => !prevState)}
        />
      }
      label={i18n.t('tickets.buttons.showAll')}
      labelPlacement="start"
    />
  );
}
