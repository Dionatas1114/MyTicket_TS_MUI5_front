import { GridColDef } from '@mui/x-data-grid';
import { i18n } from 'translate/i18n';

const fields = ['id', 'name', 'email', 'profile', 'createdAt', 'updatedAt', 'actions'];
const widths = [50, 220, 220, 120, 200, 250];
const headerNames = [
  i18n.t('users.table.id'),
  i18n.t('users.table.name'),
  i18n.t('users.table.email'),
  i18n.t('users.table.profile'),
  i18n.t('users.table.createdAt'),
  i18n.t('users.table.updatedAt'),
  i18n.t('users.table.actions'),
];

let columns = [];

for (let i = 0; i < fields.length; i++) {
  const column = {
    field: fields[i],
    headerName: headerNames[i],
    width: widths[i],
    editable: true,
  };

  columns.push(column);
}

const userColumns: GridColDef[] = columns;

export default userColumns;
