import Icon from '@mdi/react';
import { 
    mdiCodeBlockBrackets,
    mdiHome,
    mdiCog
 } from '@mdi/js';;

export type ListItem = {
    icon: React.ReactNode;
    text: string;
};

const LogoHeading: [ListItem] = [
    {
        icon: <Icon path={mdiCodeBlockBrackets} size={2} />,
        text: "Dashboard"
    }
]

const SidebarNavItems: [ListItem] = [
    {
        icon: <Icon path={mdiHome} size={1} />,
        text: "Home"
    },
]

const SidebarSettingsItems: [ListItem] = [
    {
        icon: <Icon path={mdiCog} size={1} />,
        text: "Settings"
    },
]

export { LogoHeading, SidebarNavItems, SidebarSettingsItems }