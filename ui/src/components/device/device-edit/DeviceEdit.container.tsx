import { useRouter } from "next/router";
import { DeviceEditHtml } from "./DeviceEdit.html"
import { useQuery, gql, NetworkStatus } from "@apollo/client";
import { DeviceGetType } from "@dl/types/device.type";
import { useAppSelector } from "@dl/hooks/useAppSelector";

export const QUERY_GET_DEVICE = gql`
  query GetDevice($id: Int!) {
    getDevice(id: $id) {
        id,
        title,
        price,
        quantity,
        description
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

  if (!data?.getDevice) {
    return (
      <h4>There is no device for such id. Please select device from the list</h4>
    )
  }

  const { getDevice } = data

  const quantityUpdates = networkStatus === NetworkStatus.refetch ? true : false;

  return <DeviceEditHtml
    {...getDevice}
    quantityUpdates={quantityUpdates}
    itemsInCart={itemsInCart}
  />
}