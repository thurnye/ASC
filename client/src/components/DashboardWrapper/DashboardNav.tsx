import React from 'react'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import {useNavigate } from 'react-router-dom';

const dashBoardItems: {
    page: string;
    icon: JSX.Element;
    link: string;
}[] = [
    {
        page: 'Dashboard',
        icon: <DashboardIcon/>,
        link: 'dashboard'
    }
]

const DashboardNav = ({open}) => {
    let navigate = useNavigate();
  return (
    <List>
          {dashBoardItems.map((navItem, index) => (
            <ListItem key={navItem.page} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => navigate(navItem.link)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {navItem.icon}
                </ListItemIcon>
                <ListItemText primary={navItem.page} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
  )
}
export default DashboardNav