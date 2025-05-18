import blueProfilePic from './assets/avatar_default_02_0DD3BB.png'
import greenProfilePic from './assets/avatar_default_02_46A508.png'
import purpleProfilePic from './assets/avatar_default_02_4856A3.png'
import yellowProfilePic from './assets/avatar_default_02_FFD635.png'

export type User = {
    name: string;
    handle: string;
    profilePic?: string;
    title: string;
    type: "User" | "Admin";
}

const userList: User[] = [
    {
        name: "Tegan Mitchell",
        handle: "tegan",
        profilePic: purpleProfilePic,
        title: "World Peace Builder",
        type: "User"
    },
    {
        name: "Morgan Oakleyfdsafdsfd",
        handle: "morgan_dkk113",
        profilePic: greenProfilePic,
        title: "Super Cool Project",
        type: "Admin"
    },
    {
        name: "Kendall Yu",
        handle: "kendall",
        profilePic: blueProfilePic,
        title: "Life Changing App",
        type: "Admin"
    },
    {
        name: "Alex Patel",
        handle: "alex",
        profilePic: yellowProfilePic,
        title: "No Traffic Maker",
        type: "User"
    }
]

const loggedInUser: User = userList[1]

export {userList, loggedInUser}