import * as React from 'react';
import { Tabs, Tab, Box, Divider, SelectChangeEvent, styled, alpha } from '@mui/material';
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

const StyledPanelBox = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.black, 0.03),
}));

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  );
};

export default function ChatPanel(contacts: Contact[]) {
  const [contact, setContact] = React.useState<Contact | null>(null);
  const [queues, setQueues] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [tabPanel, setTabPanel] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [showAllTickets, setShowAllTickets] = React.useState(true);

  const handleChangeTabPanel = (_: React.SyntheticEvent, newValue: number) => setTabPanel(newValue);

  const handleLoading = (_: React.ChangeEvent, loading: boolean) => setLoading(loading);

  const handleShowAllTickets = (_: React.ChangeEvent, checked: boolean) =>
    setShowAllTickets(checked);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value as string);

  const handleSelectQueue = (event: SelectChangeEvent) => setQueues(event.target.value as string);

  const queueProps = { queues, handleSelectQueue };
  const ticketProps = { showAllTickets, handleShowAllTickets };
  const loadingProps = { loading, handleLoading };
  const searchProps = { search, handleSearch };
  const contactProps = { contact, setContact, contacts: Object.values(contacts) };

  return (
    <Box sx={{ width: '100%' }}>
      <StyledPanelBox sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabPanel} onChange={handleChangeTabPanel} variant="fullWidth">
          <Tab label={i18n.t('tickets.tabs.open.title')} icon={<Inbox />} />
          <Tab label={i18n.t('tickets.tabs.closed.title')} icon={<Solved />} />
          <Tab label={i18n.t('tickets.tabs.search.title')} icon={<Search />} />
        </Tabs>
      </StyledPanelBox>
      <TabPanel
        index={0}
        value={tabPanel}
        children={
          <InboxPanel {...loadingProps} {...queueProps} {...ticketProps} {...contactProps} />
        }
      />
      <TabPanel
        index={1}
        value={tabPanel}
        children={
          <SolvedPanel {...loadingProps} {...queueProps} {...ticketProps} {...contactProps} />
        }
      />
      <TabPanel
        index={2}
        value={tabPanel}
        children={<SearchPanel {...searchProps} {...queueProps} />}
      />
      <Divider />
    </Box>
  );
}
