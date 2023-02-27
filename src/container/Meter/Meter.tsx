
import { Level } from '../../components/Level/Level';
import { useAppSelector } from '../../hooks/reducerHooks';
import { useGenerator } from '../../hooks/useGenerator';
import './_meter.sass'

export const Meter = () => {
    const {levels, strength} = useAppSelector(state => state.generator)
    const {getStrengthType} = useGenerator()
    return <div className='meter'>
        <h2>Strength</h2>
        <div className='meter--levels'>
            <p>{getStrengthType(strength)}</p>
            <div className='meter--levels--indicator'>
                {levels.map( state => <Level key={state.conditional} conditional={state.conditional}/>)}
            </div>
        </div>
    </div>;
};
