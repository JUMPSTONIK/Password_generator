import { useAppSelector } from '../../hooks/reducerHooks';
import './_characterField.sass'

export const CharacterField = () => {
    const {sliderValue} = useAppSelector(state => state.generator)
    return <section className='characterField'>
        <p className='characterField--text'>Character Length</p>
        <p className='characterField--amount'>{sliderValue}</p>
    </section>;
};
