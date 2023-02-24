import React from 'react';
interface checkBoxesType {
    children: JSX.Element[];
}
export const CheckBoxes = (props: checkBoxesType) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {props.children}
        </div>
    );
};
