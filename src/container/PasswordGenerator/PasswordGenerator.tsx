import './_passwordGenerator.sass';
import { useAppSelector } from './../../hooks/reducerHooks';
import { IconCopy } from '../../assets/images/IconCopy';
import { useGenerator } from '../../hooks/useGenerator';

export const PasswordGenerator = () => {
    const { setOnClipBoard } = useGenerator();
    const { password, isCopied } = useAppSelector((state) => state.generator);
    return (
        <div className="password">
            <label className='password--label' htmlFor="">
                <input
                    className="password--input_field"
                    placeholder="P4$5W0rD!"
                    value={password}
                    readOnly
                />
            </label>
            <div className='password--interactive'>
                {isCopied && <p className="password--interactive--copied">COPIED</p>}
                <button className="password--interactive--btn" onClick={setOnClipBoard}>
                    <IconCopy />
                </button>
            </div>
        </div>
    );
};
