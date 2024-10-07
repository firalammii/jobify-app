import React from 'react';

const Button = (props) => {

    const { label, onClickFunction, bgColor, textColor, type } = props;

    const button = {
        minWidth: "150px",
        whiteSpace: "nowrap",
        height: "80%",
        borderRadius: "3px",
        border: "none",
        backgroundColor: bgColor,
        color: textColor,
    };

    return (
        <button
            type={type}
            style={button}
            onClick={onClickFunction}
        >
            {label}
        </button>
    );
};

export default Button;