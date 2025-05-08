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
};

const LogoHeading: ListItem[] = [
    {
        icon: <Icon path={mdiCodeBlockBrackets} size={2} />,
        text: "Dashboard"
    }
]

const SidebarNavItems: ListItem[] = [
    {
        icon: <Icon path={mdiHome} size={1} />,
        text: "Home"
    },
    {
        icon: <Icon path={mdiCardAccountDetailsOutline} size={1} />,
        text: "Profile"
    },
    {
        icon: <Icon path={mdiMessageReply} size={1} />,
        text: "Messages"
    },
    {
        icon: <Icon path={mdiClockTimeThree} size={1} />,
        text: "History"
    },
    {
        icon: <Icon path={mdiNoteMultiple} size={1} />,
        text: "Tasks"
    },
    {
        icon: <Icon path={mdiAccountGroup} size={1} />,
        text: "Communities"
    }
]

const SidebarSettingsItems: ListItem[] = [
    {
        icon: <Icon path={mdiCog} size={1} />,
        text: "Settings"
    },
    {
        icon: <Icon path={mdiHelpBox} size={1} />,
        text: "Support"
    },
    {
        icon: <Icon path={mdiShieldCheck} size={1} />,
        text: "Privacy"
    },
]

export { LogoHeading, SidebarNavItems, SidebarSettingsItems }