import React from 'react';
import { Title, HrefLink } from '.';

interface CopyrightProps {
  children?: JSX.Element | JSX.Element[];
  sx: object;
}

const Copyright = (props: CopyrightProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <Title variant="body2" color="text.secondary" align="center" gutterBottom {...props}>
      <HrefLink color="info.main" href="https://mui.com/" text={`© MUI ${currentYear}`} />
    </Title>
  );
};

export default Copyright;
