import type { User } from '../users'
import './Dashboard.css'

import ProfilePic from './ProfilePic'
import defaultProfilePic from '../assets/avatar_default_02_A5A4A4.png'

type TaskbarProps = {
    loggedInUser: User
}

const Taskbar = (props: TaskbarProps) => {
    return (
        <>
            <ProfilePic size={2} image={props.loggedInUser.profilePic ?? defaultProfilePic} />
            <div>{props.loggedInUser.name}</div>
        </>
    )
}

export default Taskbar