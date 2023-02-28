export interface checkBox {
    value: boolean;
    text: string;
}

export interface strengthLevels {
    [key: number]: {
        class: string;
        type: string;
    };
}

export interface levelTypes {
    conditional: number;
}
export interface GeneratorStateTypes {
    strength: number;
    password: string;
    sliderValue: number;
    isCopied: boolean;
    strengthLevels: strengthLevels;
    checkBoxes: checkBox[];
    levelsConditions: levelTypes[];
}
