import { useState } from 'react'

enum DashboardType {
    Admin = "Admin",
    User = "User"
}

const Dashboard = () => {
    const [dashboardType, setDashboardType] = useState(DashboardType.Admin)
    return (
        <h1>{dashboardType}</h1>
        // <Navbar setType={setDashboardType} />
        // <Taskbar />
        // <DashboardContent type={dashboardType} />
    )
}

export default Dashboard