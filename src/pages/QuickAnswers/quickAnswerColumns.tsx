import { headerTableSize } from 'utils/constants';
import { i18n } from 'translate/i18n';

const { medium, large, extraLarge } = headerTableSize;

export default function getQuickAnswers(quickAnswers: QuickAnswer[]) {
  const widths: NumberElements = {
    shortcut: large,
    message: extraLarge,
    createdAt: large,
    updatedAt: large,
    actions: medium,
  };

  const quickAnswerKeys = Object.values(quickAnswers).map((quickAnswer) => {
    const { shortcut, message, createdAt, updatedAt, actions } = quickAnswer;
    return Object.keys({ shortcut, message, createdAt, updatedAt, actions });
  });

  const fields = quickAnswerKeys[0];

  let columns = [];
  for (let i = 0; i < fields?.length; i++) {
    const column = {
      field: fields[i] || '',
      width: widths[fields[i]] || 0,
      headerName: i18n.t(`quickAnswers.table.${fields[i]}`) || '',
    };

    columns.push(column);
  }

  return columns;
}
