// HomePage.tsx
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; 
import { styled } from '@mui/system';

import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Header from '@/components/layouts/Header'
import TabsComponent from '@/components/layouts/TabsComponent';

type StyledProps = {
  flexBasis: string;
};

const AnimatedGrid = styled(Grid)<StyledProps>(({ theme, flexBasis }) => ({
  flexBasis: flexBasis,
  transition: 'flex-basis 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
}))

const Sider = () => {
  return (
    <div></div>
  );
}

const MainContent = () => {
  return (
    <CardContent sx={{
      border: '6px solid #5F5346',
      background: '#FDF3E7',
      borderTopRightRadius: '.5em',
      minHeight: '80vh'
    }}>
      <Outlet />
    </CardContent>
  );
}

const HomePage = () => {
  const location = useLocation();
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
            <Card sx={{ boxShadow: 'unset', background: '#C0E5FE' }}>
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
