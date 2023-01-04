import React from 'react';
import { Paper, SxProps } from '@mui/material';

interface CustomPaperProps {
  children?: React.ReactElement;
  sx?: SxProps;
}

const CustomPaper = (props: CustomPaperProps) => {
  const { children, sx } = props;
  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
};

export default CustomPaper;
