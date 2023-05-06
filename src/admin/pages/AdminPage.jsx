import React, {useEffect, useState} from 'react';

import {
  DashboardOutlined,
  VerifiedUserOutlined,
  BookOutlined,
  PostAddOutlined

}  from '@mui/icons-material';
import CustomDrawer from '../../components/CustomDrawer';
import { useAtom } from 'jotai';
import { needDrawer, openDrawer } from '../../store';
import Dashboard from "./Dashboard";
import Users from "./Users";
import Jobs from "./Jobs";
import Courses from "./Courses";

const AdminPage = () => {
  const [drawer,setDrawer] = useAtom(needDrawer);
  const [open, setOpen] = useAtom(openDrawer);
  const [component, setComponent] = useState(<Users/>);

  const handleDrawerToggle = () => {
    setOpen(!openDrawer);
  }

  useEffect(() => {
    setDrawer(true);
    
  },[drawer]);

  useEffect(() => {
    setOpen(true);
  }, [])

  const handleContent = (component) => {
    setComponent(component)
  }
  const menuItems = [
    {
      text: 'Dashboard',
      icon: <DashboardOutlined/>,
      component: <Dashboard/>,
    },
    {
      text: 'Users',
      icon: <VerifiedUserOutlined/>,
      component: <Users/>,
    },
    {
      text: 'Courses',
      icon: <BookOutlined/>,
      component: <Courses/>
    },
    {
      text: 'Jobs',
      icon: <PostAddOutlined/>,
      component: <Jobs/>
    }
  ];

  return (
    <div style={{ display: 'flex' }}>
      <CustomDrawer
        drawerOpen={open}
        handleDrawerToggle={handleDrawerToggle}
        menuItems={menuItems}
        handleContent={handleContent}
      />
      <div style={{ flexGrow: 1, height:550 }}>{component}</div>
    </div>
    )
};

export default AdminPage;