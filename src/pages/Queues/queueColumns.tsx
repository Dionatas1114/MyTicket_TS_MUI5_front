import { headerTableSize } from 'utils/constants';
import { i18n } from 'translate/i18n';

const { medium, large, extraLarge } = headerTableSize;

export default function getQueueColumns(queues: Queue[]) {
  const widths: NumberElements = {
    name: large,
    color: medium,
    greetingMessage: extraLarge,
    createdAt: large,
    updatedAt: large,
    actions: medium,
  };

  const queueKeys = Object.values(queues).map((queue) => {
    const { name, color, greetingMessage, createdAt, updatedAt, actions } = queue;
    return Object.keys({ name, color, greetingMessage, createdAt, updatedAt, actions });
  });

  const fields = queueKeys[0];

  let columns = [];
  for (let i = 0; i < fields?.length; i++) {
    const column = {
      field: fields[i] || '',
      width: widths[fields[i]] || 0,
      headerName: i18n.t(`queues.table.${fields[i]}`) || '',
    };

    columns.push(column);
  }

  return columns;
}
