import React from 'react';
import TextField from '@mui/material/TextField';
import Fade from '@mui/material/Fade';

interface OpinionInputProps {
  isVisible: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const OpinionInput: React.FC<OpinionInputProps> = ({
  isVisible,
  value,
  onChange,
}) => {
  return (
    <Fade in={isVisible} timeout={300}>
      <div style={{ display: isVisible ? 'block' : 'none', height: '175px' }}>
        <TextField
          value={value}
          placeholder="請輸入見解"
          multiline
          rows={5}
          style={{ width: '745px' }}
          sx={{
            backgroundColor: 'white',
            '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: 'primary.main',
            }
          }}
          onChange={onChange}
        />
      </div>
    </Fade>
  );
};

export default OpinionInput;
