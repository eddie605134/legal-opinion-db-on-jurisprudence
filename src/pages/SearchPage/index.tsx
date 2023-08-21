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
    setError(false);
    setValue((event.target as HTMLInputElement).value);
  };

  const [error, setError] = useState(false);

  const [keyword, setKeyword] = useState('');
  const handleKeywordChange = (event: any) => {
    if (error) setError(false);
    if (event.target.value != undefined) {
      setKeyword(event.target.value);
    }
  };
  const handleRandomKeyWord = async () => {
    if (error) setError(false);
    const { data: newKeywordData } = await refetchKeyword();
    if (newKeywordData?.keyword) {
      setKeyword(newKeywordData?.keyword);
    }
  }

  const [opinion, setOpinion] = useState('');
  const handleOpinionChange = (event: any) => {
    if (error) setError(false);
    if (event.target.value != undefined) {
      setOpinion(event.target.value);
    }
  };
  const handleRandomOpinion = async () => {
    if (error) setError(false);
    const { data: newOpinionData } = await refetchOpinion();
    if (newOpinionData?.opinion) {
      setOpinion(newOpinionData?.opinion);
    }
  }

  const handleSearch = async () => {
    // 檢查輸入值是否為空值
    if (value === '1' && keyword === '') {
      setError(true);
      return;
    }
    if (value === '2' && opinion === '') {
      setError(true);
      return;
    }

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
    isFetching: searchOpinionLoading,
    isSuccess: searchOpinionSuccess,
  } = useSearchOpinionByKeyword(keyword);
  const {
    refetch: refetchSearchOpinion,
    error: keywordError,
    isFetching: searchKeywordLoading,
    isSuccess: searchKeywordSuccess,
  } = useSearchOpinionByOpinion(opinion);

  useEffect(() => {
    if (searchOpinionSuccess) {
      navigate('/result');

      setTimeout(() => {
        window.scrollTo({ top: 150, behavior: 'smooth' });
      }, 300)
    }
  }, [searchOpinionSuccess]);

  useEffect(() => {
    if (searchKeywordSuccess) {
      navigate('/result');

      setTimeout(() => {
        window.scrollTo({ top: 150, behavior: 'smooth' });
      }, 300)
    }
  }, [searchKeywordSuccess]);

  return (
    <Box display="flex" justifyContent="center" alignItems="flex-start" pt={4}>
      <FormControl>
        <Typography variant="h3" sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'custom.layoutBorder.default',
          mb: 6
        }}>
          搜尋資訊
        </Typography>

        <RadioSelection value={value} onChange={handleChange} />

        {value === '1' &&
          <KeywordInput
          isVisible={value === '1'}
          value={keyword}
          width="850px"
          error={error}
          onChange={handleKeywordChange}
          />}
        {value === '2' &&
          <OpinionInput
            isVisible={value === '2'}
            value={opinion}
          width="850px"
          error={error}
            onChange={handleOpinionChange}
          />}

        <ActionButtons
          searchType={value}
          isRandomLoading={
            keywordLoading || opinionLoading || searchOpinionLoading || searchKeywordLoading
          }
          isSearchLoading={
            keywordLoading || opinionLoading || searchOpinionLoading || searchKeywordLoading}
          onKeyWordRandomClick={handleRandomKeyWord}
          onOpinionRandomClick={handleRandomOpinion}
          onSubmit={handleSearch}
        />
      </FormControl>
    </Box>
  );
}

export default SearchPage;
