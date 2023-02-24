import React from 'react';
import './_checker.sass';
interface inputTypes {
    text: string;
}

export const Checker = (props: inputTypes) => {
    console.log(props.text);
    return (
        <label className="checker">
            <input
                style={{ fontSize: '20px' }}
                type={`checkbox`}
                checked={false}
            />
            <span className="checker--checkmark"></span>
            {props.text}
        </label>
    );
};
