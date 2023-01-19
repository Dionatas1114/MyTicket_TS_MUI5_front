import { SxProps } from '@mui/material';
import { Title, HrefLink } from '..';

interface CopyrightProps {
  children?: React.ReactElement;
  sx?: SxProps;
}

const Copyright = (props: CopyrightProps) => {
  const { sx = { m: 3 }, ...rest } = props;
  const currentYear = new Date().getFullYear();

  return (
    <Title variant="body2" color="text.secondary" align="center" gutterBottom {...{ sx, rest }}>
      <HrefLink color="info.main" href="https://mui.com/" text={`Copyright © MUI ${currentYear}`} />
    </Title>
  );
};

export default Copyright;
