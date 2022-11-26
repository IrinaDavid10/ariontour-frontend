
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import {useEffect} from 'react';
import useBreakpoint from '../Hooks/useBreakpoint';
function AdminPanelMenu(){
    const { collapseSidebar,collapsed } = useProSidebar();

    const breakpoint = useBreakpoint();
    const sideBurgerButton = <Button onClick={() => collapseSidebar()}>|||</Button>;
   // Xs:640px
    //Sm:641px - 768px
   // Md: 769px - 1024px
  //  Lg: 1025px
   const [defaultCollapsed, setDefaultCollapsed] = useState();

   const [sideBurgerMenuButton, setSideBurgerMenuButton] =useState(() => {
    if (breakpoint<768) {
        setDefaultCollapsed(true);
    }
    else
        setDefaultCollapsed(false);
  });  

    useEffect(() => {
       if(breakpoint<768){
        if(!collapsed){
            collapseSidebar(true);
        }
        setSideBurgerMenuButton(sideBurgerButton); 
       }else
            if(collapsed){
                collapseSidebar(false);
                setSideBurgerMenuButton(""); 
            }
      }, [breakpoint]);
   
    return (

      <div style={{ display: 'flex', height: '100%' }}>
      {sideBurgerMenuButton}
        <Sidebar defaultCollapsed={defaultCollapsed}>
          <Menu>
            <MenuItem> Documentation</MenuItem>
            <MenuItem> Calendar</MenuItem>
            <MenuItem> E-commerce</MenuItem>
          </Menu>
        </Sidebar>
        <main>
          
        </main>
      </div>
    )
}
export default AdminPanelMenu;