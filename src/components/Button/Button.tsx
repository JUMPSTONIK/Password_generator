import { IconArrowRight } from '../../assets/images/IconArrowRight';
import { useGenerator } from '../../hooks/useGenerator';
import './_button.sass'

export const Button = () => {
    const {createPassword} = useGenerator()
    return <button className='button' onClick={createPassword}> <span>Generate</span><span><IconArrowRight/></span> </button>;
};
