import React from 'react';
import TextField from '@mui/material/TextField';
import Fade from '@mui/material/Fade';

interface KeywordInputProps {
  isVisible: boolean;
  error?: boolean;
  value: string;
  width?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const KeywordInput: React.FC<KeywordInputProps> = ({
  isVisible,
  error = false,
  value,
  width = '745px',
  onChange,
}) => {
  return (
    <Fade in={isVisible} timeout={300}>
      <div style={{ display: isVisible ? 'block' : 'none', height: '70px' }}>
        <TextField
          value={value}
          placeholder="請輸入關鍵字，或者點選下方隨機關鍵字"
          style={{ width: width }}
          variant="outlined"
          size="small"
          error={error}
          helperText={error ? '關鍵字不得為空' : ''}
          FormHelperTextProps={{
            style: { backgroundColor: '#FDF3E7', textAlign: 'right' },
          }}
          sx={{
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

export default KeywordInput;
