import React from 'react';
import { IconButton, MenuItem } from '@mui/material';

interface MenuItemProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  icon: React.ReactElement;
  content: string | React.ReactElement;
  color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';
  size?: 'small' | 'medium' | 'large';
}

const CustomMenuItem = ({ onClick, color, size, icon, content }: MenuItemProps) => {
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
