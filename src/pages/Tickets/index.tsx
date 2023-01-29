import { Grid } from '@mui/material';
import { ChatPanel, Copyright, CustomPaper, Chat } from 'components';

// import useTickets from 'hooks/useTickets';
import useContacts from 'hooks/useContacts';
import messages from 'mocks/Messages';

const Tickets = () => {
  const { contacts } = useContacts();

  return (
    <CustomPaper>
      <div>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12} lg={4}>
            <ChatPanel {...contacts} />
          </Grid>
          <Grid item md={8} xs={12} lg={8}>
            <Chat {...messages} />
          </Grid>
        </Grid>
        <Copyright />
      </div>
    </CustomPaper>
  );
};

export default Tickets;
