import React from 'react';
import { useGenerator } from '../../hooks/useGenerator';
import { useAppSelector } from '../../hooks/reducerHooks';
import { Level } from '../../components/Level/Level';

export const Meter = () => {
    const { getStrengthType } = useGenerator();
    const { strength, levels } = useAppSelector((state) => state.generator);
    return (
        <div>
            <p>Strength</p>
            <div>
                <p>{getStrengthType(strength)}</p>
                <div>
                    {levels.map((level) => (
                        <Level conditional={level.conditional} />
                    ))}
                </div>
            </div>
        </div>
    );
};
