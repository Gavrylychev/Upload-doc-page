import React from 'react';
import { Button } from '@mui/material';

export const ButtonWithProps = ({ btnText, color, variant, style, onclick }) => {
    return (
        <Button variant={variant} color={color} style={style} onClick={onclick}>
            {btnText}
        </Button>
    );
};
