import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from './reducerHooks';
import {setSliderValue, increment, decrement, setPassword, setIsNotCopied, setIsCopied } from './../utils/generatorSlice'
interface levelsTypes {
    [key: number]: { class: string; type: string };
}

const strengthLevels: levelsTypes = {
    5: { class: 'level5', type: 'STRONG' },
    4: { class: 'level4', type: 'MEDIUM' },
    3: { class: 'level3', type: 'WEAK' },
    2: { class: 'level2', type: 'TOO WEAK' },
    1: { class: 'level1', type: '' },
    0: { class: 'level1', type: '' },
};

export const useGenerator = () => {
    const [hasAlreadyIncrement, setHasAlreadyIncrement] = useState(false)

    const {checkBoxes, sliderValue, password} = useAppSelector(state => state.generator)
    const dispatch = useAppDispatch()

    const handleSliderchange = (event: React.ChangeEvent<HTMLInputElement>) =>{

        dispatch(setSliderValue(parseInt(event.target.value) ))
        if (parseInt(event.target.value) >=8 && !hasAlreadyIncrement) {
            dispatch(increment())
            setHasAlreadyIncrement(true)
            
        } else
        if(parseInt(event.target.value) < 8 && hasAlreadyIncrement) {
            dispatch(decrement())
            setHasAlreadyIncrement(false)
        }
    }

    const createPassword = ()=>{
        let lowerCases = 'abcdefghijklmnopqrstuvwxyz'
        let upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let numbers = '0123456789'
        let symbols = "!@#$%^&*()-_=+*/|{}[];'<,.:>?"
        let charactersPool = ""
        let password = ""
        const isThereChecks = checkBoxes.some( checkBox => checkBox.value === true)
        if (isThereChecks && sliderValue > 0) {
            if(checkBoxes[0].value) charactersPool += lowerCases;
            if(checkBoxes[1].value) charactersPool += upperCases;
            if(checkBoxes[2].value) charactersPool += numbers;
            if(checkBoxes[3].value) charactersPool += symbols;

            for(let i = 0; i <= sliderValue; i++){
                const index = Math.floor(Math.random() * charactersPool.length)
                password += charactersPool[index]
            }
            dispatch(setIsNotCopied())
            dispatch(setPassword(password))
        } else {
            alert('please choose 1 type of characters and a length greater than 0')
        }
    }

    const setOnClipBoard = () =>{
        if (password !== "") {
            navigator.clipboard.writeText(password);
            dispatch(setIsCopied())
        }
    }

    const getStrengthClass = (strength: number) => {
        return strengthLevels[strength].class;
    };
    const getStrengthType = (strength: number) => {
        return strengthLevels[strength].type;
    };
    return { getStrengthClass, getStrengthType, handleSliderchange, createPassword, setOnClipBoard};
};
