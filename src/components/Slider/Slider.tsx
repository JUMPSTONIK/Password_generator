import React from 'react';
import { useAppSelector } from '../../hooks/reducerHooks';
import { useGenerator } from '../../hooks/useGenerator';
import './_slider.sass';
export const Slider = () => {
    const { handleSliderChange, sliderPercentage } = useGenerator();
    const { sliderValue } = useAppSelector((state) => state.generator);
    return (
        <section className="slider">
            <input
                style={{ backgroundSize: `${sliderPercentage}% 100%` }}
                type="range"
                min="0"
                max="20"
                value={sliderValue}
                onChange={handleSliderChange}
                className="slider--input"
            ></input>
        </section>
    );
};
