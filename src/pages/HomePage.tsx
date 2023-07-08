// HomePage.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

import TabsComponent from '@/components/layouts/TabsComponent';

const HomePage = () => {

  return (
    <div>
      <TabsComponent />
      <Outlet />
    </div>
  );
};

export default HomePage;
