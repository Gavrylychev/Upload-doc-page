import React, { useState } from 'react';
import { Modal, Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { ButtonCloseWithProps } from '../components/closeButton';
import { FileUpload } from '../components/fileUpload';
import './documentUpload.scss';

export const DocumentUploadModal = ({ open, handleClose }) => {
    const [documentName, setDocumentName] = useState('');

    const handleChangeSelectValue = (event) => {
        setDocumentName(event.target.value);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            style={{
                margin: '60px 155px',
                backgroundColor: '#FFFFFF',
                borderRadius: '15px',
                boxShadow:
                    '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
            }}
            hideBackdrop
        >
            <Box>
                <Box>
                    <ButtonCloseWithProps
                        style={{
                            color: '#fff',
                            backgroundColor: '#0b0b5c',
                            width: '40px',
                            height: '40px',
                            padding: '10px',
                            borderRadius: '10px',
                            marginTop: '35px',
                            marginLeft: '35px',
                        }}
                        onclick={handleClose}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography
                            sx={{
                                color: '#0b0b5c',
                                fontWeight: 800,
                                paddingBottom: '17px',
                                borderBottom: '1px solid #d7d7d7',
                            }}
                            variant="h4"
                        >
                            Document Upload
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            marginTop: '50px',
                            marginLeft: '100px',
                            display: 'flex',
                        }}
                    >
                        <Box sx={{ minWidth: 520 }}>
                            <Box>
                                <FormControl fullWidth size="small">
                                    <InputLabel
                                        id="import-name"
                                        sx={{
                                            color: '#0b0b5c',
                                            fontWeight: 600,
                                            fontSize: '13px',
                                        }}
                                    >
                                        Select Import Name
                                    </InputLabel>
                                    <Select
                                        sx={{ padding: '14px, 14px, 12px, 14px', borderRadius: '10px' }}
                                        labelId="import-name"
                                        value={documentName}
                                        label="Select Import Name"
                                        onChange={handleChangeSelectValue}
                                    >
                                        <MenuItem value={1}>Document1</MenuItem>
                                        <MenuItem value={2}>Document2</MenuItem>
                                        <MenuItem value={3}>Document3</MenuItem>
                                    </Select>
                                </FormControl>
                                <Typography
                                    sx={{
                                        color: '#0b0b5c',
                                        fontWeight: 600,
                                        borderTop: '1px solid #d7d7d7',
                                        paddingTop: '20px',
                                        marginTop: '20px',
                                        width: '285px',
                                        fontSize: '13px',
                                    }}
                                >
                                    Select a manifest that you'd like to import
                                </Typography>
                                <FileUpload />
                            </Box>
                        </Box>
                        <Box>right</Box>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};
