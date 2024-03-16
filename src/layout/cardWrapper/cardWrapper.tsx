import React, { FC } from 'react';
import styles from './cardWrapper.module.scss';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

interface CardWrapperProps {
  children?: React.ReactNode,
  width?: number | string
}

const CardWrapper: FC<CardWrapperProps> = (props: CardWrapperProps) => (
  <div className={styles.CardWrapper} data-testid="CardWrapper">
    <Box
      sx={{
        m: 1,
        mb: 3,
        width: props.width ? props.width: '100%'
      }}
    >
      <Paper sx={{p: 2}}>
        {props.children}
      </Paper>
    </Box>
  </div>
);

export default CardWrapper;
