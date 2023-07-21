import React, { ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '@/store/counterSlice';
import { RootState, AppDispatch } from '@/store';
import {
  Grid,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Information = () => {
  const supremeCourt = '最高法院';

  const [selectedRadio, setSelectedRadio] = useState(''); // 儲存選中的 radio 值

  const radioItems = [
    { id: '1', label: '臺灣高等法院' },
    { id: '2', label: '臺灣高等法院臺中分院' },
    { id: '3', label: '臺灣高等法院臺南分院' },
    { id: '4', label: '臺灣高等法院高雄分院' },
    { id: '5', label: '臺灣高等法院花蓮分院' },
    { id: '6', label: '臺灣高等法院金門分院' },
  ];

  const accordionData = [
    {
      theme: 'xxx主題',
      details: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
    {
      theme: 'ooo主題',
      details: 'ooooooooooooooooooooooooooooooooooooooooooooo',
    },
  ];

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;

    setSelectedRadio(selectedValue);
  };
  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <RadioGroup value={selectedRadio} onChange={handleRadioChange}>
          <FormControlLabel
            value={'0'}
            control={<Radio />}
            label={supremeCourt}
          />
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
            }}
          >
            {radioItems.map((item) => (
              <Box m={1} key={item.id}>
                <FormControlLabel
                  value={item.label}
                  control={<Radio />}
                  label={item.label}
                />
              </Box>
            ))}
          </Box>
        </RadioGroup>
      </Box>
      <FormLabel>台北地方法院</FormLabel>
      <FormLabel>裁判日期：民國85年1月1日～民國111年12月31日</FormLabel>
      <FormLabel>共計xxxxxx篇民事案件判決書</FormLabel>
      <FormLabel>共找出oooooo筆見解</FormLabel>
      {accordionData.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{ backgroundColor: 'lightgray' }}
          >
            <Typography>{`最常見的見解${index + 1}：${item.theme}`}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.details}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Information;
