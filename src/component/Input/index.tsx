import React, { InputHTMLAttributes } from 'react';

import './styles.css'

type IInputProps = InputHTMLAttributes<HTMLInputElement>;


type prop = IInputProps

const Input: React.FC<IInputProps> = ({  children, ...rest }) =>  (

        <div className='login-boxs'>
            <div className='user-boxs'>
                <input required {...rest} />
                {children}
            </div>
        </div>

    );
export default Input;