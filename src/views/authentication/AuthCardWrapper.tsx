// material-ui
import { Box } from '@mui/material';

// project import
import React from 'react';
import MainCard from '@/ui-component/cards/MainCard';

interface IAuthCardWrapperProps {
    children: React.ReactNode;
}
// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

const AuthCardWrapper = ({ children, ...other }: IAuthCardWrapperProps) => (
    <MainCard
        sx={{
            maxWidth: { xs: 400, lg: 475 },
            margin: { xs: 2.5, md: 3 },
            '& > *': {
                flexGrow: 1,
                flexBasis: '50%'
            }
        }}
        content={false}
        {...other}
    >
        <Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>{children}</Box>
    </MainCard>
);

export default AuthCardWrapper;
