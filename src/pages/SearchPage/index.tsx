// SearchPage.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setResultList, setQueryText } from '@/store/resultSlice';
import {
  useRandomKeyword,
  useRandomOpinion,
  useSearchOpinionByKeyword,
  useSearchOpinionByOpinion,
} from '@/services/query';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

import RadioSelection from './components/RadioSelection';
import KeywordInput from './components/KeywordInput';
import OpinionInput from './components/OpinionInput';
import ActionButtons from './components/ActionButtons';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const handleRandomKeyWord = async () => {
    const { data: newKeywordData } = await refetchKeyword();
    if (newKeywordData?.keyword) {
      setKeyword(newKeywordData?.keyword);
    }
  }

  const [opinion, setOpinion] = useState('');
  const handleOpinionChange = (event: any) => {
    if (event.target.value != undefined) {
      setOpinion(event.target.value);
    }
  };
  const handleRandomOpinion = async () => {
    const { data: newOpinionData } = await refetchOpinion();
    if (newOpinionData?.opinion) {
      setOpinion(newOpinionData?.opinion);
    }
  }

  const handleSearch = async () => {
    const fetchData = value === '1' ? refetchSearchKeyword : refetchSearchOpinion;
    const { data } = await fetchData();
    if (data) {
      if (data.list) {
        dispatch(setResultList(data.list));
      }
      if (data.queryText) {
        dispatch(setQueryText(data.queryText));
      }
    }
  };


  const {
    refetch: refetchKeyword,
    isFetching: keywordLoading,
  } = useRandomKeyword();
  const {
    refetch: refetchOpinion,
    isFetching: opinionLoading,
  } = useRandomOpinion();
  const {
    refetch: refetchSearchKeyword,
    error: opinionError,
    isLoading: searchOpinionLoading,
  } = useSearchOpinionByKeyword(keyword);
  const {
    refetch: refetchSearchOpinion,
    error: keywordError,
    isLoading: searchKeywordLoading,
  } = useSearchOpinionByOpinion(opinion);

  useEffect(() => {
    if (!searchOpinionLoading && !opinionError) {
      navigate('/result');
    }
  }, [searchOpinionLoading]);

  useEffect(() => {
    if (!searchKeywordLoading && !keywordError) {
      navigate('/result');
    }
  }, [searchKeywordLoading]);

  return (
    <Box display="flex" justifyContent="center" alignItems="flex-start" pt={4}>
      <FormControl>
        <Typography variant="h3" sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'custom.layoutBorder.default',
          mb: 8
        }}>
          查詢資訊
        </Typography>

        <RadioSelection value={value} onChange={handleChange} />

        {value === '1' &&
          <KeywordInput
          isVisible={value === '1'}
          value={keyword}
          onChange={handleKeywordChange}
          />}
        {value === '2' &&
          <OpinionInput
            isVisible={value === '2'}
            value={opinion}
            onChange={handleOpinionChange}
          />}

        <ActionButtons
          searchType={value}
          isRandomLoading={keywordLoading || opinionLoading}
          onKeyWordRandomClick={handleRandomKeyWord}
          onOpinionRandomClick={handleRandomOpinion}
          onSubmit={handleSearch}
        />
      </FormControl>
    </Box>
  );
}

export default SearchPage;
