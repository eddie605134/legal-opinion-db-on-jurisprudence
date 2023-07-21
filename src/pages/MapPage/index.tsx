import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '@/store/counterSlice';
import { RootState, AppDispatch } from '@/store';
import { Grid, Box } from '@mui/material';

import TaiwanSVG from './TaiwanSVG';
import Information from './Information';

function MapPage() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <Box marginLeft={5} marginRight={5}>
      <Grid container sx={{ margin: '20px' }}>
        <Grid item xs={6}>
          <TaiwanSVG />
        </Grid>
        <Grid item xs={6}>
          <Information />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MapPage;
