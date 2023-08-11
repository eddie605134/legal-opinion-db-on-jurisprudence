import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import { tabs } from '@/constants';


const useChangeTitle = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== '/') {
      const currentTab = tabs.find((tab) => tab.path === location.pathname);
      if (currentTab) {
        document.title = currentTab.label;
      }
    } else {
      document.title = '台灣地圖上的見解資料庫';
    }
  }, [location.pathname])
}

export default useChangeTitle;