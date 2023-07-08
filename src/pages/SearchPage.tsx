// SearchPage.tsx
import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function SearchPage() {
  return (
    <div>
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="flex-start"
        height="calc(100vh - 48px)"
        pt={8}
      >
        <TextField 
          label="Search"
          variant="outlined"
          size="small"
        />
      </Box>
    </div>
  );;
}

export default SearchPage;
