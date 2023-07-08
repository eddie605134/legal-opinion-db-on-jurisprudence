import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '@/store/counterSlice';
import { RootState, AppDispatch } from '@/store';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MapPage() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        flexDirection="column"
        height="calc(100vh - 48px)" // Adjusting for the height of TabsComponent
      >
        <Typography variant="h3">{counter}</Typography>
        <Box mt={3}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => dispatch(increment())}
          >
            Increment
          </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={() => dispatch(decrement())}
            style={{marginLeft: "10px"}}
          >
            Decrement
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default MapPage;
