import { FormControl, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';
import { ExpandMore } from '@mui/icons-material';

export const DefaultSelect = ({ sx, label, helperText, helperTextColor, defaultValue = 'Active' }) => {
    return (
        <FormControl variant='standard' sx={{ minWidth: '100%', alignItems: 'center', ...sx }}>
            {label && (
                <Typography
                    sx={{
                        transform: 'unset',
                    }}
                >
                    {label}
                </Typography>
            )}
            {!label && (
                <>
                    {helperText && (
                        <Typography
                            color={helperTextColor || '#A8A8A7'}
                            sx={{
                                alignSelf: 'flex-start',
                            }}
                        >
                            {helperText}
                        </Typography>
                    )}
                    <Select
                        IconComponent={ExpandMore}
                        sx={{
                            width: '100%',
                            border: '1px solid #E2E2EA',
                            borderRadius: '6px',
                            height: 30,
                            '&::before': {
                                border: 'none',
                            },
                            '.MuiSelect-select': {
                                py: '5px',
                                fontSize: 14,
                                pl: 2,
                            },
                            '& .MuiSelect-icon': {
                                right: '12px',
                                zIndex: 1,
                                color: 'primary.main',
                            },
                        }}
                        defaultValue={defaultValue}
                    >
                        <MenuItem value={defaultValue}>{defaultValue}</MenuItem>
                        <MenuItem value={`${defaultValue} 1`}>{defaultValue} 1</MenuItem>
                        <MenuItem value={`${defaultValue} 2`}>{defaultValue} 2</MenuItem>
                    </Select>
                </>
            )}
        </FormControl>
    );
};
