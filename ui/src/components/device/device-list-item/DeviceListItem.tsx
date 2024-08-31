import React, { FC } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Link from 'next/link';
import { DeviceProps } from '@dl/types/device.type';
import styles from './DeviceListItem.module.css';

export const DeviceListItem: FC<DeviceProps> = ({
  id,
  title,
  quantity,
}) => (

  <Link
    href={{
      pathname: '/',
      query: { device: id },
    }}
  >
    <ListGroup.Item className={styles.item}>

      <div>{id}</div>
      <div>{title}</div>
      <div>{quantity}</div>

    </ListGroup.Item>
  </Link>
);
