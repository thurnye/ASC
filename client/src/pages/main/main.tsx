import React, { FC } from 'react';
import styles from './main.module.scss';
import LayoutWrapper from '../../layout/layoutWrapper/layoutWrapper'
// import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SectionsTableOfContent from '../../components/MainContents/SectionsTableOfContent/SectionsTableOfContent'
import PreviewContents from '../../components/PreviewContents/PreviewContents';

interface MainProps {}

const Main: FC<MainProps> = () => (
  <div className={styles.Main} data-testid="Main">
    <LayoutWrapper>
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={12} sm={12} md={4}>
           <SectionsTableOfContent/>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <PreviewContents/>
          </Grid>
      </Grid>
    </Box>
    </LayoutWrapper>
  </div>
);

export default Main;
