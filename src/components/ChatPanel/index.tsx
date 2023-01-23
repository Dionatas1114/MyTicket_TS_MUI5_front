import * as React from 'react';
import { Tabs, Tab, Box, Divider, SelectChangeEvent } from '@mui/material';
import { Search, CheckBox as Solved, MoveToInbox as Inbox } from '@mui/icons-material';
import { i18n } from 'translate/i18n';

import InboxPanel from './Panels/InboxPanel';
import SolvedPanel from './Panels/SolvedPanel';
import SearchPanel from './Panels/SearchPanel';

import { StyledPanelBox, TabPanel } from './TabPanel';

export default function ChatPanel(contacts: Contact[]) {
  const [contact, setContact] = React.useState<Contact | null>(null);
  const [queues, setQueues] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [tabPanel, setTabPanel] = React.useState(0);
  const [showAllTickets, setShowAllTickets] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const [showContacts, setShowContacts] = React.useState(false);

  const handleClickOpen = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenContacts = () => setShowContacts(true);
  const handleCloseContacts = () => setShowContacts(false);

  const handleChangeTabPanel = (_: React.SyntheticEvent, newValue: number) => setTabPanel(newValue);
  const handleSelectQueue = (event: SelectChangeEvent) => setQueues(event.target.value as string);

  const handleShowAllTickets = (_: React.ChangeEvent, checked: boolean) =>
    setShowAllTickets(checked);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value as string);

  const searchProps = { search, handleSearch };
  const queueProps = { queues, handleSelectQueue };

  const otherProps = {
    openModal,
    showAllTickets,
    contact,
    showContacts,
    contacts: Object.values(contacts),
    handleClickOpen,
    handleCloseModal,
    handleShowAllTickets,
    setContact,
    handleOpenContacts,
    handleCloseContacts,
    ...queueProps,
  };

  return (
    <Box sx={{ width: '100%' }}>
      <StyledPanelBox sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabPanel} onChange={handleChangeTabPanel} variant="fullWidth">
          <Tab label={i18n.t('tickets.tabs.open.title')} icon={<Inbox />} />
          <Tab label={i18n.t('tickets.tabs.closed.title')} icon={<Solved />} />
          <Tab label={i18n.t('tickets.tabs.search.title')} icon={<Search />} />
        </Tabs>
      </StyledPanelBox>
      <TabPanel index={0} value={tabPanel}>
        <InboxPanel {...otherProps} />
      </TabPanel>
      <TabPanel index={1} value={tabPanel}>
        <SolvedPanel {...otherProps} />
      </TabPanel>
      <TabPanel index={2} value={tabPanel}>
        <SearchPanel {...searchProps} {...queueProps} />
      </TabPanel>
      <Divider />
    </Box>
  );
}
