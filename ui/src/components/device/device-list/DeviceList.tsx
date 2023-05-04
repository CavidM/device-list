import { FC } from "react";
import { DeviceListItem } from "../device-list-item/DeviceListItem";
import ListGroup from 'react-bootstrap/ListGroup';
import { DeviceListHeader } from "./DeviceListHeader";
import { DeviceProps } from "@dl/types/device.type";

export const DeviceList: FC<{ data?: DeviceProps[] }> = ({ data }) => (
  <>
    <DeviceListHeader />
    <ListGroup>
      {
        data?.map(item => <DeviceListItem {...item} key={item.id} />)
      }
    </ListGroup>
  </>
)


