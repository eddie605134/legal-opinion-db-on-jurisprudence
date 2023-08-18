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
  const [showCourt, setShowCourt] = React.useState('最高法院');

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
      position: 'relative',
    }}>
      <CancelIcon />
      <Typography variant="h5" sx={{
        color: '#5F5346',
        fontWeight: 600,
        pt: 3
      }}>進階搜尋</Typography>

      {/* 法院別 */}
      <FormControl sx={{
        marginTop: '10px',
        paddingLeft: '8px',
        paddingRight: '8px',
        width: '90%',
        mx: 'auto',
        mb: 2,
      }}>
        <InputLabel id="courthouse-select-label" sx={{
          background: '#FDF3E7',
        }}>法院別</InputLabel>
        <Select
          labelId="courthouse-select-label"
            id="courthouse-select"
            placeholder='請選擇 法院別'
          value={filterValue.courtHouse}
          onChange={(event: SelectChangeEvent) => { 
            setShowCourt(event.target.value);
            disPatch(setFilterValue({ courtHouse: event.target.value }))
          }}
        >
          <MenuItem value={'最高法院'}>最高法院</MenuItem>
          <MenuItem value={'高等法院'}>高等法院</MenuItem>
        </Select>
      </FormControl>

      {/* 法院地區 */}
      {
        showCourt === '高等法院' && (
          <FormControl sx={{
            marginTop: '10px',
            paddingLeft: '8px',
            paddingRight: '8px',
            width: '90%',
            mx: 'auto',
            mb: 4,
          }}>
            <InputLabel id="area-select-label" sx={{
              background: '#FDF3E7',
            }}>最高法院</InputLabel>
            <Select
              labelId="area-select-label"
              id="area-select"
              placeholder='請選擇 地方法院'
              value={filterValue.courtArea}
              onChange={(event: SelectChangeEvent) => disPatch(setFilterValue({courtArea: event.target.value}))}
            >
              <MenuItem value={'臺灣高等法院'}>臺灣高等法院</MenuItem>
              <MenuItem value={'臺灣高等法院花蓮分院'}>臺灣高等法院花蓮分院</MenuItem>
              <MenuItem value={'臺灣高等法院高雄分院'}>臺灣高等法院高雄分院</MenuItem>
              <MenuItem value={'臺灣高等法院臺中分院'}>臺灣高等法院臺中分院</MenuItem>
              <MenuItem value={'臺灣高等法院臺南分院'}>臺灣高等法院臺南分院</MenuItem>
              <MenuItem value={'福建高等法院金門分院'}>福建高等法院金門分院</MenuItem>
            </Select>
          </FormControl>
        )
      }
    
      <div style={{ width: '84%', marginBottom: '28px', display: 'flex', justifyContent: 'space-between' }}>
        <FormControl style={{ width: '45%' }}>
          <InputLabel id="courthouse-select-label" sx={{
          background: '#FDF3E7',
        }}>查詢年分(起)</InputLabel>
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
        <div className="" style={{ paddingTop: '14px' }}>~</div>
        <FormControl style={{ width: '45%' }}>
          <InputLabel id="courthouse-select-label" sx={{
          background: '#FDF3E7',
        }}>查詢月分(起)</InputLabel>
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
      </div>
      <div className="" style={{ width: '84%', marginBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
        <FormControl style={{ width: '45%' }}>
          <InputLabel id="courthouse-select-label" sx={{
          background: '#FDF3E7',
        }}>查詢年分(迄)</InputLabel>
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
        <div className="" style={{ paddingTop: '14px' }}>~</div>
        <FormControl style={{ width: '45%' }}>
          <InputLabel id="courthouse-select-label" sx={{
          background: '#FDF3E7',
        }}>查詢月分(迄)</InputLabel>
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
      </div>
    </Card>
  )
}

export default AdvancedSearchDrawer;