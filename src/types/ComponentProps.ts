import { SelectChangeEvent } from '@mui/material';

interface ChatPanelProps {
  queues: string;
  handleChange: (event: SelectChangeEvent) => void;
}

export type { ChatPanelProps };
