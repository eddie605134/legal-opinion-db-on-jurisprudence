import React from 'react';
import { LoadingButton } from '@mui/lab'; 
import CreateIcon from '@mui/icons-material/Create';

type SearchButtonProps = {
  children: React.ReactNode;
  endIcon?: React.ReactNode;
  isLoading?: boolean;
  onClick: (() => void) | any;
  style?: React.CSSProperties;
};

export const SearchButton: React.FC<SearchButtonProps> = ({
  children,
  endIcon = <CreateIcon />,
  isLoading = false,
  style = {},
  onClick
}) => {
  return (
    <LoadingButton
      type="button"
      variant="contained"
      endIcon={endIcon}
      loading={isLoading}
      sx={{
        textAlign: 'justify',
        color: '#5F5346',
        fontSize: '1rem',
        fontWeight: 600,
        '&:hover': {
          backgroundColor: 'rgba(191, 163, 128)'
        }
      }}
      style={style}
      onClick={onClick}
    >
      {children}
    </LoadingButton>
  );
}
