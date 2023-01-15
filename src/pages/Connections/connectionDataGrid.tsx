import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { CustomPagination } from 'components';
import useConnections from 'hooks/useConnections';
import getContactColumns from './connectionColumns';

export default function ConnectionDataGrid() {
  const { connections } = useConnections();
  const contactColumns = getContactColumns(connections);

  return (
    <DataGrid
      sx={{ height: 370, width: '100%' }}
      rows={connections}
      columns={contactColumns}
      // checkboxSelection
      loading={connections.length === 0}
      components={{
        Toolbar: GridToolbar,
        Pagination: CustomPagination,
      }}
      experimentalFeatures={{ newEditingApi: true }}
    />
  );
}
