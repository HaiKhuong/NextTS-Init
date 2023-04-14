import React, { forwardRef } from 'react';

// material-ui
import { Card, CardContent, CardHeader, Divider, Typography, SxProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles/createTheme';

// constant
const headerSX = {
    '& .MuiCardHeader-action': { mr: 0 }
};

interface IMainCardProps {
    border?: boolean;
    boxShadow?: boolean;
    children?: React.ReactNode;
    content?: boolean;
    contentClass?: string;
    contentSX?: SxProps<Theme>;
    darkTitle?: boolean;
    secondary?: React.ReactNode | string | object;
    shadow?: string;
    sx?: SxProps<Theme>;
    title?: React.ReactNode | string | object;
    elevation?: number;
}
// ==============================|| CUSTOM MAIN CARD ||============================== //

const MainCard = forwardRef((props: IMainCardProps, ref: any) => {
    const {
        border = true,
        boxShadow,
        children,
        content = true,
        contentClass = '',
        contentSX = {},
        darkTitle,
        secondary,
        shadow,
        sx = {},
        title,
        ...others
    } = props;
    const theme = useTheme();

    return (
        <Card
            ref={ref}
            {...others}
            sx={{
                border: border ? '1px solid' : 'none',
                borderColor: theme.palette.primary[200] + 25,
                ':hover': {
                    boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
                },
                ...sx
            }}
        >
            {/* card header and action */}
            {title && (
                <CardHeader
                    sx={headerSX}
                    title={(darkTitle ? <Typography variant="h3">{title as React.ReactNode}</Typography> : title) as React.ReactNode}
                    action={secondary as React.ReactNode}
                />
            )}

            {/* content & header divider */}
            {title && <Divider />}

            {/* card content */}
            {content && (
                <CardContent sx={contentSX} className={contentClass}>
                    {children}
                </CardContent>
            )}
            {!content && children}
        </Card>
    );
});

export default MainCard;
