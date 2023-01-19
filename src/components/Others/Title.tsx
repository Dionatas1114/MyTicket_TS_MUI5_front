import { Typography } from '@mui/material';

interface TitleProps {
  children?: React.ReactNode;
  component?: string;
  color?: string;
  gutterBottom?: boolean;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  variant?:
    | 'inherit'
    | 'body2'
    | 'body1'
    | 'caption'
    | 'button'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'overline'
    | undefined;
}

const Title = (props: TitleProps) => {
  const { children, component = 'h2', variant = 'h6', color, align, gutterBottom } = props;
  return (
    <Typography
      component={component}
      color={color}
      align={align}
      variant={variant}
      gutterBottom={gutterBottom || false}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Title;
