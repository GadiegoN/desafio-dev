import React from 'react';
import { Input } from './style';

export const InputComponet = ({ type, placeholder, value, onChange, mask }) => {
    return (
        <Input
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            mask={mask}
        />
    )
}