import React, { FC } from 'react';
import styles from './SectionsTableOfContent.module.scss';
import Header from '../Header/Header';
import SectionsIncluded from '../SectionsIncluded/SectionsIncluded';
import Templates from '../Templates/Templates';

interface SectionsTableOfContentProps {}

const SectionsTableOfContent: FC<SectionsTableOfContentProps> = () => (
  <div className={styles.SectionsTableOfContent}>
    <Header/>
    <SectionsIncluded/>
    <Templates/>
  </div>
);

export default SectionsTableOfContent;
