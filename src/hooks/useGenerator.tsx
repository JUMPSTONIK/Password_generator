import React from 'react';

interface levelsTypes {
    [key: number]: { class: string; type: string };
}

const strengthLevels: levelsTypes = {
    5: { class: 'level5', type: 'STRONG' },
    4: { class: 'level4', type: 'MEDIUM' },
    3: { class: 'level3', type: 'WEAK' },
    2: { class: 'level2', type: 'TOO WEAK' },
    1: { class: 'level1', type: '' },
};

export const useGenerator = () => {
    const getStrengthClass = (strength: number) => {
        return strengthLevels[strength].class;
    };
    const getStrengthType = (strength: number) => {
        return strengthLevels[strength].type;
    };
    return { getStrengthClass, getStrengthType };
};
