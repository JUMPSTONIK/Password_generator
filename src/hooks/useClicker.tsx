import React from 'react';

interface clickerType {
    handleMouseDown: (
        setter: React.Dispatch<React.SetStateAction<boolean>>
    ) => void;
    handleMouseUp: (
        setter: React.Dispatch<React.SetStateAction<boolean>>
    ) => void;
}

export const useClicker = (): clickerType => {
    const handleMouseDown = (
        setter: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        setter(true);
    };

    const handleMouseUp = (
        setter: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        setter(false);
    };

    return {
        handleMouseDown,
        handleMouseUp,
    };
};
