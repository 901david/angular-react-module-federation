import React from 'react';


export const Button = ({ buttonText, handler }) => {
    return <button onClick={handler}>{buttonText}</button>
}