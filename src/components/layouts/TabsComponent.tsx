import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate, useLocation } from 'react-router-dom';

const TabsComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    switch(newValue){
      case 0:
        navigate("/map");
        break;
      case 1:
        navigate("/search");
        break;
      default:
        navigate("/map");
    }
  };

  return (
    <Tabs
      value={location.pathname.includes('search') ? 1 : 0}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="Map Page" />
      <Tab label="Search Page" />
    </Tabs>
  );
};

export default TabsComponent;
