import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { levelTypes } from '../components/Level/Level';

interface checkBox{
    value: boolean;
    text: string;
    }
interface GeneratorStateTypes {
    strength: number;
    password: string;
    checkBoxes: checkBox[];
    levels: levelTypes[];
}



const initialState: GeneratorStateTypes = {
    strength: 5,
    password: '',
    checkBoxes: [{
        value: false,
        text:'Include Uppercase Letters',
    },{
        value:false,
        text:'Include Lowercase Letters',
    },{
        value: false,
        text:'Include Numbers',
    },{
        value:false,
        text:'Include Symbols',
    }
    ],
    levels: [
        {
            conditional: 2,
        },
        {
            conditional: 3,
        },
        {
            conditional: 4,
        },
        {
            conditional: 5,
        },
    ],
};

export const generatorSlice = createSlice({
    name: 'generator',
    initialState,
    reducers: {
        increment: (state) => {
            state.strength += 1;
        },
        decrement: (state) => {
            state.strength -= 1;
        },
        createPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setCheckboxValue: (state, action: PayloadAction<string>) =>{
            const checkboxIndex = state.checkBoxes.findIndex(checkBox => checkBox.text === action.payload)
            let newCheckboxes = [...state.checkBoxes]
            newCheckboxes[checkboxIndex].value = !state.checkBoxes[checkboxIndex].value
            state.checkBoxes = newCheckboxes
        }

}});

export const { increment, decrement, createPassword,setCheckboxValue } = generatorSlice.actions;

export default generatorSlice.reducer;
