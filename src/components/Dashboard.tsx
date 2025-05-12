// import { useState } from 'react'
import Navbar from './Navbar'
import { loggedInUser } from '../users'
import './Dashboard.css'

export enum DashboardType {
    Admin = "Admin",
    User = "User"
}

const Dashboard = () => {
    // const [dashboardType, setDashboardType] = useState(DashboardType.Admin)
    return (
        <div className='dashboardBar'>
            <div className='navbarContainer'>
            <Navbar /* setType={setDashboardType} */ loggedInUser={loggedInUser} /> 
            </div>
        </div>
        // <Taskbar />
        // <DashboardContent type={dashboardType} />
    )
}

export default Dashboard