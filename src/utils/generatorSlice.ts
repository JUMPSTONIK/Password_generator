import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import { levelTypes } from '../components/Level/Level';

interface GeneratorStateTypes {
    strength: number;
    password: string;
    checkTexts: string[];
    levels: levelTypes[];
}

const initialState: GeneratorStateTypes = {
    strength: 5,
    password: '',
    checkTexts: [
        'Include Uppercase Letters',
        'Include Lowercase Letters',
        'Include Numbers',
        'Include Symbols',
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
    },
});

export const { increment, decrement, createPassword } = generatorSlice.actions;

export default generatorSlice.reducer;
