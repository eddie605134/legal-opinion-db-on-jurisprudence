import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import CreateIcon from '@mui/icons-material/Create';

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
      <LoadingButton
        variant="contained"
        endIcon={<CreateIcon />}
        loading={isRandomLoading}
        sx={{
          textAlign: 'justify',
          color: '#5F5346',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: 'rgba(191, 163, 128)'
          }
        }}
        onClick={ () => onRandom() }
      >
        {searchType === '1' ? '隨機關鍵字' : '隨機見解'}
      </LoadingButton>
      <LoadingButton
        variant="contained"
        color="success"
        // loading={isLoading}
        endIcon={<SendIcon />}
        sx={{ fontWeight: 600 }}
        onClick={onSubmit}
      >
        送出
      </LoadingButton>
    </Box>
  );
};

export default ActionButtons;
