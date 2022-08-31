import React from 'react';
import { ButtonC } from './style';

export const ButtonComponet = ({ Text, onClick, Type = "button" }) => {
    return (
        <ButtonC type={Type} onClick={onClick} variant="contained">
            {Text}
        </ButtonC>
    )
}