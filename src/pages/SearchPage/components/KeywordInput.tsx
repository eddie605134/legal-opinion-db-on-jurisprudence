import React from 'react';
import TextField from '@mui/material/TextField';
import Fade from '@mui/material/Fade';

interface KeywordInputProps {
  isVisible: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const KeywordInput: React.FC<KeywordInputProps> = ({
  isVisible,
  value,
  onChange,
}) => {
  return (
    <Fade in={isVisible} timeout={300}>
      <div style={{ display: isVisible ? 'block' : 'none', height: '70px' }}>
        <TextField
          value={value}
          placeholder="請輸入關鍵字"
          style={{ width: '745px' }}
          variant="outlined"
          size="small"
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

export default KeywordInput;