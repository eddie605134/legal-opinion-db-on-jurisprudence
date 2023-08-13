import React from 'react';
import { Typography, FormControlLabel, Radio, RadioGroup } from '@mui/material';

interface RadioSelectionProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioSelection: React.FC<RadioSelectionProps> = ({ value, onChange }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <Typography
        component="span"
        variant="h6"
        id="demo-controlled-radio-buttons-group"
        sx={{ mr: 1 }}
      >
        查詢條件：
      </Typography>
      <RadioGroup row value={value} onChange={onChange}>
        <FormControlLabel value="1" control={<Radio color="secondary"/>} label="關鍵字搜尋" />
        <FormControlLabel value="2" control={<Radio color="secondary"/>} label="見解搜尋" />
      </RadioGroup>
    </div>
  );
}

export default RadioSelection;
