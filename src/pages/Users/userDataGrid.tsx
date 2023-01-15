import * as React from 'react';

import {
  DataGrid,
  GridRowModesModel,
  GridRowModes,
  GridRowsProp,
  GridRowParams,
  MuiEvent,
  GridRowModel,
  GridEventListener,
  GridRowId,
} from '@mui/x-data-grid';

import CreateUsersToolbar from './CreateUsersToolbar';
import { CustomPagination } from 'components';
import getUserColumns from './userColumns';
import useUsers from 'hooks/useUsers';

export default function UserDataGrid() {
  const { users } = useUsers();
  const [userData, setUsers] = React.useState<GridRowsProp>(users);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

  const handleRowEditStart = (_: GridRowParams, event: MuiEvent<React.SyntheticEvent>) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (_, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setUsers(users.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = userData.find((row) => row.id === id);
    if (editedRow!.isNew) setUsers(users.filter((row) => row.id !== id));
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow };
    setUsers(users.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const userColumns = getUserColumns(
    users,
    rowModesModel,
    handleSaveClick,
    handleCancelClick,
    handleEditClick,
    handleDeleteClick
  );

  return (
    <DataGrid
      sx={{ height: 370, width: '100%' }}
      rows={users}
      columns={userColumns}
      editMode="row"
      rowModesModel={rowModesModel}
      onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
      onRowEditStart={handleRowEditStart}
      onRowEditStop={handleRowEditStop}
      processRowUpdate={processRowUpdate}
      disableSelectionOnClick
      loading={users.length === 0}
      components={{
        Toolbar: CreateUsersToolbar,
        Pagination: CustomPagination,
      }}
      componentsProps={{
        toolbar: { setUsers, setRowModesModel },
      }}
      experimentalFeatures={{ newEditingApi: true }}
    />
  );
}
