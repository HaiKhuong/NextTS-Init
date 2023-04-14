import React, { useState } from 'react';

// material-ui
import { InputAdornment, OutlinedInput, SxProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles/createTheme';
import { IconSearch } from '@tabler/icons-react';

interface ISearchBoxProps {
    className: string;
    placeholder: string;
    sx: SxProps<Theme>;
}
// ==============================|| SEARCH BOX ||============================== //

const SearchBox = ({ placeholder, sx, ...others }: ISearchBoxProps) => {
    const [value, setValue] = useState<string>('');
    const theme = useTheme();

    return (
        <OutlinedInput
            sx={{ width: '100%', pr: 1, pl: 2, my: 2, ...sx }}
            id="input-search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder || '"Search options"'}
            startAdornment={
                <InputAdornment position="start">
                    <IconSearch stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
                </InputAdornment>
            }
            aria-describedby="search-helper-text"
            inputProps={{
                'aria-label': 'weight'
            }}
            {...others}
        />
    );
};
export default SearchBox;
