import { Paper, SxProps } from '@mui/material';

interface CustomPaperProps {
  children?: React.ReactElement;
  sx?: SxProps;
}

const CustomPaper = ({ children, sx }: CustomPaperProps) => {
  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        ...sx,
      }}
      children={children}
    />
  );
};

export default CustomPaper;
