import React, { InputHTMLAttributes } from 'react'

import './styles.css'

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const InputLogin: React.FC<IInputProps> = ({ ...rest }) => {
    
    return (
        <form>
            <input type="text" name="name" className="question" id="nme" required autoComplete="off"/>
            <label htmlFor="nme"><span>What's your name?</span></label>

        </form>






)
    };

export default InputLogin
