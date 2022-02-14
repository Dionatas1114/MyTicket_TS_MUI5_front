import React from 'react';
import { IconButton, MenuItem } from '@mui/material';

interface MenuItemProps {
  onClick?: any;
  icon: any;
  content: string | React.ReactElement;
  color?: any;
  size?: any;
}

const CustomMenuItem = (props: MenuItemProps) => {
  const { onClick, color, size, icon, content } = props;
  return (
    <MenuItem onClick={onClick}>
      <IconButton color={color || 'inherit'} size={size || 'large'}>
        {icon}
      </IconButton>
      {content}
    </MenuItem>
  );
};

export default CustomMenuItem;
