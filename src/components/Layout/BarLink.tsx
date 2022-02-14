import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

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
      React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to'>>(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

export default BarLink;
