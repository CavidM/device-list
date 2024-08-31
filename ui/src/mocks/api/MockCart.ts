import { CartAddMutationType, CartRemoveMutationType } from '@dl/types/cart.type';
import { deviceList } from './MockDevice';

export const MockAddToCart: (id: number) => CartAddMutationType = (id) => {
  deviceList[id - 1].quantity -= 1;

  return {
    addToCart: {
      deviceLeft: deviceList[id - 1].quantity,
    },
  };
};

export const MockRemoveFromCart: (id: number) => CartRemoveMutationType = (id) => {
  deviceList[id - 1].quantity += 1;

  return {
    removeFromCart: {
      deviceLeft: deviceList[id - 1].quantity,
    },
  };
};
