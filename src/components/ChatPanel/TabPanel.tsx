import * as React from 'react';
import { Box, styled, alpha } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const StyledPanelBox = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.black, 0.03),
}));

const TabPanel = ({ children, value, index, ...rest }: TabPanelProps) => {
  return (
    <div role="tabpanel" hidden={value !== index} {...rest}>
      {value === index && <Box sx={{ p: 2 }} children={children} />}
    </div>
  );
};

export { StyledPanelBox, TabPanel };
