import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { CustomPagination } from 'components';
import useUsers from 'hooks/useUsers';
import getUserColumns from './userColumns';

export default function UserDataGrid() {
  const { users } = useUsers();
  const userColumns = getUserColumns(users);

  return (
    <DataGrid
      sx={{ height: 370, width: '100%' }}
      rows={users}
      columns={userColumns}
      // checkboxSelection
      loading={users.length === 0}
      components={{
        Toolbar: GridToolbar,
        Pagination: CustomPagination,
      }}
      experimentalFeatures={{ newEditingApi: true }}
    />
  );
}
