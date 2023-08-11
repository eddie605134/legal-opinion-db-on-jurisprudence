import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/system';
import { useNavigate, useLocation } from 'react-router-dom';

const StyledNav = styled('nav')({
  zIndex: 1,
  paddingLeft: '7px',
  background: '#C0E5FE'
});

const StyledTab = styled('a')({
  display: 'inline-block',
  padding: '.3em 2em 0',
  textDecoration: 'none',
  color: '#5F5346',
  position: 'relative',
  margin: '0 -.3em',
  fontSize: '26px',
  zIndex: 2,
  cursor: 'pointer',
  fontWeight: 'bold',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    background: '#D6B894',
    border: '7px solid #5F5346',
    borderBottom: 'none',
    borderRadius: '.5em .5em 0 0',
    borderTopLeftRadius: '3.5em',
    borderTopRightRadius: '999px',
    // transform: 'scale(1.13, 1.3) perspective(.55em) rotateX(5deg)',
    // transformOrigin: 'bottom left',
    cursor: 'pointer',
  },
  '&.selected': {
    zIndex: '5 !important',
    padding: '0.45em 2em 0',
    '&::before': {
      background: '#FDF3E7',
      marginBottom: '-.26em',
    }
  }
});

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

  // 根據 location.pathname 切換tab
  const getTabIndex = (path: string) => {
    if (path.includes('search')) return 1;
    if (path.includes('map')) return 0;
    return 2;
  };

  const currentTabIndex = getTabIndex(location.pathname);

  return (
    <StyledNav>
      <StyledTab className={currentTabIndex === 0 ? 'selected' : ''} onClick={(e) => handleChange(e, 0)} sx={{zIndex: 4}}>系統介紹＆說明</StyledTab>
      <StyledTab className={currentTabIndex === 1 ? 'selected' : ''} onClick={(e) => handleChange(e, 1)} sx={{zIndex: 3}}>查詢</StyledTab>
      <StyledTab className={currentTabIndex === 2 ? 'selected' : ''} onClick={(e) => handleChange(e, 2)} sx={{zIndex: 2}}>查詢結果</StyledTab>
    </StyledNav>
  );
};

export default TabsComponent;
