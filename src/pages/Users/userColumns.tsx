import { Save, Cancel, Edit, DeleteOutlined } from '@mui/icons-material';
import {
  GridActionsCellItem,
  GridColumns,
  GridRowId,
  GridRowModes,
  GridRowModesModel,
} from '@mui/x-data-grid';
import { i18n } from 'translate/i18n';
import { headerTableSize } from 'utils/constants';

const { medium, large, extraLarge } = headerTableSize;

interface DataColumns {
  users: User[];
  rowModesModel: GridRowModesModel;
  handleSaveClick: (id: GridRowId) => () => void;
  handleCancelClick: (id: GridRowId) => () => void;
  handleEditClick: (id: GridRowId) => () => void;
  handleDeleteClick: (id: GridRowId) => () => void;
}

export default function getUserColumns(dataColumns: DataColumns) {
  const {
    users,
    rowModesModel,
    handleSaveClick,
    handleCancelClick,
    handleEditClick,
    handleDeleteClick,
  } = dataColumns;

  const editable: BooleanElements = {
    name: true,
    email: true,
    profile: true,
    customer: true,
    createdAt: false,
    updatedAt: false,
  };

  const widths: NumberElements = {
    name: extraLarge,
    email: extraLarge,
    profile: medium,
    customer: medium,
    createdAt: large,
    updatedAt: large,
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
    });
  });

  const fields = userKeys[0];

  let columns: GridColumns = [];
  for (let i = 0; i < fields?.length; i++) {
    const column = {
      field: fields[i] || '',
      width: widths[fields[i]] || 0,
      headerName: i18n.t(`users.table.${fields[i]}`) || '',
      editable: editable[fields[i]],
    };

    columns.push(column);
  }

  const actionsColumn = {
    field: 'actions',
    type: 'actions',
    headerName: i18n.t('users.table.actions'),
    width: medium,
    getActions: ({ id }: User) => {
      const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

      if (isInEditMode) {
        return [
          <GridActionsCellItem
            icon={<Save />}
            label="Save"
            onClick={handleSaveClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<Cancel />}
            label="Cancel"
            onClick={handleCancelClick(id)}
            color="inherit"
          />,
        ];
      }

      return [
        <GridActionsCellItem
          icon={<Edit />}
          label="Edit"
          onClick={handleEditClick(id)}
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<DeleteOutlined />}
          label="Delete"
          onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ];
    },
  };

  columns.push(actionsColumn);

  return columns;
}
