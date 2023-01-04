import React from 'react';
import { Switch, useTheme } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';

import { Title, CustomPaper } from 'components';
import { i18n } from 'translate/i18n';

function initialChartData() {
  const list = [];
  for (let i = 8; i <= 19; i++) {
    list.push(i.toString() + 'h');
  }
  return list.map((time) => {
    return { time, amount: 0 };
  });
}

const Chart = () => {
  const theme = useTheme();

  const [chartData, setChartData] = React.useState(initialChartData());

  const [values, setValues] = React.useState<{ showCartesianGrid: boolean }>({
    showCartesianGrid: false,
  });

  const handleClickShowCartesianGrid = () => {
    setValues({ showCartesianGrid: !values.showCartesianGrid });
  };

  const hidden = !values.showCartesianGrid ? 'hidden' : undefined;

  return (
    <CustomPaper sx={{ height: 332 }}>
      <>
        <Title color="primary">
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
      </>
    </CustomPaper>
  );
};

export default Chart;
