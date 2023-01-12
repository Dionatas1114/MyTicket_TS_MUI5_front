import { headerTableSize } from 'utils/constants';
import { i18n } from 'translate/i18n';

const { small, medium, large, extraLarge } = headerTableSize;

export default function getUserColumns(users: User[]) {
  const widths: NumberElements = {
    // id: small,
    name: extraLarge,
    email: extraLarge,
    profile: medium,
    customer: medium,
    createdAt: large,
    updatedAt: large,
    actions: medium,
  };

  const userKeys = Object.values(users).map((user) => {
    const { name, email, profile, customer, createdAt, updatedAt } = user;
    return Object.keys({
      name,
      email,
      profile,
      customer,
      createdAt,
      updatedAt,
      actions: '',
    });
  });

  const fields = userKeys[0];

  let columns = [];
  for (let i = 0; i < fields?.length; i++) {
    const column = {
      field: fields[i] || '',
      width: widths[fields[i]] || 0,
      headerName: i18n.t(`users.table.${fields[i]}`) || '',
    };

    columns.push(column);
  }

  return columns;
}
