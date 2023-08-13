// ResultPage.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { setAdvanceSearchOpen } from '@/store/resultSlice';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Checkbox, Container, Drawer, FormControl, FormControlLabel, FormGroup, InputLabel, List, ListItem, ListItemButton, ListItemText, MenuItem, Select, SelectChangeEvent, Slider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import {
  SearchButton,
} from '@/components/common/buttons';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';


type Anchor = 'top' | 'left' | 'bottom' | 'right';

function createData(
  courthouse: string,
  date: string,
  url: string,
  casenumber: string,
  describe: string,
) {
  return { courthouse, date, url, casenumber, describe };
}
const rows = [
  createData('台中地方法院', '2008/11/11', 'URL', '台灣台中地方法院民事判決97年度重訴第188號', '亦即在公有公共設施因設置或管理有欠缺之情況下，依客觀之觀察，...。'),
  createData('桃園地方法院', '2018/7/5', 'URL', '台灣台中地方法院民事判決107年度重訴第586號', '亦即在公有公共設施因設置或管理有欠缺之情況下，依客觀之觀察，...。'),
  createData('花蓮地方法院', '1999/12/12', 'URL', '台灣台中地方法院民事判決88年度重訴第118號', '亦即在公有公共設施因設置或管理有欠缺之情況下，依客觀之觀察，...。'),
];

function ResultPage() {
  const disPatch = useDispatch()
  const [courthouse, setCourthouse] = React.useState('');
  const courthouseChange = (event: SelectChangeEvent) => {
    setCourthouse(event.target.value as string);
  };

  const [area, setArea] = React.useState('');
  const areaChange = (event: SelectChangeEvent) => {
    setArea(event.target.value as string);
  };

  const [month, setMonth1] = React.useState('');
  const monthChange = (event: SelectChangeEvent) => {
    setMonth1(event.target.value as string);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent | any) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };
  // 待修改！！
  const list = (anchor: Anchor) => (
    <div style={{width: '360px', margin: '20px 0px 0px 20px'}}>
      <label style={{marginLeft: '140px'}}>進階搜尋</label>
      <FormControl fullWidth style={{ marginTop: '10px', width: '330px' }}>
      <InputLabel id="courthouse-select-label">法院別</InputLabel>
      <Select
        labelId="courthouse-select-label"
        id="courthouse-select"
        value={courthouse}
        label="法院別"
        onChange={courthouseChange}
      >
        <MenuItem value={10}>最高法院</MenuItem>
        <MenuItem value={20}>高等法院</MenuItem>
        <MenuItem value={30}>地方法院</MenuItem>
      </Select>
    </FormControl><FormControl fullWidth style={{ marginTop: '10px', width: '330px' }}>
        <InputLabel id="area-select-label">（依法院別預設）</InputLabel>
        <Select
          labelId="area-select-label"
          id="area-select"
          value={area}
          label="地區"
          onChange={areaChange}
        >
          <MenuItem value={10}>台北地方法院</MenuItem>
          <MenuItem value={20}>台中地方法院</MenuItem>
          <MenuItem value={30}>新竹地方法院</MenuItem>
        </Select>
      </FormControl><FormGroup style={{ marginLeft: '20px' }}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="引述" />
      </FormGroup>
      <div style={{whiteSpace: 'nowrap'}}>
      <FormControl fullWidth style={{ width: '70px' }}>
        <InputLabel id="courthouse-select-label">110</InputLabel>
        <Select
          labelId="courthouse-select-label"
          id="courthouse-select"
          value={courthouse}
          label=""
          onChange={monthChange}
        >
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
        </Select>
      </FormControl>
      <label style={{ verticalAlign: 'bottom' }}>年</label>
      <FormControl fullWidth style={{ width: '60px' }}>
        <InputLabel id="courthouse-select-label">1</InputLabel>
        <Select
          labelId="courthouse-select-label"
          id="courthouse-select"
          value={courthouse}
          label=""
          onChange={monthChange}
        >
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
        </Select>
      </FormControl>
      <label style={{ verticalAlign: 'bottom' }}>月</label>
      <label style={{ verticalAlign: 'bottom' }}>-</label>
      <FormControl fullWidth style={{ width: '70px' }}>
        <InputLabel id="courthouse-select-label">112</InputLabel>
        <Select
          labelId="courthouse-select-label"
          id="courthouse-select"
          value={courthouse}
          label=""
          onChange={monthChange}
        >
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
        </Select>
      </FormControl>
      <label style={{ verticalAlign: 'bottom' }}>年</label>
      <FormControl fullWidth style={{ width: '60px' }}>
        <InputLabel id="courthouse-select-label">12</InputLabel>
        <Select
          labelId="courthouse-select-label"
          id="courthouse-select"
          value={courthouse}
          label=""
          onChange={monthChange}
        >
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
        </Select>
      </FormControl>
      <label style={{ verticalAlign: 'bottom' }}>月</label>
      </div>
      </div>
  )
  return (
    <div style={{margin: '20px'}}>
      <div style={{ marginTop: '10px' }}>
        {(['left'] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <SearchButton
              endIcon={<SavedSearchIcon />}
              onClick={ () => {
                disPatch(setAdvanceSearchOpen(true))
              }}
            >
              進階搜尋
            </SearchButton>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      {/* <div style={{width: '70%', position: 'relative', float: 'right' }}> */}
      <div style={{ marginTop: '10px' }}>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">地院</TableCell>
                <TableCell align="center">裁判日期</TableCell>
                <TableCell align="center">全文連結URL</TableCell>
                <TableCell align="center">案號</TableCell>
                <TableCell align="center">見解</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.courthouse}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.courthouse}
                  </TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell>{row.url}</TableCell>
                  <TableCell>{row.casenumber}</TableCell>
                  <TableCell>{row.describe}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/* <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="flex-start"
        height="calc(100vh - 48px)"
        pt={8}
      >
      </Box> */}
    </div>

  );
}

export default ResultPage;
