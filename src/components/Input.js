import React from 'react';

function Input({ type, name, placeholder }) {
    return (
        <div className="mdc-text-field">
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="mdc-text-field__input"
            />
        </div>
    );
}

export default Input;