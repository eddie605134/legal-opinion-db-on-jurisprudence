import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '@/store';
import { setFilterValue, setAdvanceSearchOpen } from '@/store/resultSlice';

import { Typography, Card, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { useTheme } from '@mui/system';

const CancelIcon = () => {
  const disPatch = useDispatch()
  return <div>
    <MenuOpenIcon
      onClick={() => disPatch(setAdvanceSearchOpen(false))}
      sx={{
        color: '#5F5346',
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer'
      }} />
  </div>;
}

const AdvancedSearchDrawer = () => {
  const disPatch = useDispatch()
  const theme = useTheme();
  const filterValue = useSelector((state: RootState) => state.result.filterValues);
  return (
    <Card sx={{
      boxShadow: 'unset',
      background: '#FDF3E7',
      minHeight: '85vh',
      width: '90%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '6px solid #5F5346',
      borderRadius: '10px',
      position: 'relative'
    }}>
      <CancelIcon />
      <Typography variant="h5" sx={{
        color: '#5F5346',
        fontWeight: 600,
        pt: 3
      }}>進階搜尋</Typography>
      <FormControl fullWidth style={{ marginTop: '10px', paddingLeft: '8px', paddingRight: '8px'  }}>
      <InputLabel id="courthouse-select-label">法院別</InputLabel>
      <Select
        labelId="courthouse-select-label"
        id="courthouse-select"
        value={filterValue.courtHouse}
        label="法院別"
          onChange={(event: SelectChangeEvent) => disPatch(setFilterValue({courtHouse: event.target.value}))}
      >
        <MenuItem value={10}>最高法院</MenuItem>
        <MenuItem value={20}>高等法院</MenuItem>
        <MenuItem value={30}>地方法院</MenuItem>
      </Select>
      </FormControl>
      <FormControl fullWidth style={{ marginTop: '10px', paddingLeft: '8px', paddingRight: '8px' }}>
        <InputLabel id="area-select-label">（依法院別預設）</InputLabel>
        <Select
          labelId="area-select-label"
          id="area-select"
          value={filterValue.courtArea}
          label="地區"
          onChange={(event: SelectChangeEvent) => disPatch(setFilterValue({courtArea: event.target.value}))}
        >
          <MenuItem value={10}>台北地方法院</MenuItem>
          <MenuItem value={20}>台中地方法院</MenuItem>
          <MenuItem value={30}>新竹地方法院</MenuItem>
        </Select>
      </FormControl>

      <div className="" style={{ display: 'flex', justifyContent: 'start', width: '100%', paddingLeft: '20px' }}>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="引述" />
        </FormGroup>
      </div>
    
      <div style={{whiteSpace: 'nowrap'}}>
        <FormControl>
        <InputLabel id="courthouse-select-label">110</InputLabel>
        <Select
          labelId="courthouse-select-label"
          id="courthouse-select"
          value={filterValue.startYear}
          label=""
          onChange={(event: SelectChangeEvent) => disPatch(setFilterValue({startYear: event.target.value}))}
        >
          <MenuItem value={2023}>2023</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
        </Select>
      </FormControl>
      <label style={{ verticalAlign: 'bottom' }}>年</label>
      <FormControl style={{ width: '60px' }}>
        <InputLabel id="courthouse-select-label">1</InputLabel>
        <Select
          labelId="courthouse-select-label"
          id="courthouse-select"
          value={filterValue.startMonth}
          label=""
          onChange={(event: SelectChangeEvent) => disPatch(setFilterValue({startMonth: event.target.value}))}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
      </FormControl>
      <label style={{ verticalAlign: 'bottom' }}>月</label>
      <label style={{ verticalAlign: 'bottom' }}>-</label>
      <FormControl>
        <InputLabel id="courthouse-select-label">112</InputLabel>
        <Select
          labelId="courthouse-select-label"
          id="courthouse-select"
          value={filterValue.endYear}
          label=""
          onChange={(event: SelectChangeEvent) => disPatch(setFilterValue({endYear: event.target.value}))}
        >
          <MenuItem value={2023}>2023</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
        </Select>
      </FormControl>
      <label style={{ verticalAlign: 'bottom' }}>年</label>
      <FormControl>
        <InputLabel id="courthouse-select-label">12</InputLabel>
        <Select
          labelId="courthouse-select-label"
          id="courthouse-select"
          value={filterValue.endMonth}
          label=""
          onChange={(event: SelectChangeEvent) => disPatch(setFilterValue({endMonth: event.target.value}))}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
      </FormControl>
      <label style={{ verticalAlign: 'bottom' }}>月</label>
      </div>
      </Card>
  )
}

export default AdvancedSearchDrawer;