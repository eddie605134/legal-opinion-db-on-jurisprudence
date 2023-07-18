import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '@/store/counterSlice';
import { RootState, AppDispatch } from '@/store';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary, Card, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

function MapPage() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div style={{margin: '20px'}}>
      <div style={{width: '35%', position: 'relative', float: 'left' }}>
        <img src='../../asserts/images/taiwan_map.png'></img>
      </div>
      <div style={{width: '65%', position: 'relative', float: 'left' }}>
        <div style={{whiteSpace:'nowrap'}}>
        <RadioGroup>
          <pre>
          <FormControlLabel style={{width: 'fit-content'}} value="1" control={<Radio />} label="最高法院" />
          <br />
          <FormControlLabel style={{width: 'fit-content'}} value="2" control={<Radio />} label="臺灣高等法院" />
          <FormControlLabel style={{width: 'fit-content'}} value="3" control={<Radio />} label="臺灣高等法院臺中分院" />
          <FormControlLabel style={{width: 'fit-content'}} value="4" control={<Radio />} label="臺灣高等法院臺南分院" />
          <FormControlLabel style={{width: 'fit-content'}} value="5" control={<Radio />} label="臺灣高等法院高雄分院" />
          <br />
          <FormControlLabel style={{width: 'fit-content'}} value="6" control={<Radio />} label="臺灣高等法院花蓮分院" />
          <FormControlLabel style={{width: 'fit-content'}} value="7" control={<Radio />} label="臺灣高等法院金門分院" />
          </pre>
        </RadioGroup>
        </div>
        <FormLabel>台北地方法院</FormLabel>
        <br />
        <FormLabel>裁判日期：民國85年1月1日～民國111年12月31日</FormLabel>
        <br />
        <FormLabel>共計xxxxxx篇民事案件判決書</FormLabel>
        <br />
        <FormLabel>共找出oooooo筆見解</FormLabel>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{backgroundColor: 'lightgray'}}
          >
            <Typography>最常見的見解1：xxx主題</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{backgroundColor: 'lightgray'}}
          >
            <Typography>最常見的見解2：ooo主題</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              ooooooooooooooooooooooooooooooooooooooooooooo
              ooooooooooooooooooooooooooooooooooooooooooooo
              ooooooooooooooooooooooooooooooooooooooooooooo
              ooooooooooooooooooooooooooooooooooooooooooooo
              ooooooooooooooooooooooooooooooooooooooooooooo
              ooooooooooooooooooooooooooooooooooooooooooooo
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default MapPage;
