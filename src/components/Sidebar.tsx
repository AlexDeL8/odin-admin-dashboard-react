import Icon from '@mdi/react';
import { mdiCodeBlockBrackets } from '@mdi/js';

const Sidebar = () => {
  return (
    <>
        <Icon path={mdiCodeBlockBrackets} size={1} />
        <div>Dashboard</div>
    </>
  )
}

export default Sidebar