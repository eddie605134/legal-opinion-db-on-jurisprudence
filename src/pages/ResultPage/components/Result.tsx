// ResultPage.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store'
import { setAdvanceSearchOpen } from '@/store/resultSlice';

import { TableVirtuoso, TableComponents } from 'react-virtuoso';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';

import {
  SearchButton,
} from '@/components/common/buttons';


interface Data {
  court: string;
  jud_date: string;
  jud_url: string;
  case_num: string;
  opinion: string;
}

interface ColumnData {
  dataKey: keyof Data;
  label: string;
  numeric?: boolean;
  width?: number;
}

const columns: ColumnData[] = [
  {
    label: '地院',
    dataKey: 'court',
    width: 130,
  },
  {
    label: '裁判日期',
    dataKey: 'jud_date',
  },
  // {
  //   label: '全文連結URL',
  //   dataKey: 'jud_url',
  // },
  {
    label: '案號',
    dataKey: 'case_num',
    numeric: true,
    width: 190,
  },
  {
    label: '見解',
    dataKey: 'opinion',
    numeric: true,
  },
];

const VirtuosoTableComponents: TableComponents<Data> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function ResultPage() {
  const disPatch = useDispatch()
  const [openSnackBar, setOpenSnackBar] = useState(false)

  const tableData = useSelector((state: RootState) => state.result.resultList)

  // table組件================================
  function fixedHeaderContent() {
    return (
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            variant="head"
            align="center"
            style={{
              width: column.width,
              fontSize: '1.1rem',
              fontWeight: 600,
              position: 'sticky',
              top: 0,
              zIndex: 1,
            }}
            sx={{
              backgroundColor: '#D6B894',
            }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    );
  }

  const copyToClipboard = (value: string) => {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    setOpenSnackBar(true)
  }

  const contentFormat = (row: Data, column: ColumnData, dataKey: string) => {
    if (dataKey === 'case_num') {
      return (
        <Tooltip
          placement="bottom"
          arrow
          title="點擊開啟連結"
          sx={{
            cursor: 'pointer',
            backgroundColor: '#D6B894',
            color: '#5F5346',
          }}
        >
          <a
            href={row['jud_url']}
            target='_blank'
            style={{
              color: '#1977db'
            }}
          >
            {row[column.dataKey]}
          </a>
        </Tooltip>
      )
    }

    if (dataKey === 'opinion') {
      return (
        <Tooltip
          placement="bottom"
          arrow
          title="點擊複製見解"
          onClick={() => copyToClipboard(row[column.dataKey])}
          sx={{
            cursor: 'pointer',
            backgroundColor: '#D6B894',
            color: '#5F5346',
          }}
        >
          <div 
            style={{ cursor: 'pointer' }}
          >
            {row[column.dataKey]}
          </div>
        </Tooltip>
      )
    }
    return <div>{row[column.dataKey]}</div>

  }

  function rowContent(_index: number, row: Data) {
    return (
      <React.Fragment>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            align={column.numeric || false ? 'left' : 'center'}
            style={{
              fontSize: '1rem',
            }}
          >
            {contentFormat(row, column, column.dataKey)}
          </TableCell>
        ))}
      </React.Fragment>
    );
  }

  // ================================

  const searchOpening = useSelector((state: RootState) => state.result.advanceSearchOpen)

  const advanceSearchOpenHandler = () => {
    if (searchOpening) {
      disPatch(setAdvanceSearchOpen(false))
    } else {
      disPatch(setAdvanceSearchOpen(true))
    }
  }

  return (
    <div style={{marginLeft: '-30px'}}>
      <div style={{ marginTop: '0px' }}>
        {(['left'] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <SearchButton
              endIcon={<SavedSearchIcon />}
              onClick={() => advanceSearchOpenHandler()}
            >
              進階搜尋
            </SearchButton>
          </React.Fragment>
        ))}
      </div>
      {/* <div style={{width: '70%', position: 'relative', float: 'right' }}> */}
      <div style={{ marginTop: '10px' }}>
        <Paper style={{ height: '90vh', width: '100%' }}>
          <TableVirtuoso
            data={tableData}
            components={VirtuosoTableComponents}
            fixedHeaderContent={fixedHeaderContent}
            itemContent={rowContent}
          />
        </Paper>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSnackBar}
        message="已複製見解"
        autoHideDuration={2000}
        onClose={() => setOpenSnackBar(false)}
      >
        <SnackbarContent
          style={{
            backgroundColor: 'white',
            color: 'black',
            display: 'flex',
            alignItems: 'center',
            width: '100px' 
          }}
          message={
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <CheckCircleIcon style={{ color: 'green', marginRight: '10px' }} />
              已複製見解
            </span>
          }
  />
      </Snackbar>
    </div>

  );
}

export default ResultPage;