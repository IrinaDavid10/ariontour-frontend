
import { Sidebar, Menu, MenuItem, useProSidebar, ProSidebarProvider } from 'react-pro-sidebar';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { useEffect } from 'react';
import useBreakpoint from '../../Hooks/useBreakpoint';
import EventsManager from './EventsManager';
import { GiMicrophone } from 'react-icons/gi';
import { CiBeerMugFull, CiDark } from 'react-icons/ci';
import { IoMdBeer } from 'react-icons/io'
import jwt_decode from "jwt-decode";
import {ImStatsDots} from 'react-icons/im';
import {FiSettings} from 'react-icons/fi';

import { IoIosPeople } from "react-icons/io"
import {SlNotebook} from 'react-icons/sl';
import AdminAccountSettings from './AdminAccountSettings';
import AdminPanelCustomerOverview from './AdminPanelCustomerOverview';
import AccountSettings from '../AccountSettings';
import Bookings from '../Bookings';

function PanelMenu(props) {

  const { collapseSidebar, collapsed } = useProSidebar();
  const breakpoint = useBreakpoint();
  const sideBurgerButton = <Button onClick={() => collapseSidebar()}>|||</Button>;
  const breakPointLimit = 768;


  // Xs:640px
  //Sm:641px - 768px
  // Md: 769px - 1024px
  //  Lg: 1025px
  const [defaultCollapsed, setDefaultCollapsed] = useState();

  const [sideBurgerMenuButton, setSideBurgerMenuButton] = useState(() => {
    if (breakpoint < breakPointLimit) {
      setDefaultCollapsed(true);
    }
    else
      setDefaultCollapsed(false);
  });

  useEffect(() => {
    if (breakpoint < 768) {
      if (!collapsed) {
        collapseSidebar(true);
      }
      setSideBurgerMenuButton(sideBurgerButton);
    } else
      if (collapsed) {
        collapseSidebar(false);
        setSideBurgerMenuButton("");
      }
  }, [breakpoint]);



  function Bar() {
    if (jwt_decode(localStorage.getItem("Token")).roles.includes("ADMIN")) {
      return (
        <Menu className="text-light" >
          <MenuItem icon={<FiSettings />} onClick={() => props.setContent(<AdminAccountSettings />)}>Account settings </MenuItem>
          <MenuItem icon={<GiMicrophone />} onClick={() => props.setContent(<EventsManager />)}> Events</MenuItem>
          <MenuItem icon={<ImStatsDots  />} > Statistics</MenuItem>
          <MenuItem icon={<IoIosPeople size={25}/>} onClick={() => props.setContent(<AdminPanelCustomerOverview />)}> Customers</MenuItem>
        </Menu>
        //AdminPanelCustomerOverview
      )
    } else {
      return (

        <Menu className="text-light" >
          <MenuItem icon={<FiSettings />} onClick={() => props.setContent(<AccountSettings />)}> Account settings</MenuItem>
          <MenuItem icon={<SlNotebook />} onClick={() => props.setContent(<Bookings />)}> Bookings</MenuItem>
        </Menu>
      )
    }
  }
  return (

    <div style={{ display: 'flex' }}>
      {sideBurgerMenuButton }
      <Sidebar  backgroundColor='black' width={200} defaultCollapsed={defaultCollapsed}>
        <ProSidebarProvider ><Bar  /></ProSidebarProvider>
      </Sidebar>
    </div>
  )
}
export default PanelMenu;