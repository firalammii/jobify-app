import React from 'react';

const Button = (props) => {

    const { label, onClickFunction, bgColor, textColor, type, style } = props;

    const button = {
        minWidth: "150px",
        whiteSpace: "nowrap",
        height: "80%",
        borderRadius: "3px",
        border: "none",
        ...style
    };

    return (
        <button
            className='hover:scale-105'
            type={type || "button"}
            style={button}
            onClick={onClickFunction}
        >
            {label}
        </button>
    );
};

export default Button;