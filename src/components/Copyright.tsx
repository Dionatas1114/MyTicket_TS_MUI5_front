import React from 'react';
import { Title, HrefLink } from '.';

interface CopyrightProps {
  children?: React.ReactNode;
  sx: any;
}

const Copyright = (props: CopyrightProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <Title variant="body2" color="text.secondary" align="center" gutterBottom {...props}>
      {`© ${currentYear} `}
      <HrefLink color="info.main" href="https://mui.com/" text="MUI" />
    </Title>
  );
};

export default Copyright;
