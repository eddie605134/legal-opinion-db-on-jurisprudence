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
      case 2:
        navigate("/result");
        break;
      default:
        navigate("/map");
    }
  };

  return (
    <Tabs
      value={location.pathname.includes('search') ? 1 : location.pathname.includes('map') ? 0 : 2}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered
      style={{backgroundColor: '#C3F4FD'}}
    >
      <Tab label="系統介紹＆說明" />
      <Tab label="查詢" />
      <Tab label="查詢結果" disabled />
    </Tabs>
  );
};

export default TabsComponent;
