// import { useState } from 'react'
import { loggedInUser } from '../users'
import './Dashboard.css'

import Navbar from './Navbar'
import Taskbar from './Taskbar'

export enum DashboardType {
    Admin = "Admin",
    User = "User"
}

const Dashboard = () => {
    // const [dashboardType, setDashboardType] = useState(DashboardType.Admin)
    return (
        <div className='dashboardBar'>
            <div className='dashboardBarContainer' id='navbarContainer'>
                <Navbar /* setType={setDashboardType} */ loggedInUser={loggedInUser} /> 
            </div>
            <div className='dashboardBarContainer' id='taskbarContainer'>
                <Taskbar loggedInUser={loggedInUser} />
            </div>
        </div>
        // <DashboardContent type={dashboardType} />
    )
}

export default Dashboard