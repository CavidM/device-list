import React from 'react';
import styles from './DeviceList.module.css';

export const DeviceListHeader: React.FC = () => (
  <div className={styles.header}>
    <h4>id</h4>
    <h4>title</h4>
    <h4>quantity</h4>
  </div>
);
