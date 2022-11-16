import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';

import { useTheme } from '@mui/material/styles';
import { Paper, Switch } from '@mui/material';

import { Title } from 'components';
import { i18n } from 'translate/i18n';

function createData(time: string, amount?: number) {
  return { time, amount };
}

const chartData = [
  createData('00h', 0),
  createData('03h', 3),
  createData('06h', 6),
  createData('09h', 2),
  createData('12h', 12),
  createData('15h', 2),
  createData('18h', 2),
  createData('21h', 5),
  createData('24h', undefined),
];

const Chart = () => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 240,
      }}
    >
      <Title component="h2" variant="h6" color="primary">
        {i18n.t('mainPage.charts.perDay.title')}
      </Title>

      <ResponsiveContainer>
        <LineChart
          data={chartData}
          margin={{
            top: 16,
            right: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis stroke={theme.palette.text.secondary} style={theme.typography.body2}>
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            />
          </YAxis>
          <Line
            isAnimationActive={true}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={true}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" visibility={'hidden'} />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default Chart;

// import Paper from '@mui/material/Paper';
// import {
//   Chart as BarChart,
//   ArgumentAxis,
//   ValueAxis,
//   BarSeries,
// } from '@devexpress/dx-react-chart-material-ui';
// import { ValueScale } from '@devexpress/dx-react-chart';

// // import { startOfHour, parseISO, format } from 'date-fns';

// // import { i18n } from 'translate/i18n';

// const Chart = () => {
//   const date = React.useRef(new Date().toISOString());
//   console.log(date.current);

//   interface IDataItem {
//     time: string;
//     amount: number;
//   }

//   const INITIAL_VALUES: IDataItem[] = [
//     { time: '08:00', amount: 2 },
//     { time: '09:00', amount: 3 },
//     { time: '10:00', amount: 1 },
//     { time: '11:00', amount: 0 },
//     { time: '12:00', amount: 0 },
//     { time: '13:00', amount: 0 },
//     { time: '14:00', amount: 0 },
//     { time: '15:00', amount: 0 },
//     { time: '16:00', amount: 0 },
//     { time: '17:00', amount: 0 },
//     { time: '18:00', amount: 0 },
//     { time: '19:00', amount: 0 },
//   ];

//   const [chartData, setChartData] = React.useState(INITIAL_VALUES);

//   return (
//     <Paper>
//       <BarChart data={chartData}>
//         <ValueScale name="amount" />
//         <ArgumentAxis />
//         <ValueAxis scaleName="amount" />
//         <BarSeries name="chartData" valueField="amount" argumentField="time" scaleName="amount" />
//       </BarChart>
//     </Paper>
//   );
// };

// export default Chart;
