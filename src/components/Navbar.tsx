import Icon from '@mdi/react';
import { mdiMagnify, mdiBellRingOutline } from '@mdi/js';
import type { User } from '../users';
import defaultProfilePic from '../assets/avatar_default_02_A5A4A4.png'

import ProfilePic from './ProfilePic';
import './Dashboard.css'

type NavbarProps = {
    // setType: string;
    loggedInUser: User;
}

const Navbar = (props: NavbarProps) => {
  return (
    <>
        <div id='navbarSearchContainer'>
            <Icon path={mdiMagnify} size={1} />
            <input type='text' placeholder='Search projects...' />
        </div>
        <div id='navbarProfileContainer'>
            <Icon path={mdiBellRingOutline} size={1} />
            <ProfilePic size={1} image={props.loggedInUser.profilePic ?? defaultProfilePic} />
            <div className='usernameText'>{props.loggedInUser.name}</div>
        </div>
    </>
  )
}

export default Navbar