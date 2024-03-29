import React from 'react';

import { Badge, Divider, List, ListSubheader } from '@mui/material';
import {
  Dashboard,
  WhatsApp,
  ContactPhone,
  Message,
  People,
  SyncAlt,
  Queue,
} from '@mui/icons-material';

import Link from './LeftBarLink';
import { i18n } from 'translate/i18n';

const connectionWarning = false;
const list = 'mainDrawer.listItems';

const LeftBar = () => {
  return (
    <React.Fragment>
      <Link to="/dash" primary={i18n.t(`${list}.dashboard`)} icon={<Dashboard />} />
      <Link to="/dash/tickets" primary={i18n.t(`${list}.tickets`)} icon={<WhatsApp />} />
      <Link to="/dash/contacts" primary={i18n.t(`${list}.contacts`)} icon={<ContactPhone />} />
      <Link to="/dash/quickAnswers" primary={i18n.t(`${list}.quickAnswers`)} icon={<Message />} />
      <List>
        <Divider />
        <ListSubheader inset>{i18n.t(`${list}.administration`)}</ListSubheader>
        <Link to="/dash/users" primary={i18n.t(`${list}.users`)} icon={<People />} />
        <Link
          to="/dash/connections"
          primary={i18n.t(`${list}.connections`)}
          icon={
            <Badge
              badgeContent={connectionWarning ? '!' : null}
              color="error"
              children={<SyncAlt />}
            />
          }
        />
        <Link to="/dash/queues" primary={i18n.t(`${list}.queues`)} icon={<Queue />} />
      </List>
    </React.Fragment>
  );
};

export default LeftBar;
