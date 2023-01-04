import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface BarLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

const BarLink = (props: BarLinkProps) => {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to'>>((itemProps, ref) => {
        return <Link to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to]
  );

  return (
    <ListItem button component={renderLink}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
  );
};

export default BarLink;
