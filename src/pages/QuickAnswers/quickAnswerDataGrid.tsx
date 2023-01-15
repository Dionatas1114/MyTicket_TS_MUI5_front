import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { CustomPagination } from 'components';
import useQuickAnswers from 'hooks/useQuickAnswers';
import getQuickAnswerColumns from './quickAnswerColumns';

export default function QuickAnswerDataGrid() {
  const { quickAnswers } = useQuickAnswers();
  const quickAnswerColumns = getQuickAnswerColumns(quickAnswers);

  return (
    <DataGrid
      sx={{ height: 370, width: '100%' }}
      rows={quickAnswers}
      columns={quickAnswerColumns}
      // checkboxSelection
      loading={quickAnswers.length === 0}
      components={{
        Toolbar: GridToolbar,
        Pagination: CustomPagination,
      }}
      experimentalFeatures={{ newEditingApi: true }}
    />
  );
}
