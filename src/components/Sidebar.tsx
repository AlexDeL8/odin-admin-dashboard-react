import { LogoHeading, SidebarNavItems, SidebarSettingsItems } from '../ListItems'
import SidebarList from './SidebarList'
import './Sidebar.css'

const Sidebar = () => {
  const mobileSidebarItems = [...SidebarNavItems, ...SidebarSettingsItems].filter((icon) => !icon.desktopOnly)
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
        <div className='mobileSidebarGroup'>
          <SidebarList items={mobileSidebarItems} />
        </div>
    </>
  )
}

export default Sidebar