import React from 'react';
import { Button } from '@mui/material';

export const ButtonCloseWithProps = ({ style, onclick }) => {
    return (
        <Button style={style} onClick={onclick}>
            X
        </Button>
    );
};
