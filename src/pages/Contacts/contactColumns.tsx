import { headerTableSize } from 'utils/constants';
import { i18n } from 'translate/i18n';

const { medium, large, extraLarge } = headerTableSize;

export default function getContactColumns(contacts: Contact[]) {
  const widths: NumberElements = {
    // id: small,
    name: extraLarge,
    number: large,
    email: large,
    isGroup: medium,
    createdAt: large,
    updatedAt: large,
    actions: medium,
  };

  const contactKeys = Object.values(contacts).map((contact) => {
    const { name, number, email, isGroup, createdAt, updatedAt, actions } = contact;
    return Object.keys({ name, number, email, isGroup, createdAt, updatedAt, actions });
  });

  const fields = contactKeys[0];

  let columns = [];
  for (let i = 0; i < fields?.length; i++) {
    const column = {
      field: fields[i] || '',
      width: widths[fields[i]] || 0,
      headerName: i18n.t(`contacts.table.${fields[i]}`) || '',
    };

    columns.push(column);
  }

  return columns;
}
