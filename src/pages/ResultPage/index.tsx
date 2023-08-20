import React from 'react';
import { Grid, Box } from '@mui/material';

import Result from './components/Result';
import FloatSearchIcon from '@/pages/ResultPage/components/FloatSearchIcon';

const floatButton = [
  {
    text: '回地圖頁',
    path: '/map',
  },
  {
    text: '回查詢頁',
    path: '/search',
  },
]

function ResultPage() {
  return (
    <Box marginLeft={5} marginRight={5} marginBottom={2}>
      <Grid container sx={{ margin: '20px' }}>
        <Grid item xs={12}>
          <Result />
          {
            floatButton.map((btn, index) => (
              <FloatSearchIcon
                key={index}
                num={index}
                text={btn.text}
                path={btn.path} />
            ))
          }
        </Grid>
      </Grid>
    </Box>
  );
}

export default ResultPage;
