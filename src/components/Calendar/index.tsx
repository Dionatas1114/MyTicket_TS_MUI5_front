import React from 'react';

import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField, TextFieldProps } from '@mui/material';

import { locale } from 'utils/Locale';

export default function Calendar() {
  const [date, setDate] = React.useState<Date | null>(new AdapterDateFns().date());
  const ptBR = locale('ptBR');

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        value={date}
        onChange={(newValue: React.SetStateAction<Date | null>) => {
          setDate(newValue);
        }}
        renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
          <TextField {...params} />
        )}
        dayOfWeekFormatter={(day: String) => `${day}.`}
        toolbarFormat="eee, dd MMMM"
        // showToolbar
      />
    </LocalizationProvider>
  );
}
