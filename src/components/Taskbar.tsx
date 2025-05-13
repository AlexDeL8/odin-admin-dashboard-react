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
            <div id='taskbarGreetingContainer'>
                <ProfilePic size={2} image={props.loggedInUser.profilePic ?? defaultProfilePic} />
                <div id='taskbarGreetingText'>
                    <div id='greetingText'>Hi there,</div>
                    <div id='greetingUserInfo'>
                        <div id='greetingUserName'>{props.loggedInUser.name}</div>
                        <div id='greetingUserHandle'>{"(@"+(props.loggedInUser.handle)+")"}</div>
                    </div>
                </div>
            </div>
            <div id='taskbarActionsContainer'>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                {/* <ActionButtons buttonsList={} /> */}
            </div>
        </>
    )
}

export default Taskbar