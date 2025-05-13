import type { User } from '../users'
import './Dashboard.css'

import ProfilePic from './generic/ProfilePic'
import defaultProfilePic from '../assets/avatar_default_02_A5A4A4.png'
import Button from './generic/Button'

type TaskbarProps = {
    loggedInUser: User
}

const Taskbar = (props: TaskbarProps) => {
    const taskbarButtons = [
        {
            isPrimary: true,
            action: () => {
                console.log("New Clicked")
            },
            text: "New"
        },
        {
            isPrimary: true,
            action: () => {
                console.log("Upload Clicked")
            },
            text: "Upload"
        },
        {
            isPrimary: true,
            action: () => {
                console.log("Share Clicked")
            },
            text: "Share"
        }
    ]

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
                {taskbarButtons.map((button) => {
                    return <Button 
                            isPrimary={button.isPrimary} 
                            action={button.action}
                            btnText={button.text} />
                })}
            </div>
        </>
    )
}

export default Taskbar