import { GridColDef } from '@mui/x-data-grid';
import { i18n } from 'translate/i18n';

const data = {
  fields: ['id', 'name', 'email', 'customer', 'profile', 'createdAt', 'updatedAt', 'actions'],
  widths: [50, 180, 200, 80, 80, 160, 160, 200],
  headerNames: (field: string) => {
    return i18n.t(`users.table.${field}`);
  },
};

let columns = [];

for (let i = 0; i < data.fields.length; i++) {
  const column = {
    field: data.fields[i],
    headerName: data.headerNames(data.fields[i]),
    width: data.widths[i],
    editable: true,
  };

  columns.push(column);
}

const userColumns: GridColDef[] = columns;

export default userColumns;
