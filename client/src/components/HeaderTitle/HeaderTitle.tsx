import React, { FC } from 'react';
import styles from './HeaderTitle.module.scss';
import Typography from '@mui/material/Typography';

interface HeaderTitleProps {
  title: string
}

const HeaderTitle: FC<HeaderTitleProps> = (props: HeaderTitleProps) => (
  <div className={styles.HeaderTitle}>
     <Typography variant="body2" gutterBottom sx={{textDecoration: 'underline'}}>
        {props.title}
      </Typography>
  </div>
);

export default HeaderTitle;
