// SearchPage.tsx
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import { useRandomKeyword, useRandomOpinion, useSearchOpinionByKeyword, useSearchOpinionByOpinion } from '@/services/query';


const SearchPage = () => {

  const [value, setValue] = useState('1');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [keyword, setKeyword] = useState('');
  const handleKeywordChange = (event: any) => {
    if (event.target.value != undefined) {
      setKeyword(event.target.value);
    }
  };
  const handleRandomKeyWord = () => {
    refetchKeyword();
    if (randomKeyword?.keyword != undefined) {
      setKeyword(randomKeyword?.keyword);
    }
  }

  const [opinion, setOpinion] = useState('');
  const handleOpinionChange = (event: any) => {
    if (event.target.value != undefined) {
      setOpinion(event.target.value);
    }
  };
  const handleRandomOpinion = () => {
    refetchOpinion();
    if (randomOpinion?.opinion != undefined) {
      setOpinion(randomOpinion?.opinion);
    }
  }

  const handleSearch = () => {
    if (value == '1') {
      handleSearchKeyword();
    }
    else {
      handleSearchOpinion();
    }
  }
  const handleSearchKeyword = () => {
    refetchSearchKeyword();
    console.log(resultkeyword);
  }
  const handleSearchOpinion = () => {
    refetchSearchOpinion();
    console.log(resultopinion);
  }

  const { data: randomKeyword, refetch: refetchKeyword } = useRandomKeyword();
  const { data: randomOpinion, refetch: refetchOpinion } = useRandomOpinion();
  const { data: resultkeyword, refetch: refetchSearchKeyword } = useSearchOpinionByKeyword(keyword);
  const { data: resultopinion, refetch: refetchSearchOpinion } = useSearchOpinionByOpinion(opinion);

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
                style={{ width: '745px' }}
                disabled={value == '2'}
                variant="outlined"
                size="small"
                value={keyword}
                onChange={handleKeywordChange}
              />
              <Button onClick={handleRandomKeyWord} variant="outlined" disabled={value == '2'}>隨機關鍵字</Button>
            </div>
            <FormControlLabel value="2" control={<Radio />} label="見解搜尋" />
            <div>
              <textarea
                style={{ width: '745px' }}
                disabled={value == '1'}
                rows={7}
                value={opinion}
                onChange={handleOpinionChange}
              >
              </textarea>
              <Button style={{ width: '100px' }} onClick={handleRandomOpinion} variant="outlined" disabled={value == '1'}>隨機見解</Button>
            </div>
          </RadioGroup>
          <Link to={'/result'}>
            <Button
              style={{ width: '100px' }}
              variant="contained"
              color="success"
              endIcon={<SendIcon />}
              onClick={handleSearch}
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
