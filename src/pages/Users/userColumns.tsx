import { GridColDef } from '@mui/x-data-grid';
import { i18n } from 'translate/i18n';
import { headerTableSize } from 'utils/constants';

const { small, medium, large, extraLarge } = headerTableSize;

const data = {
  fields: ['id', 'name', 'email', 'profile', 'customer', 'createdAt', 'updatedAt', 'actions'],
  widths: [small, extraLarge, extraLarge, medium, large, large, large, extraLarge],
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
