import React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import CreateIcon from '@mui/icons-material/Create';

import {
  SearchButton,
  SubmitButton
} from '@/components/common/buttons';

interface ActionButtonsProps {
  searchType: string;
  isRandomLoading: boolean;
  onSubmit: () => void;
  onKeyWordRandomClick: () => void;
  onOpinionRandomClick: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  searchType,
  isRandomLoading,
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
        endIcon={<CreateIcon />}
        isLoading={isRandomLoading}
        onClick={ () => onRandom() }
      >
        {searchType === '1' ? '隨機關鍵字' : '隨機見解'}
      </SearchButton>
      <SubmitButton
        // isLoading={isRandomLoading}
        endIcon={<SendIcon />}
        onClick={onSubmit}
      >
        送出
      </SubmitButton>
    </Box>
  );
};

export default ActionButtons;
