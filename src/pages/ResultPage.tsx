// ResultPage.tsx
import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Checkbox, Container, Drawer, FormControl, FormControlLabel, FormGroup, InputLabel, List, ListItem, ListItemButton, ListItemText, MenuItem, Select, SelectChangeEvent, Slider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { relative } from 'path';

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
  const [courthouse, setCourthouse] = React.useState('');
  const courthouseChange = (event: SelectChangeEvent) => {
    setCourthouse(event.target.value as string);
  };

  const [area, setArea] = React.useState('');
  const areaChange = (event: SelectChangeEvent) => {
    setArea(event.target.value as string);
  };
  
  return (
    <div>
      <div style={{  width: '20%', position: 'relative', float: 'left' }}>
        <FormControl fullWidth style={{marginTop: '10px'}}>
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
        </FormControl>
        <FormControl fullWidth style={{marginTop: '10px'}}>
          <InputLabel id="area-select-label">地區</InputLabel>
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
        </FormControl>
        <FormGroup style={{marginLeft: '20px'}}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="引述" />
        </FormGroup>
        <label>年份:</label>
        <br />
        <Slider
          aria-label="Small steps"
          defaultValue={111}
          step={1}
          marks
          min={107}
          max={111}
          valueLabelDisplay="auto"
          style={{width: '250px', marginLeft: '20px'}}
        />
        <br />
        <label>月份:</label>
        <br />
        <Slider
          aria-label="Small steps"
          defaultValue={1}
          step={1}
          marks
          min={1}
          max={12}
          valueLabelDisplay="auto"
          style={{width: '250px', marginLeft: '20px'}}
        />
      </div>
      <div style={{width: '70%', position: 'relative', float: 'left' }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                  <TableCell component="th" scope="row">
                    {row.courthouse}
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
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
