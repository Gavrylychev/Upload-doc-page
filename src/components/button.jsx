import React from 'react';
import { Button } from '@mui/material';

export const ButtonWithProps = ({ btnText, color, variant, style, onclick, type }) => {
    return (
        <Button variant={variant} color={color} style={style} onClick={onclick} type={type}>
            {btnText}
        </Button>
    );
};
