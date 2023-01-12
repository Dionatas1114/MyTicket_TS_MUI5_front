import { headerTableSize } from 'utils/constants';
import { i18n } from 'translate/i18n';

const { medium, large, extraLarge } = headerTableSize;

export default function getContactColumns(connections: any[]) {
  const widths: NumberElements = {
    name: extraLarge,
    status: medium,
    updatedAt: large,
    battery: medium,
    isDefault: medium,
    session: medium,
    actions: medium,
  };

  const connectionKeys = Object.values(connections).map((connection) => {
    const { name, status, updatedAt, battery, isDefault, session, actions } = connection;
    return Object.keys({ name, status, updatedAt, battery, isDefault, session, actions });
  });

  const fields = connectionKeys[0];

  let columns = [];
  for (let i = 0; i < fields?.length; i++) {
    const column = {
      field: fields[i] || '',
      width: widths[fields[i]] || 0,
      // headerName: fields[i] || '',
      headerName: i18n.t(`connections.table.${fields[i]}`) || '',
    };

    columns.push(column);
  }

  return columns;
}
