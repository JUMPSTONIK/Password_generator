import './App.sass';
import { Checker } from './components/Checker/Checker';
import { CheckBoxes } from './container/CheckBoxes';
import { useAppSelector, useAppDispatch } from './hooks/reducerHooks';

function App() {
    const checkBoxes = useAppSelector((state) => state.generator.checkTexts);
    console.log(checkBoxes);
    return (
        <div className="" style={{ backgroundColor: 'white' }}>
            <CheckBoxes>
                {checkBoxes.map((text) => (
                    <Checker key={text} text={text} />
                ))}
            </CheckBoxes>
        </div>
    );
}

export default App;
