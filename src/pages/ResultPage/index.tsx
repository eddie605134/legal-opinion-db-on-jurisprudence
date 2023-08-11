import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '@/store/counterSlice';
import { RootState, AppDispatch } from '@/store';
import { Grid, Box } from '@mui/material';

import Result from './Result';

function ResultPage() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <Box marginLeft={5} marginRight={5}>
      <Grid container sx={{ margin: '20px' }}>
        <Grid item xs={12}>
          <Result />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ResultPage;
