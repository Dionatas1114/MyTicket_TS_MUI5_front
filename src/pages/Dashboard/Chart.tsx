import React from 'react';
import Paper from '@mui/material/Paper';

import {
  Chart as ChartSeries,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale } from '@devexpress/dx-react-chart';

import { startOfHour, parseISO, format } from 'date-fns';

import { i18n } from '../../translate/i18n';

const Chart = () => {
  const date = React.useRef(new Date().toISOString());
  console.log(date.current);

  interface IDataItem {
    time: string;
    amount: number;
  }

  const INITIAL_VALUES: IDataItem[] = [
    { time: '08:00', amount: 0 },
    { time: '09:00', amount: 0 },
    { time: '10:00', amount: 0 },
    { time: '11:00', amount: 0 },
    { time: '12:00', amount: 0 },
    { time: '13:00', amount: 0 },
    { time: '14:00', amount: 0 },
    { time: '15:00', amount: 0 },
    { time: '16:00', amount: 0 },
    { time: '17:00', amount: 0 },
    { time: '18:00', amount: 0 },
    { time: '19:00', amount: 0 },
  ];

  const [chartData, setChartData] = React.useState(INITIAL_VALUES);

  return (
    <Paper>
      <ChartSeries data={chartData}>
        <ValueScale name="amount" />
        <ArgumentAxis />
        <ValueAxis scaleName="amount" showGrid={true} />
        <BarSeries name="chartData" valueField="amount" argumentField="time" scaleName="amount" />
      </ChartSeries>
    </Paper>
  );
};

export default Chart;
