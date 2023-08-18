// HomePage.tsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import { useTheme } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '@/store';
import { setAdvanceSearchOpen } from '@/store/resultSlice';

import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import Header from '@/components/layouts/Header'
import TabsComponent from '@/components/layouts/TabsComponent';
import { MainContent } from '@/components/layouts/MainContent';
import { AnimatedGrid } from '@/components/common/AnimatedGrid';

import useChangeTitle from '@/hooks/useChangeTitle';
import TaiwanSVG from './MapPage/TaiwanSVG';
import AdvancedSearchDrawer from './ResultPage/components/AdvancedSearchDrawer';

const Sider = () => {
  const location = useLocation();
  const advanceSearchOpen = useSelector((state: RootState) => state.result.advanceSearchOpen);

  const pathIsMap = location.pathname === '/map';
  const pathIsResult = location.pathname === '/result'
  return (
    <div style={{
      position: 'sticky',
      top: '20px',
    }}>
      {pathIsMap && <TaiwanSVG />}
      {pathIsResult && advanceSearchOpen && <AdvancedSearchDrawer />}
    </div>
  );
}

const HomePage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const theme = useTheme();

  const advanceSearchOpen = useSelector((state: RootState) => state.result.advanceSearchOpen);
  useChangeTitle();

  const pathIsMap = location.pathname === '/map';
  const pathIsSearch = location.pathname === '/search';
  const pathIsResult = location.pathname === '/result'
  // 1. 設置初始狀態以防動畫失效
  const [sideFlexBasis, setSideFlexBasis] = useState('0%');
  const [mainFlexBasis, setMainFlexBasis] = useState('100%');

  // 2. 在 useEffect 中設置目标狀態
  useEffect(() => {
    setSideFlexBasis((pathIsMap || (pathIsResult && advanceSearchOpen)) ? '33.33%' : '0%');
    setMainFlexBasis((pathIsMap || (pathIsResult && advanceSearchOpen)) ? '66.66%' : '100%');

    if (pathIsMap || pathIsSearch) {
      dispatch(setAdvanceSearchOpen(false));
    }
  }, [
    pathIsMap,
    pathIsSearch,
    pathIsResult,
    advanceSearchOpen
  ]);

  return (
    <>
      <Header />
      <Box sx={{ p: 6, pt: 0, flexGrow: 1 }}>
        <Grid container>
          <AnimatedGrid flexBasis={sideFlexBasis} xs={(pathIsMap || (pathIsResult && advanceSearchOpen)) ? 5 : 0}>
            <Sider />
          </AnimatedGrid>
          <AnimatedGrid flexBasis={mainFlexBasis} xs={(pathIsMap || (pathIsResult && advanceSearchOpen)) ? 7 : 12}>
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
