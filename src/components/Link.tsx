import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as CustomLink } from '@mui/material';

interface ComponentLinkProps {
  color?: string;
  href?: string;
  text: string;
  to: string;
}

interface LinkProps {
  color?: string;
  href?: string;
  text: string;
}

const ComponentLink = (props: ComponentLinkProps) => {
  const { color, href, text, to } = props;
  return (
    <CustomLink
      {...props}
      component={RouterLink}
      underline="hover"
      variant="body2"
      href={href}
      color={color}
      to={to}
    >
      {text}
    </CustomLink>
  );
};

const HrefLink = (props: LinkProps) => {
  const { color, href, text } = props;
  return (
    <CustomLink variant="body2" underline="none" href={href} color={color} {...props}>
      {text}
    </CustomLink>
  );
};

export { ComponentLink, HrefLink };
