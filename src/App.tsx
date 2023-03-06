import './App.sass';
import { Button } from './components/Button/Button';
import { CharacterField } from './components/CharacterField/CharacterField';
import { Slider } from './components/Slider/Slider';
import { Title } from './components/Title/Title';
import { CheckBoxes } from './container/CheckBoxes/CheckBoxes';
import { Meter } from './container/Meter/Meter';
import { PasswordGenerator } from './container/PasswordGenerator/PasswordGenerator';
import { Settings } from './container/Settings/Settings';

function App() {
    // console.log(checkBoxes);
    return (
        <main className="password_generator">
            <Title title={`Password Generator`} />
            <PasswordGenerator />
            <Settings>
                <CharacterField/>
                <Slider/>
                <CheckBoxes/>
                <Meter />
                <Button/>
            </Settings>
        </main>
    );
}

export default App;
