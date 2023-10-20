import { useRouter } from "next/router";
import { DeviceEditHtml } from "./DeviceEdit.html"
import { useQuery, gql, NetworkStatus } from "@apollo/client";
import { DeviceGetType, DeviceProps } from "@dl/types/device.type";
import { useAppSelector } from "@dl/hooks/useAppSelector";

export const QUERY_NAME_GET_DEVICE = 'GetDevice'

export const QUERY_GET_DEVICE = gql`
  query ${QUERY_NAME_GET_DEVICE}($id: Int!) {
    getDevice(id: $id) {
        ... on Device {
          id,
          title,
          price,
          quantity,
          description
        }
        ... on Error {
          status,
          msg,
          detail
        }
    }
  }
`;

export const DeviceEditContainer = () => {
  const { query } = useRouter();

  let { device }: any = query;

  const itemsInCart = useAppSelector((store) => store.cart.items[device])

  device = parseInt(device as string)

  const { data, loading, networkStatus } = useQuery<DeviceGetType>(QUERY_GET_DEVICE, {
    variables: { id: device },
    notifyOnNetworkStatusChange: true
  });

  if (networkStatus === NetworkStatus.loading || networkStatus === NetworkStatus.setVariables) {
    return <>Loading device...</>
  }

  if(!data) {
    return null
  }

  if (data?.getDevice.msg === 'device_not_found') {
    
    return (
      <h4>There is no device for such id. Please select device from the list</h4>
    )
  }


  const { getDevice } = data

  const quantityUpdates = networkStatus === NetworkStatus.refetch ? true : false;

  return <DeviceEditHtml
    {...getDevice as DeviceProps}
    quantityUpdates={quantityUpdates}
    itemsInCart={itemsInCart}
  />
}