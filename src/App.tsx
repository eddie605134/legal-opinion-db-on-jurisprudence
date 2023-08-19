import React, { useState, useEffect } from 'react';

import IconButton from '@mui/material/IconButton';
import NavigationIcon from '@mui/icons-material/Navigation';
import Tooltip from '@mui/material/Tooltip';

import './App.css'

// 引入routes
import RouterConfig from './router';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  // 監聽視窗的滾動
  useEffect(() => {
    const checkScrollTop = () => {
      // 這裡使用 400 作為示範，你可以更改為 header 的實際高度
      if (!isVisible && window.scrollY > 150) {
        setIsVisible(true);
      } else if (isVisible && window.scrollY <= 150) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [isVisible]);

  // 滾動到頁面頂部的函式
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <RouterConfig />
      {isVisible && (
        <Tooltip
          title="回到頂部"
        >
          <IconButton 
            aria-label="go-top" 
            color="primary"
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '15px',
              right: '15px',
              zIndex: 1000,
              backgroundColor: 'rgb(20, 71, 113)',
              color: 'white',
            }}
          >
            TOP
            {/* <NavigationIcon /> */}
          </IconButton>
        </Tooltip>
      
      )}
    </div>
  );
}
