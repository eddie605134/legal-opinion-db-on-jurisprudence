import React, { useState, useEffect } from 'react';

import IconButton from '@mui/material/IconButton';
import NavigationIcon from '@mui/icons-material/Navigation';
import Tooltip from '@mui/material/Tooltip';

import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';

import './App.css'

// 引入routes
import RouterConfig from './router';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  

  const isMobile = () => {
    if (typeof window === 'undefined' || !window.navigator) {
      return false;
    }
    const userAgent = window.navigator.userAgent;
    return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) && !/iPad/i.test(userAgent);
  };

  // 顯示對話框，如果裝置是移動裝置，但不是 iPad
  const showDialog = isMobile();

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
      <Dialog open={showDialog}>
        <DialogTitle>不支援的裝置</DialogTitle>
        <DialogContent>
          <DialogContentText>
            本系統不適合在手機端使用。請在桌面電腦或平板上訪問本系統。
          </DialogContentText>
        </DialogContent>
      </Dialog>
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
