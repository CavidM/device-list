import { useMutation, gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import { CartAddMutationType } from '@dl/types/cart.type';
import { useSnackbar } from 'notistack';
import { DeviceGetType } from '@dl/types/device.type';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@dl/store';
import { actionAddToCart } from '@dl/store/cart';
import { QUERY_GET_DEVICE } from '../device-edit/DeviceEdit.container';

export const MUTATION_NAME_ADD_TO_CART = 'AddToCart';

const MutationAddToCart = gql`
  mutation ${MUTATION_NAME_ADD_TO_CART}($deviceId: Int!) {
    addToCart(deviceId: $deviceId) {
      deviceLeft
    }
  }
`;

export const DeviceCartAdd = () => {
  const dispatch = useAppDispatch();
  const { query } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [canAddToCart, setCanAddToCart] = useState(true);

  let device: number = 0;

  if (query.device) {
    device = parseInt(query.device as string, 10);
  }

  const { data: deviceData } = useQuery<DeviceGetType>(QUERY_GET_DEVICE, {
    variables: { id: device },
  });

  const deviceQuantity = deviceData?.getDevice.quantity;

  useEffect(() => {
    if (deviceQuantity) {
      setCanAddToCart(true);
    }
  }, [deviceQuantity]);

  const [addToCart] = useMutation<CartAddMutationType>(MutationAddToCart, {
    variables: { deviceId: device },
    refetchQueries: [QUERY_GET_DEVICE],
    onError: (error) => {
      console.log(JSON.parse(JSON.stringify(error)));
    },
    onCompleted: () => {
      dispatch(actionAddToCart({ deviceId: device }));
    },
  });

  const onClick = () => {
    if (deviceQuantity === 0) {
      enqueueSnackbar('Sorry, There is no device. Come back later', {
        variant: 'warning',
      });

      setCanAddToCart(false);
    } else {
      addToCart();
    }
  };

  return (
    <Button
      disabled={!canAddToCart}
      variant="success"
      className="mb-3"
      onClick={onClick}
    >
      add to cart
    </Button>
  );
};
