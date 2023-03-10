import React from 'react';
import { useAppSelector } from '../../hooks/reducerHooks';
import { useGenerator } from '../../hooks/useGenerator';
import { levelTypes } from '../../utils/generatorSliceTypes';
import './level.sass';

export const Level = (props: levelTypes) => {
    const { getStrengthClass } = useGenerator();
    const strength = useAppSelector((state) => state.generator.strength);

    return (
        <div
            className={
                strength >= props.conditional
                    ? getStrengthClass(strength)
                    : 'level1'
            }
        ></div>
    );
};
