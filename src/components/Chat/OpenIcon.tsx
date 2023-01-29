import React from 'react';

import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import { FileCopyOutlined, Save, Print, Share, Edit } from '@mui/icons-material';

const actions = [
  { icon: <FileCopyOutlined />, name: 'Copy' },
  { icon: <Save />, name: 'Save' },
  { icon: <Print />, name: 'Print' },
  { icon: <Share />, name: 'Share' },
];

const OpenIcon = () => {
  return (
    <SpeedDial
      ariaLabel="SpeedDial openIcon"
      sx={{
        position: 'absolute',
        top: -270,
        left: 0,
        right: 0,
        // zIndex: 1,
        // margin: '0 auto',
      }}
      icon={<SpeedDialIcon openIcon={<Edit />} />}
      children={actions.map((action) => (
        <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
      ))}
    />
  );
};

export default OpenIcon;
