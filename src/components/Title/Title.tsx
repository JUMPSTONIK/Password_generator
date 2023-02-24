import React from 'react';

interface titleTypes {
    title: string;
}

export const Title = (props: titleTypes) => {
    return <h1 className="title">{props.title}</h1>;
};
