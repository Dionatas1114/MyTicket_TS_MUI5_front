import { headerTableSize } from 'utils/constants';
import { i18n } from 'translate/i18n';

const { small, medium, large, extraLarge } = headerTableSize;

export default function getContactColumns(contacts: Contact[]) {
  const widths: NumberElements = {
    // id: small,
    name: extraLarge,
    number: large,
    email: large,
    isGroup: medium,
    createdAt: large,
    updatedAt: large,
  };

  const contactKeys = Object.values(contacts).map((contact) => {
    const { id, profilePicUrl, tickets, ...rest } = contact;
    return Object.keys(rest);
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
