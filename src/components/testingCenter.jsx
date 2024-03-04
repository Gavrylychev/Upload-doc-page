import React from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const TestingCenter = ({ text, testCenterValue, handleChangeTestCenterValue }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            <Typography sx={{ minWidth: '150px' }}>{text}</Typography>
            <FormControl sx={{ minWidth: '150px' }} size="small">
                <InputLabel
                    id="select-client"
                    sx={{
                        color: '#0b0b5c',
                    }}
                >
                    Select Client
                </InputLabel>
                <Select
                    sx={{ padding: '14px, 14px, 12px, 14px', borderRadius: '10px' }}
                    labelId="select-client"
                    value={testCenterValue}
                    label="Select Client"
                    onChange={handleChangeTestCenterValue}
                >
                    <MenuItem value={3}>Center1</MenuItem>
                    <MenuItem value={4}>Center2</MenuItem>
                    <MenuItem value={5}>Center3</MenuItem>
                </Select>
            </FormControl>
            <AccessTimeIcon sx={{ transform: 'rotate(90deg)', marginLeft: '10px', color: '#0b0b5c' }} />
        </Box>
    );
};
