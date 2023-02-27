import React from 'react';
import './_passwordGenerator.sass';
import { useAppSelector} from './../../hooks/reducerHooks';
import { IconCopy } from '../../assets/images/IconCopy';
import { useGenerator } from '../../hooks/useGenerator';

export const PasswordGenerator = () => {
    const {setOnClipBoard} = useGenerator()
    const {password, isCopied} = useAppSelector((state) => state.generator);
    return (
        <div className="password">
            <input
                className="password--input_field"
                placeholder="P4$5W0rD!"
                value={password}
                readOnly
            />
            {isCopied && <p className='password--copied'>Copied</p>}
            <button className='password--btn' onClick={setOnClipBoard}>
                <IconCopy/>
            </button>
        </div>
    );
};
