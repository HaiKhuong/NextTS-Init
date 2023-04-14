import React, { JSXElementConstructor, ReactElement, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface INavigationScrollProps {
    children: React.ReactNode;
}
// ==============================|| NAVIGATION SCROLL TO TOP ||============================== //

const NavigationScroll = ({ children }: INavigationScrollProps) => {
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    return <>{children || null}</>;
};

export default NavigationScroll;
