import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { CustomPagination } from 'components';
import useQueues from 'hooks/useQueues';
import getQueueColumns from './queueColumns';

export default function QueueDataGrid() {
  const { queues } = useQueues();
  const queueColumns = getQueueColumns(queues);

  return (
    <DataGrid
      sx={{ height: 370, width: '100%' }}
      rows={queues}
      columns={queueColumns}
      // checkboxSelection
      loading={queues.length === 0}
      components={{
        Toolbar: GridToolbar,
        Pagination: CustomPagination,
      }}
      experimentalFeatures={{ newEditingApi: true }}
    />
  );
}
