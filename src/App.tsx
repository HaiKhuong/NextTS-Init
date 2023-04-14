import React from 'react';
import { useSelector } from 'react-redux';

import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Routes from '@/routes';

// defaultTheme
import themes from '@/themes';
import './locales/i18n';

// project imports
import NavigationScroll from '@/layout/NavigationScroll';
import { RootState } from '@/store/types';

// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state: RootState) => state.customization);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
