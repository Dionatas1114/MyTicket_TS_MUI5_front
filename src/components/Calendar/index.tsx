import * as React from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { CalendarPicker, LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';

import { Switch, TextField, TextFieldProps } from '@mui/material';

export default function Calendar() {
  const adapter = new AdapterDateFns();

  const [date, setDate] = React.useState<Date | null>(adapter.date());
  const [values, setValues] = React.useState<{ showToolbar: boolean }>({ showToolbar: false });

  const handleClickShowToolbar = () => {
    setValues({ showToolbar: !values.showToolbar });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Switch
        checked={values.showToolbar}
        onChange={handleClickShowToolbar}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      {/* <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} /> */}
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
        showToolbar={values.showToolbar}
        componentsProps={{
          actionBar: {
            actions: ['today'],
          },
        }}
      />
    </LocalizationProvider>
  );
}
