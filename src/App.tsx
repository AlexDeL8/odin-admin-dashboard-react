import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <main>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="dashboard">
        <Dashboard />
      </div>
    </main>
  )
}

export default App
