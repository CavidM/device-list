import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import { useAppDispatch } from '@dl/store';
import { actionRemoveFromCart } from '@dl/store/cart';
import { useAppSelector } from '@dl/hooks/useAppSelector';
import { enqueueSnackbar } from 'notistack';
import { QUERY_GET_DEVICE } from '../device-edit/DeviceEdit.container';

export const MUTATION_NAME_REMOVE_FROM_CART = 'RemoveFromCart';

const MutationRemoveFromCart = gql`
  mutation ${MUTATION_NAME_REMOVE_FROM_CART}($deviceId: Int!) {
    removeFromCart(deviceId: $deviceId) {
      deviceLeft
    }
  }
`;

export const DeviceCartRemove = () => {
  const dispatch = useAppDispatch();
  const { query } = useRouter();

  let device: number = 0;

  if (query.device) {
    device = parseInt(query.device as string, 10);
  }

  const itemsInCart = useAppSelector((store) => store.cart.items[device]);

  const [removeFromCart] = useMutation(MutationRemoveFromCart, {
    variables: { deviceId: device },
    refetchQueries: [QUERY_GET_DEVICE],
    onCompleted: () => {
      dispatch(actionRemoveFromCart({ deviceId: device }));
    },
  });

  const onClick = () => {
    if (typeof itemsInCart === 'number' && itemsInCart > 0) {
      removeFromCart();
    } else {
      enqueueSnackbar('There is no item in cart', { variant: 'warning' });
    }
  };

  return (
    <Button
      variant="warning"
      className="mb-3"
      onClick={onClick}
    >
      remove from cart
    </Button>
  );
};
