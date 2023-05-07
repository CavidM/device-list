import { DeviceGetType, DeviceListGetType } from "@dl/types/device.type"

export const deviceList = [
  { id: 1, title: "Apple Iphone 11", description: 'cool device', price: 699, quantity: 7, __typename: 'Device' },
  { id: 2, title: "Apple Iphone 12 red", description: 'nice device', price: 599, quantity: 17, __typename: 'Device' },
  { id: 3, title: "Apple Iphone 13 blue", description: ' device', price: 499, quantity: 77, __typename: 'Device' },
]

export const MocKGetDeviceList: () => DeviceListGetType = () => {
  return {
    deviceList: deviceList
  }
}

export const MockGetDevice: (id: number) => DeviceGetType = (id) => {

  return {
    getDevice: deviceList[id - 1]
  }
}