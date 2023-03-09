import { useState } from 'react';
import { IconArrowRight } from '../../assets/images/IconArrowRight';
import { useClicker } from '../../hooks/useClicker';
import { useGenerator } from '../../hooks/useGenerator';
import './_button.sass'

export const Button = () => {
    const [isClick, setIsClick] = useState(false)
    const {handleMouseDown, handleMouseUp} = useClicker()
    const {createPassword} = useGenerator()
    return <button  className='button' id='Generate' aria-label='generateBtn' onClick={createPassword} onMouseDown={() =>handleMouseDown(setIsClick)} onMouseUp={()=>handleMouseUp(setIsClick)}> <span>GENERATE</span><span><IconArrowRight isClick={isClick}/></span> </button>;
};
