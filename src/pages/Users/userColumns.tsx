import { GridColDef } from '@mui/x-data-grid';
import { i18n } from 'translate/i18n';
import { headerTableSize, widthScreenSize } from 'utils/constants';
import { getScreenWidth } from 'utils/functions/BrowserInfo';

const { small, medium, large, extraLarge } = headerTableSize;
const screenWidthSize = getScreenWidth();

const fields = ['id', 'name', 'email', 'profile', 'customer', 'createdAt', 'updatedAt', 'actions'];
const widths = [small, extraLarge, extraLarge, medium, large, large, large, extraLarge];
const headerNames = (field: string) => {
  return i18n.t(`users.table.${field}`);
};

if (screenWidthSize <= widthScreenSize.small) {
  //<= 1150px = remove positions 5 & 6
  fields.splice(5, 2);
  widths.splice(5, 2);
} else if (screenWidthSize <= widthScreenSize.medium) {
  //<= 1400px = remove position 6
  fields.splice(6, 1);
  widths.splice(6, 1);
}

let columns = [];

for (let i = 0; i < fields.length; i++) {
  const column = {
    field: fields[i],
    headerName: headerNames(fields[i]),
    width: widths[i],
    editable: true,
  };

  columns.push(column);
}

const userColumns: GridColDef[] = columns;

export default userColumns;
