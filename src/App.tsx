import { JsxElement } from 'typescript';
import './App.sass';
import { Checker } from './components/Checker/Checker';
import { Level } from './components/Level/Level';
import { Title } from './components/Title/Title';
import { CheckBoxes } from './container/CheckBoxes/CheckBoxes';
import { Meter } from './container/Meter/Meter';
import { PasswordGenerator } from './container/PasswordGenerator/PasswordGenerator';
import { Settings } from './container/Settings/Settings';
import { useAppSelector, useAppDispatch } from './hooks/reducerHooks';

function App() {
    const checkBoxes = useAppSelector((state) => state.generator.checkTexts);
    const levels = useAppSelector((state) => state.generator.levels);
    console.log(checkBoxes);
    return (
        <div className="">
            <Title title={`Password Generator`} />
            <PasswordGenerator />
            <Settings>
                <CheckBoxes>
                    {checkBoxes.map((text) => (
                        <Checker key={text} text={text} />
                    ))}
                </CheckBoxes>
                <Meter />
            </Settings>
        </div>
    );
}

export default App;
