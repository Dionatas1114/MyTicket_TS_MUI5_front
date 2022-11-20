import React from 'react';
import Typography from '@mui/material/Typography';

interface TitleProps {
  children?: React.ReactNode;
  component?: string;
  variant?: any;
  color?: string;
  align?: any;
  gutterBottom?: boolean;
}

const Title = (props: TitleProps) => {
  const { children, component, variant, color, align, gutterBottom } = props;
  return (
    <Typography
      component={component}
      variant={variant}
      color={color}
      align={align}
      gutterBottom={gutterBottom || false}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Title;
