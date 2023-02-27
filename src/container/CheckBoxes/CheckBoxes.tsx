import { Checker } from '../../components/Checker/Checker';
import { useAppSelector } from '../../hooks/reducerHooks';
import './_checkBoxes.sass'

export const CheckBoxes = () => {
    const checkBoxes = useAppSelector((state) => state.generator.checkBoxes);
    
    return (
        <div className='checkboxes'>
            {checkBoxes.map((checkBox) => (
                <Checker key={checkBox.text} text={checkBox.text} value={checkBox.value} />
            ))}
        </div>
    );
};
