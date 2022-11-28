
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import {useEffect} from 'react';
import useBreakpoint from '../Hooks/useBreakpoint';
import AllEventsPage from '../pages/AllEventsPage';
import {  GiMicrophone} from 'react-icons/gi';
import { CiBeerMugFull } from 'react-icons/ci';

function AdminPanelMenu(props){

    const { collapseSidebar,collapsed } = useProSidebar();
    const breakpoint = useBreakpoint();
    const sideBurgerButton = <Button onClick={() => collapseSidebar()}>|||</Button>;
    const breakPointLimit = 768;   
    
    // Xs:640px
    //Sm:641px - 768px
   // Md: 769px - 1024px
  //  Lg: 1025px
   const [defaultCollapsed, setDefaultCollapsed] = useState();

   const [sideBurgerMenuButton, setSideBurgerMenuButton] =useState(() => {
    if (breakpoint<breakPointLimit) {
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

      <div style={{ display: 'flex' }}>
      {sideBurgerMenuButton}
        <Sidebar  width={200} defaultCollapsed={defaultCollapsed}>
          <Menu >
            <MenuItem> Documentation</MenuItem>
            <MenuItem icon={<CiBeerMugFull/>}> Calendar</MenuItem>
            <MenuItem icon={<GiMicrophone/>} onClick={() => props.setContent(<AllEventsPage/>)}> Events</MenuItem>
          </Menu>
        </Sidebar>
        <main>
          
        </main>
      </div>
    )
}
export default AdminPanelMenu;