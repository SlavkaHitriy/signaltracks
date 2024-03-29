import { Box, TextField } from '@mui/material';
import React from 'react';

export const DefaultInput = ({ label, placeholder, fixedValue, ...otherProps }) => {
    return (
        <Box position={'relative'} width={'100%'}>
            {fixedValue && (
                <Box
                    position={'absolute'}
                    top={'50%'}
                    left={12}
                    sx={{
                        fontSize: 14,
                        transform: 'translateY(calc(-50% - 2px))',
                    }}
                >
                    {fixedValue}
                </Box>
            )}
            <TextField
                label={label}
                variant='standard'
                InputLabelProps={{
                    shrink: true,
                }}
                placeholder={placeholder}
                sx={{
                    width: '100%',
                    overflow: 'hidden',
                    borderRadius: '6px',
                    '.MuiFormLabel-root': {
                        fontSize: 12,
                        transform: 'unset',
                        color: '#A8A8A7',
                        position: 'static',
                        lineHeight: '1.5',
                        '&.Mui-disabled': {
                            color: 'primary.main',
                        },
                    },
                    '.MuiInput-input': {
                        fontSize: 14,
                        height: 40,
                        py: 0,
                        pr: 2,
                        pl: fixedValue ? 6 : 2,
                        border: '1px solid #E2E2EA',
                        borderRadius: '6px',
                        boxSizing: 'border-box',
                    },
                    '.MuiInputBase-root': {
                        mt: 0,
                        '&::before': {
                            border: 'none',
                        },
                        '&.Mui-disabled': {
                            '&::before': {
                                display: 'none',
                            },
                        },
                    },
                }}
                {...otherProps}
            />
        </Box>
    );
};
