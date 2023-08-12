// HomePage.tsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import { useTheme  } from '@mui/system';

import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import Header from '@/components/layouts/Header'
import TabsComponent from '@/components/layouts/TabsComponent';
import { MainContent } from '@/components/layouts/MainContent';
import { AnimatedGrid } from '@/components/common/AnimatedGrid';

import useChangeTitle from '@/hooks/useChangeTitle';
import TaiwanSVG from './MapPage/TaiwanSVG';

const Sider = () => {
  return (
    <div>
      <TaiwanSVG />
    </div>
  );
}

const HomePage = () => {
  const location = useLocation();
  const theme = useTheme();
  useChangeTitle();

  const pathIsMap = location.pathname === '/map';
  // 1. 設置初始狀態以防動畫失效
  const [sideFlexBasis, setSideFlexBasis] = useState('0%');
  const [mainFlexBasis, setMainFlexBasis] = useState('100%');

  // 2. 在 useEffect 中設置目标狀態
  useEffect(() => {
    setSideFlexBasis(pathIsMap ? '33.33%' : '0%');
    setMainFlexBasis(pathIsMap ? '66.66%' : '100%');
  }, [pathIsMap]);
  return (
    <>
      <Header />
      <Box sx={{ p: 6, pt: 0, flexGrow: 1 }}>
        <Grid container>
          <AnimatedGrid flexBasis={sideFlexBasis} xs={pathIsMap ? 4 : 0}>
            <Sider />
          </AnimatedGrid>
          <AnimatedGrid flexBasis={mainFlexBasis} xs={ pathIsMap ? 8 : 12 }>
            <Card sx={{
              boxShadow: 'unset',
              background: theme.palette.background.default
            }}>
              <TabsComponent />
              <MainContent />
            </Card>
          </AnimatedGrid >
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
