import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface BarLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

const BarLink = ({ icon, primary, to }: BarLinkProps) => {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to'>>((itemProps, ref) => {
        return <Link to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to]
  );

  return (
    <ListItem component={renderLink}>
      {icon ? <ListItemIcon children={icon} /> : null}
      <ListItemText primary={primary} />
    </ListItem>
  );
};

export default BarLink;
