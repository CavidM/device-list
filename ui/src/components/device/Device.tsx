import dynamic from 'next/dynamic'
import { DeviceListContainer } from './device-list/DeviceList.container'
import { useRouter } from 'next/router'

const DynamicDeviceEdit = dynamic(
  () => import('./device-edit/DeviceEdit.modal')
    .then(mod => mod.DeviceEditModal),
  {
    loading: () => <p>Loading...</p>,
  })

export const Device = () => {

  const { query } = useRouter()

  let showDeviceEdit = false;

  if (query?.device) {
    showDeviceEdit = true
  }

  return (
    <>
      <DeviceListContainer />
      {
        showDeviceEdit && <DynamicDeviceEdit />
      }
    </>
  )
}