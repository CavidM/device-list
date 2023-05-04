import { io } from "socket.io-client";
import { setToken } from "./auth-token";
import client from "@dl/config/graphql-client";
import { QUERY_DEVICE_LIST } from "@dl/components/device/device-list/DeviceList.container";
import { DeviceChangeMessageProps, showUpdates } from "@dl/components/device/device-notification/DeviceNotification";


export const initSocket = () => {
  const socket = io('ws://localhost:3002');

  socket.on("connect", () => {
    console.log('socketId: ', socket.id);

  });

  socket.on('quantityChanged', (data: DeviceChangeMessageProps) => {

    client.refetchQueries({
      include: [QUERY_DEVICE_LIST],
    })

    console.log('new data: ', data)

    showUpdates(data);
  })

  socket.on('authenticateUser', (data) => {

    setToken(data.token)
  })

  socket.on('disconnect', () => {
    console.log('disconnected: ', socket.id)
  })

  return socket;
}
