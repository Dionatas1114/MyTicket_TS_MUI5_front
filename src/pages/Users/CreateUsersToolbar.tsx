import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  GridToolbarContainer,
} from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';

import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';

interface CreateUsersToolbarProps {
  setUsers: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (newModel: (oldModel: GridRowModesModel) => GridRowModesModel) => void;
}

export default function CreateUsersToolbar(props: CreateUsersToolbarProps) {
  const { setUsers, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setUsers((oldRows) => [
      ...oldRows,
      {
        id,
        name: '',
        email: '',
        profile: '',
        customer: '',
        createdAt: '',
        updatedAt: '',
        isNew: true,
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<Add />} onClick={handleClick}>
        Add new user
      </Button>
    </GridToolbarContainer>
  );
}
