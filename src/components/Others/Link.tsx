import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

interface LinkProps {
  color?: string;
  href?: string;
  text: string;
}

interface ComponentLinkProps extends LinkProps {
  to: string;
}

const ComponentLink = (props: ComponentLinkProps) => {
  const { color, text, to } = props;
  return (
    <MuiLink
      {...props}
      component={RouterLink}
      underline="hover"
      variant="body2"
      color={color}
      to={to}
    >
      {text}
    </MuiLink>
  );
};

const HrefLink = (props: LinkProps) => {
  const { color, href, text } = props;
  return (
    <MuiLink variant="body2" underline="none" href={href} color={color} {...props}>
      {text}
    </MuiLink>
  );
};

export { ComponentLink, HrefLink };
