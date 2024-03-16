import React, { FC } from 'react';
import styles from './navBar.module.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LayoutWrapper from '../../layout/layoutWrapper/layoutWrapper'

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => (
  <div className={styles.NavBar} data-testid="NavBar">
    <LayoutWrapper>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{background:'#375EA2'}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ASC
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </LayoutWrapper>
  </div>
);

export default NavBar;
