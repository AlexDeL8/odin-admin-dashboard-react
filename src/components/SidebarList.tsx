import type { ListItem } from "../ListItems"
import './Sidebar.css'

type SidebarListProps = {
    items: ListItem[]
}

const SidebarList = (props: SidebarListProps) => {
  return (
    <ul className='sidebarList'>
        {props.items.map((item, idx) => {
            return (
                <li className='sidebarItem' key={idx}>
                    {item.icon}
                    <div>{item.text}</div>
                </li>
            )
        })}
    </ul>
  )
}

export default SidebarList