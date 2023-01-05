import { GridColDef } from '@mui/x-data-grid';
import { i18n } from 'translate/i18n';
import { headerTableSize, widthScreenSize } from 'utils/constants';
import { getScreenWidth } from 'utils/functions/BrowserInfo';

const { small, medium, large, extraLarge } = headerTableSize;
const screenWidthSize = getScreenWidth();

const data = {
  fields: ['id', 'name', 'email', 'profile', 'customer', 'createdAt', 'updatedAt', 'actions'],
  widths: [small, extraLarge, extraLarge, medium, large, large, large, extraLarge],
  headerNames: (field: string) => {
    return i18n.t(`users.table.${field}`);
  },
};

if (screenWidthSize <= widthScreenSize.small) {
  //<= 1150px = remove positions 5 & 6
  data.fields.splice(5, 2);
  data.widths.splice(5, 2);
} else if (screenWidthSize <= widthScreenSize.medium) {
  //<= 1400px = remove position 6
  data.fields.splice(6, 1);
  data.widths.splice(6, 1);
}

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
