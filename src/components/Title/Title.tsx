import React from 'react';
import './_title.sass'

interface titleTypes {
    title: string;
}

export const Title = (props: titleTypes) => {
    return(
    <section>
        <h1 className="title">{props.title}</h1>;
    </section> 
    ) 
};
