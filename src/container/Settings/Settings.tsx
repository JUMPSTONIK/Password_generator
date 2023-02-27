import { ReactNode } from 'react';
import './_settings.sass'
interface settingsTypes {
    children: ReactNode;
}

export const Settings = (props: settingsTypes) => {
    return <div className="settings_container">{props.children}</div>;
};
