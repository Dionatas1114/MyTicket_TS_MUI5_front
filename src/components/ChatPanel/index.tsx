import * as React from 'react';
import { Tabs, Tab, Box, Divider, SelectChangeEvent } from '@mui/material';
import { Search, CheckBox as Solved, MoveToInbox as Inbox } from '@mui/icons-material';
import { i18n } from 'translate/i18n';

import InboxPanel from './Panels/InboxPanel';
import SolvedPanel from './Panels/SolvedPanel';
import SearchPanel from './Panels/SearchPanel';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  );
}

export default function ChatPanel() {
  const [tabPanel, setTabPanel] = React.useState(0);
  const [queues, setQueues] = React.useState('');
  const [showAllTickets, setShowAllTickets] = React.useState(true);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => setTabPanel(newValue);
  const handleSelectQueue = (event: SelectChangeEvent) => setQueues(event.target.value as string);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabPanel} onChange={handleChange} variant="fullWidth">
          <Tab label={i18n.t('tickets.tabs.open.title')} icon={<Inbox />} />
          <Tab label={i18n.t('tickets.tabs.closed.title')} icon={<Solved />} />
          <Tab label={i18n.t('tickets.tabs.search.title')} icon={<Search />} />
        </Tabs>
      </Box>
      <TabPanel
        index={0}
        value={tabPanel}
        children={
          <InboxPanel
            queues={queues}
            handleChange={handleSelectQueue}
            showAllTickets={showAllTickets}
            setShowAllTickets={setShowAllTickets}
          />
        }
      />
      <TabPanel
        index={1}
        value={tabPanel}
        children={
          <SolvedPanel
            queues={queues}
            handleChange={handleSelectQueue}
            showAllTickets={showAllTickets}
            setShowAllTickets={setShowAllTickets}
          />
        }
      />
      <TabPanel
        index={2}
        value={tabPanel}
        children={<SearchPanel queues={queues} handleChange={handleSelectQueue} />}
      />
      <Divider />
    </Box>
  );
}
