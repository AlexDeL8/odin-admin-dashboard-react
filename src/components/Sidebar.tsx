import { LogoHeading, SidebarNavItems, SidebarSettingsItems } from '../ListItems'
import SidebarList from './SidebarList'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
      {LogoHeading.map((item, idx) => {
            return (
              <div className='logoHeading' key={idx}>
                {item.icon}
                <div>{item.text}</div>
              </div>
            )
        })}
        <div className='sidebarGroup'>
          <SidebarList items={SidebarNavItems} />
        </div>
        <div className='sidebarGroup'>
          <SidebarList items={SidebarSettingsItems} />
        </div>
    </>
  )
}

export default Sidebar