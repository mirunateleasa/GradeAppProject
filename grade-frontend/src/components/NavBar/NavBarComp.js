import { TabMenu } from 'primereact/tabmenu';
import './NavBarComp.css';

import React from 'react'


const NavBarComp = (props) => {
    const navList = [
        {label: 'Home', icon: 'pi pi-home'},
        {label: 'Add Projects', icon: 'pi pi-plus-circle'},
        {label: 'See Projects', icon: 'pi pi-th-large'}
      ]
    return (
        <div>
        <header>
           <nav>
             <ul>
                 <TabMenu
                 model={navList} />
             </ul>
           </nav>
        </header>
     </div>
    )
}

export default NavBarComp;
