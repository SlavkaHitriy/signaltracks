import { Box, ButtonBase, Stack, Typography } from '@mui/material';
import React from 'react';
import { DefaultCircularProgress } from '@/ui/DefaultCircularProgress/index.js';
import { ArrowIcon } from '@/assets/icons/ArrowIcon.jsx';
import { Dropdown } from '@/ui/Dropdown/index.js';
import { SearchInput } from '@/components/SearchInput/index.js';
import { DefaultSelect } from '@/ui/DefaultSelect/index.js';
import { PlusIcon } from '@/assets/icons/PlusIcon.jsx';
import { DefaultDataGrid } from '@/ui/DefaultDataGrid/index.js';
import { columns, rows } from './data/devices.jsx';

export const Devices = () => {
    return (
        <Stack width={'100%'}>
            <Stack p={3} gap={2}>
                <Stack direction={'row'} gap={10} alignItems={'center'} mb={3}>
                    <Stack direction={'row'} alignItems={'center'} gap={5}>
                        <DefaultCircularProgress size={120} value={62} fontSize={32} color={'#0090FF'} />
                        <Stack>
                            <Typography fontWeight={500} letterSpacing={1.7} mb={3} textTransform={'uppercase'}>
                                TOTAL DEVICES
                            </Typography>
                            <Stack mb={1} direction={'row'} gap={1}>
                                <Box
                                    display={'flex'}
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                    width={24}
                                    height={24}
                                    bgcolor={'green.light'}
                                    borderRadius={'50%'}
                                    sx={{
                                        svg: {
                                            fill: '#1AD598',
                                            width: 10,
                                            height: 10,
                                        },
                                    }}
                                >
                                    <ArrowIcon />
                                </Box>
                                <Typography fontWeight={500} fontSize={16} color={'green.main'}>
                                    +16,24 %
                                </Typography>
                            </Stack>
                            <Typography fontWeight={500} fontSize={34}>
                                563
                            </Typography>
                            <Typography textTransform={'uppercase'} color={'#809FB8'}>
                                LAST 30 DAYS
                            </Typography>
                        </Stack>
                    </Stack>
                    <Box height={100} width={'1px'} bgcolor={'#E1E3E8'} flexShrink={0} />
                    <Stack flex={1}>
                        <Stack
                            sx={{
                                transform: 'translateY(-12px)',
                            }}
                            direction={'row'}
                            gap={3}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                        >
                            <Typography fontWeight={500} letterSpacing={1.7} textTransform={'uppercase'}>
                                Statistics
                            </Typography>
                            <Stack direction={'row'} alignItems={'center'} gap={1}>
                                <Box width={32} height={32} bgcolor={'primary.main'} borderRadius={'50%'} />
                                <Dropdown>
                                    <Box>
                                        <Typography fontSize={14} fontWeight={500}>
                                            Austin Robertson
                                        </Typography>
                                        <Typography fontSize={12} color={'#696974'}>
                                            Marketing Administrator
                                        </Typography>
                                    </Box>
                                </Dropdown>
                            </Stack>
                        </Stack>
                        <Stack direction={'row'} gap={8}>
                            <Box>
                                <Stack mb={1} direction={'row'} gap={1}>
                                    <Box
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        width={24}
                                        height={24}
                                        bgcolor={'green.light'}
                                        borderRadius={'50%'}
                                        sx={{
                                            svg: {
                                                fill: '#1AD598',
                                                width: 10,
                                                height: 10,
                                            },
                                        }}
                                    >
                                        <ArrowIcon />
                                    </Box>
                                    <Typography fontWeight={500} fontSize={16} color={'green.main'}>
                                        +16,24 %
                                    </Typography>
                                </Stack>
                                <Typography fontWeight={500} fontSize={34}>
                                    413
                                </Typography>
                                <Typography textTransform={'uppercase'} color={'#809FB8'}>
                                    ASSIGNED
                                </Typography>
                            </Box>
                            <Box>
                                <Stack mb={1} direction={'row'} gap={1}>
                                    <Box
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        width={24}
                                        height={24}
                                        bgcolor={'green.light'}
                                        borderRadius={'50%'}
                                        sx={{
                                            svg: {
                                                fill: '#1AD598',
                                                width: 10,
                                                height: 10,
                                            },
                                        }}
                                    >
                                        <ArrowIcon />
                                    </Box>
                                    <Typography fontWeight={500} fontSize={16} color={'green.main'}>
                                        +16,24 %
                                    </Typography>
                                </Stack>
                                <Typography fontWeight={500} fontSize={34}>
                                    50
                                </Typography>
                                <Typography textTransform={'uppercase'} color={'#809FB8'}>
                                    AVAILABLE
                                </Typography>
                            </Box>
                            <Box>
                                <Stack mb={1} direction={'row'} gap={1}>
                                    <Box
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        width={24}
                                        height={24}
                                        bgcolor={'green.light'}
                                        borderRadius={'50%'}
                                        sx={{
                                            svg: {
                                                fill: '#1AD598',
                                                width: 10,
                                                height: 10,
                                            },
                                        }}
                                    >
                                        <ArrowIcon />
                                    </Box>
                                    <Typography fontWeight={500} fontSize={16} color={'green.main'}>
                                        +16,24 %
                                    </Typography>
                                </Stack>
                                <Typography fontWeight={500} fontSize={34}>
                                    03
                                </Typography>
                                <Typography textTransform={'uppercase'} color={'#809FB8'}>
                                    DISABLED
                                </Typography>
                            </Box>
                            <Box>
                                <Stack mb={1} direction={'row'} gap={1}>
                                    <Box
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        width={24}
                                        height={24}
                                        bgcolor={'green.light'}
                                        borderRadius={'50%'}
                                        sx={{
                                            svg: {
                                                fill: '#1AD598',
                                                width: 10,
                                                height: 10,
                                            },
                                        }}
                                    >
                                        <ArrowIcon />
                                    </Box>
                                    <Typography fontWeight={500} fontSize={16} color={'green.main'}>
                                        +16,24 %
                                    </Typography>
                                </Stack>
                                <Typography fontWeight={500} fontSize={34}>
                                    40
                                </Typography>
                                <Typography textTransform={'uppercase'} color={'#809FB8'}>
                                    ORDERED
                                </Typography>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction={'row'} gap={2}>
                    <SearchInput />
                    <Box maxWidth={200} width={'100%'}>
                        <DefaultSelect defaultValue={'Groups'} />
                    </Box>
                    <Box maxWidth={200} width={'100%'}>
                        <DefaultSelect defaultValue={'Status'} />
                    </Box>
                    <Box maxWidth={200} width={'100%'}>
                        <DefaultSelect defaultValue={'Devices'} />
                    </Box>
                    <ButtonBase
                        sx={{
                            height: 30,
                            px: 2,
                            py: 1,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            bgcolor: 'secondary.main',
                            borderRadius: '6px',
                        }}
                    >
                        <PlusIcon />
                        <Typography fontSize={14} color={'common.white'}>
                            New Device
                        </Typography>
                    </ButtonBase>
                </Stack>
            </Stack>
            <Stack flex={1} borderTop={'1px solid #E1E3E8'} direction={'row'}>
                <DefaultDataGrid pageItems={10} pageSizeOptions={[10, 25, 50]} rows={rows} columns={columns} />
            </Stack>
        </Stack>
    );
};
