import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

export const DocumentUploadModal = ({ open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            style={{
                margin: '60px 155px',
                backgroundColor: '#FFFFFF',
                borderRadius: '15px',
                border: '1px solid #000000',
                boxShadow: 'darkgray 3px 10px',
                position: 'static',
            }}
        >
            <Box>
                <Typography>Text in a modal</Typography>
                <Typography>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</Typography>
            </Box>
        </Modal>
    );
};
