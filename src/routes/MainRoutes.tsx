import { lazy } from 'react';
import React from 'react';

// project imports
import MainLayout from '@/layout/MainLayout';
import Loadable from '@/ui-component/Loadable';

// dashboard routing
const Dashboard = Loadable(lazy(() => import('@/views/dashboard')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('@/views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('@/views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('@/views/utilities/Shadow')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('@/views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: 'dashboard',
            element: <Dashboard />
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-typography',
                    element: <UtilsTypography />
                },
                {
                    path: 'util-color',
                    element: <UtilsColor />
                },
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
