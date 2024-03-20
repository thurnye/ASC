import React, { FC } from 'react';
import styles from './AppContainer.module.scss';
import DashboardWrapper from '../../components/DashboardWrapper/DashboardWrapper';

interface AppContainerProps {}

const AppContainer: FC<AppContainerProps> = () => (
  <div className={styles.AppContainer}>
    <DashboardWrapper />
  </div>
);

export default AppContainer;
