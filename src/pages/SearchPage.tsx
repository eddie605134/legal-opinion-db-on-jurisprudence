// SearchPage.tsx
import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ResultPage from './ResultPage';
import Button from '@mui/material/Button';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';



function SearchPage() {
  
  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <div>
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="flex-start"
        pt={8}
      >
        <FormControl>
          <h1>查詢資訊：</h1>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="1" control={<Radio />} label="關鍵字搜尋" />
            <div>
              <TextField
                style={{width: '745px'}}
                disabled={value=='2'}
                variant="outlined"
                size="small"
              />
              <Button variant="outlined" disabled={value=='2'}>隨機關鍵字</Button>
            </div>
            <FormControlLabel value="2" control={<Radio />} label="見解搜尋" />
            <div>
              <textarea
                style={{width: '745px'}}
                disabled={value=='1'}
                rows={7}
              >
              </textarea>
              <Button style={{width: '100px'}} variant="outlined" disabled={value=='1'}>隨機見解</Button>
            </div>
          </RadioGroup>
          <Link to={'/result'}>
            <Button
              style={{width : '100px'}}
              variant="contained"
              color="success"
              endIcon={<SendIcon />}
            >
              送出
            </Button>
          </Link>
        </FormControl>
      </Box>
    </div>
  );
}

export default SearchPage;
function setValue(value: string) {
  throw new Error('Function not implemented.');
}

