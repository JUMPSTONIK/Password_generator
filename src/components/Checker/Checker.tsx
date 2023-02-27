import { useAppDispatch} from '../../hooks/reducerHooks';
import './_checker.sass';
import {setCheckboxValue } from './../../utils/generatorSlice'
interface inputTypes {
    text: string,
    value: boolean
}

export const Checker = (props: inputTypes) => {
    const dispatch = useAppDispatch()
    // console.log(props.text);
    return (
        <label className="checker">
            <input
                style={{ fontSize: '20px' }}
                onChange={()=> dispatch(setCheckboxValue(props.text))}
                type={`checkbox`}
                checked={props.value}
            />
            <span className="checker--checkmark"></span>
            {props.text}
        </label>
    );
};
