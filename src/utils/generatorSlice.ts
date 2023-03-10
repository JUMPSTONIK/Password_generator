import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GeneratorStateTypes } from './generatorSliceTypes';

const initialState: GeneratorStateTypes = {
    strength: 0,
    password: '',
    sliderValue: 0,
    isCopied: false,
    checkBoxes: [
        {
            value: false,
            text: 'Include Uppercase Letters',
        },
        {
            value: false,
            text: 'Include Lowercase Letters',
        },
        {
            value: false,
            text: 'Include Numbers',
        },
        {
            value: false,
            text: 'Include Symbols',
        },
    ],
    strengthLevels: {
        5: { class: 'level5', type: 'STRONG' },
        4: { class: 'level4', type: 'MEDIUM' },
        3: { class: 'level3', type: 'WEAK' },
        2: { class: 'level2', type: 'TOO WEAK' },
        1: { class: 'level1', type: '' },
        0: { class: 'level1', type: '' },
    },
    levelsConditions: [
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
        setIsCopied: (state) => {
            state.isCopied = true;
        },
        setIsNotCopied: (state) => {
            state.isCopied = false;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        /**
         * Todo: remover logica y moverla al hook para que este action
         * solo reciba el valor del estado
         */

        setCheckboxValue: (state, action: PayloadAction<string>) => {
            const checkboxIndex = state.checkBoxes.findIndex(
                (checkBox) => checkBox.text === action.payload
            );
            let newCheckboxes = [...state.checkBoxes];
            newCheckboxes[checkboxIndex].value =
                !state.checkBoxes[checkboxIndex].value;
            state.checkBoxes = newCheckboxes;
            if (state.checkBoxes[checkboxIndex].value) {
                state.strength += 1;
            } else {
                state.strength -= 1;
            }
        },
        setSliderValue: (state, action: PayloadAction<number>) => {
            state.sliderValue = action.payload;
        },
    },
});

export const {
    increment,
    decrement,
    setIsCopied,
    setIsNotCopied,
    setPassword,
    setCheckboxValue,
    setSliderValue,
} = generatorSlice.actions;

export default generatorSlice.reducer;
