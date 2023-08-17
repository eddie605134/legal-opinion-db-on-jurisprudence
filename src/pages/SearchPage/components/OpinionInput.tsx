import React from 'react';
import TextField from '@mui/material/TextField';
import Fade from '@mui/material/Fade';

interface OpinionInputProps {
  isVisible: boolean;
  value: string;
  width?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const OpinionInput: React.FC<OpinionInputProps> = ({
  isVisible,
  value,
  width = '745px',
  onChange,
}) => {
  return (
    <Fade in={isVisible} timeout={300}>
      <div style={{ display: isVisible ? 'block' : 'none', height: '295px' }}>
        <TextField
          value={value}
          placeholder="請輸入見解"
          multiline
          rows={10}
          style={{ width: width }}
          sx={{
            fontSize: '1.2rem',
            backgroundColor: 'white',
            '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: 'primary.main',
            }
          }}
          inputProps={{ style: { fontSize: '1.2rem' } }}
          onChange={onChange}
        />
      </div>
    </Fade>
  );
};

export default OpinionInput;
