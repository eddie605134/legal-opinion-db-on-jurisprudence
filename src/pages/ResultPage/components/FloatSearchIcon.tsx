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
  const advanceSearchOpen = useSelector((state: RootState) => state.result.advanceSearchOpen);

  return (
    <div style={{
      // display: tabVisible || advanceSearchOpen ? 'none' : 'block',
      position: 'fixed',
      top: !tabVisible && !advanceSearchOpen ? `${20 + num * 55}px` : -80,
      left: '7px',
      backgroundColor: '#D6B894',
      color: '#5F5346',
      fontWeight: 'bold',
      borderRadius: '5px',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      padding: '5px',
      border: '5px solid #5F5346',
      opacity: !tabVisible && !advanceSearchOpen ? 1 : 0.3,
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