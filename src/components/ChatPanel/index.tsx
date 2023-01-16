import * as React from 'react';
import { Tabs, Tab, Box, Divider } from '@mui/material';
import { Search, CheckBox as Solved, MoveToInbox as Inbox } from '@mui/icons-material';
import { i18n } from 'translate/i18n';

import SearchPanel from './SearchPanel';
import TabPanel from './TabPanel';
import InboxPanel from './InboxPanel';
import SolvedPanel from './SolvedPanel';

export default function ChatPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => setValue(newValue);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label={i18n.t('tickets.tabs.open.title')} icon={<Inbox />} />
          <Tab label={i18n.t('tickets.tabs.closed.title')} icon={<Solved />} />
          <Tab label={i18n.t('tickets.tabs.search.title')} icon={<Search />} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} children={<InboxPanel />} />
      <TabPanel value={value} index={1} children={<SolvedPanel />} />
      <TabPanel value={value} index={2} children={<SearchPanel />} />
      <Divider />
    </Box>
  );
}
