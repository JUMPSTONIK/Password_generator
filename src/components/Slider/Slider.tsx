import React from 'react';
import { useAppSelector } from '../../hooks/reducerHooks';
import { useGenerator } from '../../hooks/useGenerator';
import "./_slider.sass"
export const Slider = () => {
    const {handleSliderchange} = useGenerator()
    const {sliderValue} = useAppSelector(state => state.generator)
    return <div className='slider'>
        <input type="range" min="0" max="20" value={sliderValue} onChange={handleSliderchange} className="slider--input"></input>
    </div>;
};
