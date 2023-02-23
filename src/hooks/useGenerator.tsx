import React from 'react';

export const useGenerator = () => {
    const checkPasswordStrength = (password: string) => {
        let strength = 0;

        // check length of password
        if (password.length >= 8) {
            strength += 1;
        }

        // check for uppercase letters
        if (/[A-Z]/.test(password)) {
            strength += 1;
        }

        // check for lowercase letters
        if (/[a-z]/.test(password)) {
            strength += 1;
        }

        // check for numbers
        if (/[0-9]/.test(password)) {
            strength += 1;
        }

        // check for special characters
        // if (/[!@#$%^&*()_+\\-=\\[\\]{};':"\\\\|,.<>\\/?]/.test(password)) {
        if (/[!@#$%^&*()_+\\-=\\[\\]{};':"\\\\|,.<>\\/.test(password)) {
            strength += 1;
        }

        return strength;
    };
    return {};
};
