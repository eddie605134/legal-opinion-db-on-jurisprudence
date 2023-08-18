import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = () => {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh"
      sx={{
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: '#d6b8947b',
        zIndex: 9999,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
