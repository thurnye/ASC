import React, { FC } from 'react';
import styles from './Header.module.scss';
import CardWrapper from '../../../layout/cardWrapper/cardWrapper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeaderTitle from '../../HeaderTitle/HeaderTitle'
interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className={styles.Header}>
    <CardWrapper width={'80%'}>
      <Box sx={{color: '#24305B'}}>
      <HeaderTitle title={'Job Name'} />
      <Typography variant="body1" gutterBottom sx={{fontWeight: 700}}>
        University of Maryland
        <br/>
        Whitehall B1374
      </Typography>
      </Box>
    </CardWrapper>
  </div>
);

export default Header;
