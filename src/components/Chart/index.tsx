import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';

import { useTheme } from '@mui/material/styles';
import { Paper, Switch } from '@mui/material';

import { Title } from 'components';
import { i18n } from 'translate/i18n';

function createData(time: string, amount?: number) {
  return { time, amount };
}

// 08h - 19h

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
  const [values, setValues] = React.useState<{ showCartesianGrid: boolean }>({
    showCartesianGrid: false,
  });

  const handleClickShowCartesianGrid = () => {
    setValues({ showCartesianGrid: !values.showCartesianGrid });
  };

  const hidden = !values.showCartesianGrid ? 'hidden' : undefined;

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
        <Switch checked={values.showCartesianGrid} onChange={handleClickShowCartesianGrid} />
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
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" visibility={hidden} />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default Chart;
