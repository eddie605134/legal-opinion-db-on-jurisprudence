import React from 'react';
import { LoadingButton } from '@mui/lab'; 
import SendIcon from '@mui/icons-material/Send';

type SubmitButtonProps = {
  children: React.ReactNode;
  endIcon?: React.ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  endIcon = <SendIcon />,
  isLoading = false,
  onClick }) => {
  return (
    <LoadingButton
      variant="contained"
      color="success"
      loading={isLoading}
      endIcon={endIcon}
      sx={{
        fontWeight: 600,
        fontSize: '1rem',
      }}
      onClick={onClick}
    >
    {children}
    </LoadingButton>
  );
}
