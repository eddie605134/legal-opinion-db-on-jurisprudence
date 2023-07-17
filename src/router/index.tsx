import React, { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import Loading from '@/components/common/Loading';
import ResultPage from '@/pages/ResultPage';

const HomePage = lazy(() => import('@/pages/HomePage'));
const MapPage = lazy(() => import('@/pages/MapPage'));
const SearchPage = lazy(() => import('@/pages/SearchPage'));

const RouterConfig = () => {
  const routing = useRoutes([
    { 
      path: '/', 
      element: <HomePage />,
      children: [
        { path: 'map', element: <MapPage /> },
        { path: 'search', element: <SearchPage /> },
        { path: 'result', element: <ResultPage /> },
        { path: '/', element: <MapPage /> },  // 當路由是 '/' 時，預設導向 '/map'
      ],
    },
    // 更多routes可以在這裡添加
  ]);

  return (
    <Suspense fallback={<Loading />}>
      {routing}
    </Suspense>
  );
};

export default RouterConfig;
