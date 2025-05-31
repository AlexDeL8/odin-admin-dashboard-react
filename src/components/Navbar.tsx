import Icon from '@mdi/react';
import { mdiMagnify, mdiBellRingOutline } from '@mdi/js';
import type { User } from '../users';
import defaultProfilePic from '../assets/avatar_default_02_A5A4A4.png'

import ProfilePic from './generic/ProfilePic';
import './Navbar.css'

type NavbarProps = {
    // setType: string;
    loggedInUser: User;
}

const Navbar = (props: NavbarProps) => {
  return (
    <>
        <div id='navbarSearchContainer'>
            <div className='iconContainer' id='searchIcon'><Icon path={mdiMagnify} size={1} /></div>
            <input type='text' placeholder='Search projects...' />
        </div>
        <div id='navbarProfileContainer'>
            <div className='iconContainer' id='notificationIcon'><Icon path={mdiBellRingOutline} size={1} /></div>
            <ProfilePic image={props.loggedInUser.profilePic ?? defaultProfilePic} />
            <div id='navbarUserNameText'>{props.loggedInUser.name}</div>
        </div>
    </>
  )
}

export default Navbar