import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GeneratorStateTypes {
    strength: number;
    password: string;
    checkTexts: string[];
}

const initialState: GeneratorStateTypes = {
    strength: 0,
    password: '',
    checkTexts: [
        'Include Uppercase Letters',
        'Include Lowercase Letters',
        'Include Numbers',
        'Include Symbols',
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
