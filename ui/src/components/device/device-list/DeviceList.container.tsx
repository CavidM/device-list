import { FC } from 'react'
import { useQuery, gql } from '@apollo/client'
import { DeviceList } from './DeviceList'
import { DeviceListGetType } from '@dl/types/device.type'

export const QUERY_NAME_GET_DEVICE_LIST = 'GetDeviceList'

export const QUERY_DEVICE_LIST = gql`
  query ${QUERY_NAME_GET_DEVICE_LIST} {
    deviceList {
        id,
        title,
        price,
        quantity,
        description
    }
  }
`

export const DeviceListContainer: FC<any> = () => {
  const { data, loading, error } =
    useQuery<DeviceListGetType>(QUERY_DEVICE_LIST)

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return null
  }

  return <DeviceList data={data?.deviceList} />
}
