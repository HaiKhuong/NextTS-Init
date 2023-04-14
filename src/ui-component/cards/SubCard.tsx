import React, { forwardRef } from 'react';

// material-ui
import { Card, CardContent, CardHeader, Divider, SxProps, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles/createTheme';

interface ISubCardProps {
    children: React.ReactNode;
    content?: boolean;
    contentClass?: string;
    darkTitle?: boolean;
    secondary?: React.ReactNode | string | object;
    sx?: SxProps<Theme>;
    contentSX?: SxProps<Theme>;
    title: React.ReactNode | string | object;
}
// ==============================|| CUSTOM SUB CARD ||============================== //

const SubCard = forwardRef((props: ISubCardProps, ref: any) => {
    const { children, content = true, contentClass, darkTitle, secondary, sx = {}, contentSX = {}, title, ...others } = props;
    const theme = useTheme();

    return (
        <Card
            ref={ref}
            sx={{
                border: '1px solid',
                borderColor: theme.palette.primary.light,
                ':hover': {
                    boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
                },
                ...sx
            }}
            {...others}
        >
            {/* card header and action */}
            {!darkTitle && title && (
                <CardHeader
                    sx={{ p: 2.5 }}
                    title={(<Typography variant="h5">{title as React.ReactNode}</Typography>) as React.ReactNode}
                    action={secondary as React.ReactNode}
                />
            )}
            {darkTitle && title && (
                <CardHeader
                    sx={{ p: 2.5 }}
                    title={(<Typography variant="h4">{title as React.ReactNode}</Typography>) as React.ReactNode}
                    action={secondary as React.ReactNode}
                />
            )}

            {/* content & header divider */}
            {title && (
                <Divider
                    sx={{
                        opacity: 1,
                        borderColor: theme.palette.primary.light
                    }}
                />
            )}

            {/* card content */}
            {content && (
                <CardContent sx={{ p: 2.5, ...contentSX }} className={contentClass || ''}>
                    {children}
                </CardContent>
            )}
            {!content && children}
        </Card>
    );
});

export default SubCard;
