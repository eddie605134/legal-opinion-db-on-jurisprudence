// HomePage.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Header from '@/components/layouts/Header'
import TabsComponent from '@/components/layouts/TabsComponent';

const Sider = () => {
  return (
    <div></div>
  );
}

const MainContent = () => {
  return (
    <CardContent sx={{
      border: '4px solid #5F5346',
      background: '#FDF3E7',
      }}>
      <Outlet />
    </CardContent>
  );
}

const HomePage = () => {

  return (
    <>
      <Header />
      <Box sx={{ p: 6, pt: 0, flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <Sider />
          </Grid>
          <Grid xs={8}>
            <Card>
          <TabsComponent />
          <MainContent />
            </Card>
            </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
