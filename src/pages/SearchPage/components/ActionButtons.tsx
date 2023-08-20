import React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import CreateIcon from '@mui/icons-material/Create';
import LightbulbIcon from '@mui/icons-material/Lightbulb';


import {
  SearchButton,
  SubmitButton
} from '@/components/common/buttons';

interface ActionButtonsProps {
  searchType: string;
  isRandomLoading: boolean;
  isSearchLoading: boolean;
  onSubmit: () => void;
  onKeyWordRandomClick: () => void;
  onOpinionRandomClick: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  searchType,
  isRandomLoading,
  isSearchLoading,
  onKeyWordRandomClick,
  onOpinionRandomClick,
  onSubmit
}) => {
  const onRandom = () => {
    if (searchType === '1') {
      onKeyWordRandomClick();
    } else {
      onOpinionRandomClick();
    }
  };
  return (
    <Box display="flex" justifyContent="space-between" sx={{ width: '100%' }}>
      <SearchButton
        endIcon={<LightbulbIcon />}
        isLoading={isRandomLoading}
        onClick={ () => onRandom() }
      >
        {searchType === '1' ? '隨機關鍵字' : '隨機見解'}
      </SearchButton>
      <SubmitButton
        isLoading={isSearchLoading}
        endIcon={<SendIcon />}
        onClick={onSubmit}
      >
        送出
      </SubmitButton>
    </Box>
  );
};

export default ActionButtons;
