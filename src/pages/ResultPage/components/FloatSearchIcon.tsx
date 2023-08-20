import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { useNavigate } from 'react-router-dom';

interface FloatSearchIconProps {
  text?: string;
  num?: number;
  path: string;
}

const FloatSearchIcon: React.FC<FloatSearchIconProps> = ({ text, num = 1, path }) => {
  const navigate = useNavigate();
  const tabVisible = useSelector((state: RootState) => state.result.tabObservable);

  return (
    <div style={{
      display: tabVisible ? 'none' : 'block',
      position: 'fixed',
      top: `${20 + num * 55}px`,
      left: '7px',
      backgroundColor: '#D6B894',
      color: '#5F5346',
      borderRadius: '5px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      padding: '5px',
      border: '5px solid #5F5346',
    }}
      onClick={() => {
        navigate(path)
      }}
    >
      {text}
    </div>
  )
}

export default FloatSearchIcon