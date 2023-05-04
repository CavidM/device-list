
export interface DeviceProps {
  id?: number
  title?: string
  description?: string
  price?: number
  quantity?: number
}

export interface DeviceGetType {
  getDevice: DeviceProps
}

export interface DeviceListGetType {
  deviceList: DeviceProps[]
}