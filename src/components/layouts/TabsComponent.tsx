import React from 'react';
import { styled } from '@mui/system';
import { useNavigate, useLocation } from 'react-router-dom';

import { tabs } from '@/constants';

const StyledNav = styled('nav')(({ theme }) => ({
  zIndex: 1,
  paddingLeft: '7px',
  background: theme.palette.background.default
}));

const StyledTab = styled('a')(({theme}) => ({
  display: 'inline-block',
  padding: '.3em 2em 0',
  textDecoration: 'none',
  color: theme.palette.custom.layoutBorder.default,
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
    background: theme.palette.primary.main,
    border: `7px solid ${theme.palette.custom.layoutBorder.default}`,
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
      background: theme.palette.custom.contentBackground.default,
      marginBottom: '-.26em',
      '@media (max-width: 1050px)': {
        marginBottom: '-0.3em',
        marginLeft: '-2px',
      }
    }
  },
  '@media (max-width: 1050px)': {
    fontSize: '18px',
  }
}));

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
      {
        tabs.map((tab) => (
          <StyledTab
            key={tab.index}
            className={currentTabIndex === tab.index ? 'selected' : ''}
            onClick={(e) => handleChange(e, tab.index)}
            sx={{ zIndex: tab.zIndex }}
          >
            {tab.label}
          </StyledTab>
      ))}
    </StyledNav>
  );
};

export default TabsComponent;
