import React, { FC } from 'react';
import styles from './layoutWrapper.module.scss';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

interface LayoutProps {
  children?:React.ReactNode
}

const LayoutWrapper: FC<LayoutProps> = (props: LayoutProps)=> (
  <Box className={styles.LayoutWrapper} data-testid="LayoutWrapper">
    <CssBaseline />
      <Container maxWidth="lg">
       {props.children}
      </Container>
  </Box>
);



export default LayoutWrapper;
