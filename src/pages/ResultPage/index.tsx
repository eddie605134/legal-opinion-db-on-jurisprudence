import React from 'react';
import { Grid, Box } from '@mui/material';

import Result from './components/Result';

function ResultPage() {
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
