import React, { InputHTMLAttributes } from 'react';

import './styles.css'

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IInputProps> = ({ ...rest }) => (
    <input {...rest} />
);

export default Input;