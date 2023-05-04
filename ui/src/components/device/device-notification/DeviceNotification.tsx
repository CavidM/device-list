import { DeviceProps } from "@dl/types/device.type";
import { useRouter } from "next/router";
import { enqueueSnackbar, closeSnackbar, SnackbarKey } from "notistack"
import { FC } from "react";
import Button from "react-bootstrap/Button";

const notifications = (() => {
  const list: { [deviceId: number]: SnackbarKey[] } = {};

  return {
    addNotification: (deviceId: number, snackbarKey: SnackbarKey) => {
      if (!list[deviceId]) {
        list[deviceId] = [snackbarKey]
      }
      else {
        list[deviceId].push(snackbarKey)
      }
    },
    getNotificationsFor: (deviceId: number): SnackbarKey[] => {
      return list[deviceId];
    },
    removeNotificationsFor: (deviceId: number): SnackbarKey[] => {

      const lastList = list[deviceId]

      delete list[deviceId]

      return lastList
    }
  }
})()

const action = (snackbarId: SnackbarKey) => (
  <>
    <Button variant="light" onClick={() => { closeSnackbar(snackbarId) }}>
      Dismiss
    </Button>
  </>
);

export interface DeviceChangeMessageProps {
  device: Required<Pick<DeviceProps, 'id' | 'title'>>,
  change: 'increased' | 'decreased'
}

const Content: FC<DeviceChangeMessageProps> = ({
  device,
  change
}) => {

  const router = useRouter();
  const { id, title } = device

  const onClick = () => {
    router.push({
      pathname: '/',
      query: { device: id }
    })

    notifications
      .removeNotificationsFor(id)
      ?.forEach(snackbarKey => {
        closeSnackbar(snackbarKey)
      })

  }

  return (
    <div>
      <div className="fs-5 pb-2">Someone changed the data:</div>
      <div className="fs-6 pb-2">{title} {change} by 1</div>
      <Button variant="link" onClick={onClick} className="text-light p-0">Go to the device</Button>
    </div>
  )

}

export const showUpdates = (data: DeviceChangeMessageProps) => {

  const snackbarId = enqueueSnackbar(<Content {...data} />, {
    autoHideDuration: null,
    action,
    variant: 'info'
  })

  notifications.addNotification(data.device.id, snackbarId)
}