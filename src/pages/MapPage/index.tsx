import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
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
