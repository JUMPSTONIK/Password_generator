import './App.sass';
import { Button } from './components/Button/Button';
import { Checker } from './components/Checker/Checker';
import { Slider } from './components/Slider/Slider';
import { Title } from './components/Title/Title';
import { CheckBoxes } from './container/CheckBoxes/CheckBoxes';
import { Meter } from './container/Meter/Meter';
import { PasswordGenerator } from './container/PasswordGenerator/PasswordGenerator';
import { Settings } from './container/Settings/Settings';
import { useAppSelector} from './hooks/reducerHooks';

function App() {
    const checkBoxes = useAppSelector((state) => state.generator.checkBoxes);
    // console.log(checkBoxes);
    return (
        <div className="">
            <Title title={`Password Generator`} />
            <PasswordGenerator />
            <Settings>
                <Slider/>
                <CheckBoxes>
                    {checkBoxes.map((checkBox) => (
                        <Checker key={checkBox.text} text={checkBox.text} value={checkBox.value} />
                    ))}
                </CheckBoxes>
                <Meter />
                <Button/>
            </Settings>
        </div>
    );
}

export default App;
