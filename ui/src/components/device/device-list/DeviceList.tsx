import { FC } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { DeviceProps } from '@dl/types/device.type';
import { DeviceListItem } from '../device-list-item/DeviceListItem';
import { DeviceListHeader } from './DeviceListHeader';

export const DeviceList: FC<{ data?: DeviceProps[] }> = ({ data }) => (
  <>
    <DeviceListHeader />
    <ListGroup>
      {
        data?.map((item) => <DeviceListItem {...item} key={item.id} />)
      }
    </ListGroup>
  </>

);
