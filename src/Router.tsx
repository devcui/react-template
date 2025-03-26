import { Spin } from 'antd';
import { lazy, ReactNode, Suspense } from 'react';
import { Navigate, Route, RouteObject, Routes, useLocation } from 'react-router-dom';
import Blank from './layout/blank';
import { getToken } from './utils/token';

const Home = lazy(() => import('@/pages/home'));
const Login = lazy(() => import('@/pages/login'));

export const Router = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Blank />,
      children: [
        { path: '/', element: lazyLoad(<Home />) },
        { path: '/home', element: lazyLoad(<Home />) }
      ]
    },
    {
      path: '/login',
      element: <Login />
    }
  ];
  return <Routes>{RouteNav(routes)}</Routes>;
};

const lazyLoad = (conponent: ReactNode): ReactNode => {
  return <Suspense fallback={<Spin />}>{conponent}</Suspense>;
};

const handleRedirect = (item: RouteObject) => {
  const location = useLocation();
  const { pathname } = location;
  const token = getToken();
  if (pathname === '/') {
    return <Navigate to="/home" />;
  }
  if (pathname !== '/login' && !token) {
    return <Navigate to="/login" replace={true} />;
  } else {
    return item.element;
  }
};

const RouteNav = (param: RouteObject[]) => {
  return param.map(item => {
    return (
      <Route path={item.path} element={handleRedirect(item)} key={item.path}>
        {item?.children && RouteNav(item.children)}
      </Route>
    );
  });
};
