import React, { FC, ReactNode } from 'react'
import styles from './DeviceListItem.module.css'
import ListGroup from 'react-bootstrap/ListGroup';
import Link from 'next/link';
import { DeviceProps } from '@dl/types/device.type';

export const DeviceListItem: FC<DeviceProps> = ({
    id,
    title,
    quantity
}
) => (

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
)