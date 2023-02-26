import React from 'react';
import './_passwordGenerator.sass';
import { useAppSelector} from './../../hooks/reducerHooks';
import { IconCopy } from '../../assets/images/IconCopy';

export const PasswordGenerator = () => {
    const password = useAppSelector((state) => state.generator.password);
    return (
        <div className="password_container">
            <input
                className="password_container--input_field"
                placeholder="P4$5W0rD!"
                value={password}
                readOnly
            />
            <IconCopy/>
        </div>
    );
};
