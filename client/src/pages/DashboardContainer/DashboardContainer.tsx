import React, { FC } from 'react';
import styles from './DashboardContainer.module.scss';
import Dashboard from '../../components/Dashboard/Dashboard';

interface DashboardContainerProps {}

const DashboardContainer: FC<DashboardContainerProps> = () => (
  <div className={styles.DashboardContainer}>
    <Dashboard/>
  </div>
);

export default DashboardContainer;
