import React from 'react';

interface inputTypes {
    text: string;
}

export const Checker = (props: inputTypes) => {
    console.log(props.text);
    return (
        <label>
            <input style={{ fontSize: '20px' }} type={`checkbox`} />
            <p>{props.text}</p>
        </label>
    );
};
