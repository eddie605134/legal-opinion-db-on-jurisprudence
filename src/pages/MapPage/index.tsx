import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Grid, Box } from '@mui/material';

import Information from './Information';

function MapPage() {
  return (
    <Box>
      <Grid container>
        <Information />
      </Grid>
    </Box>
  );
}

export default MapPage;
