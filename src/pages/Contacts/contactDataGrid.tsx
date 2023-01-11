import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { CustomPagination } from 'components';
import useContacts from 'hooks/useContacts';
import getContactColumns from './contactColumns';

export default function ContactDataGrid() {
  const { contacts } = useContacts();
  const contactColumns = getContactColumns(contacts);

  return (
    <DataGrid
      sx={{ height: 370, width: '100%' }}
      rows={contacts}
      columns={contactColumns}
      // checkboxSelection
      components={{
        Toolbar: GridToolbar,
        Pagination: CustomPagination,
      }}
      experimentalFeatures={{ newEditingApi: true }}
    />
  );
}
