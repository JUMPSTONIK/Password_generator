import { Level } from '../../components/Level/Level';
import { useAppSelector } from '../../hooks/reducerHooks';
import { useGenerator } from '../../hooks/useGenerator';
import './_meter.sass';

export const Meter = () => {
    const { levelsConditions, strength } = useAppSelector(
        (state) => state.generator
    );
    const { getStrengthType } = useGenerator();
    return (
        <section className="meter">
            
            <h2>STRENGTH</h2>
            <div className="meter--levels">
                <p>{getStrengthType(strength)}</p>
                <div className="meter--levels--indicator">
                    {levelsConditions.map((state) => (
                        <Level
                            key={state.conditional}
                            conditional={state.conditional}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
