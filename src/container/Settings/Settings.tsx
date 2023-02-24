import { ReactNode } from 'react';

interface settingsTypes {
    children: ReactNode;
}

export const Settings = (props: settingsTypes) => {
    return <div className="settings_container">{props.children}</div>;
};
