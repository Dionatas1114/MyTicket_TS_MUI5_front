import { Container, Toolbar, Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import { Title, CustomPagination, CustomPaper, Copyright } from 'components';
import { i18n } from 'translate/i18n';
import useUsers from 'hooks/useUsers';

import columns from './userColumns';

const Users = () => {
  const { users } = useUsers();

  return (
    <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
      <CustomPaper>
        <>
          <Title color="primary">{i18n.t('mainDrawer.listItems.users')}</Title>
          <Toolbar sx={{ m: -3 }} />
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={users}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              experimentalFeatures={{ newEditingApi: true }}
              components={{
                Pagination: CustomPagination,
                Toolbar: GridToolbar,
              }}
            />
          </Box>
        </>
      </CustomPaper>
      <Copyright />
    </Container>
  );
};

export default Users;
