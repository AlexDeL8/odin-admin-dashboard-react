import Icon from '@mdi/react';
import { 
    mdiCodeBlockBrackets,
    mdiHome,
    mdiCardAccountDetailsOutline,
    mdiMessageReply,
    mdiClockTimeThree,
    mdiNoteMultiple,
    mdiAccountGroup,
    mdiCog,
    mdiHelpBox,
    mdiShieldCheck
 } from '@mdi/js';;

export type ListItem = {
    icon: React.ReactNode;
    text: string;
    desktopOnly: boolean;
};

const LogoHeading: ListItem[] = [
    {
        icon: <Icon path={mdiCodeBlockBrackets} size={2} />,
        text: "Dashboard",
        desktopOnly: true
    }
]

const SidebarNavItems: ListItem[] = [
    {
        icon: <Icon path={mdiHome} size={1} />,
        text: "Home",
        desktopOnly: false
    },
    {
        icon: <Icon path={mdiCardAccountDetailsOutline} size={1} />,
        text: "Profile",
        desktopOnly: false
    },
    {
        icon: <Icon path={mdiMessageReply} size={1} />,
        text: "Messages",
        desktopOnly: false
    },
    {
        icon: <Icon path={mdiClockTimeThree} size={1} />,
        text: "History",
        desktopOnly: true
    },
    {
        icon: <Icon path={mdiNoteMultiple} size={1} />,
        text: "Tasks",
        desktopOnly: true
    },
    {
        icon: <Icon path={mdiAccountGroup} size={1} />,
        text: "Communities",
        desktopOnly: true
    }
]

const SidebarSettingsItems: ListItem[] = [
    {
        icon: <Icon path={mdiCog} size={1} />,
        text: "Settings",
        desktopOnly: false
    },
    {
        icon: <Icon path={mdiHelpBox} size={1} />,
        text: "Support",
        desktopOnly: true
    },
    {
        icon: <Icon path={mdiShieldCheck} size={1} />,
        text: "Privacy",
        desktopOnly: true
    },
]

export { LogoHeading, SidebarNavItems, SidebarSettingsItems }