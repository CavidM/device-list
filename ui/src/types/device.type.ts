import { HttpRequestError } from './http-client.type';

export interface DeviceProps {
  id?: number
  title?: string
  description?: string
  price?: number
  quantity?: number
  __typename?: string
}

export interface DeviceGetType {
  getDevice: DeviceProps & HttpRequestError
}

export interface DeviceListGetType {
  deviceList: DeviceProps[]
}
