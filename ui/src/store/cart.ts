import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStateType } from '.';

interface CartStateProps {
  items: { [key: number]: number }
}

interface PayloadActionProps {
  deviceId: number
}

const initialState: CartStateProps = {
  items: {}
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    actionAddToCart: (state, action: PayloadAction<PayloadActionProps>) => {

      const { deviceId } = action.payload;

      const quantity = state!.items[deviceId];

      if (typeof quantity === 'number') {
        state!.items[deviceId] += 1;
      }
      else {
        state!.items[deviceId] = 1;
      }
    },
    actionRemoveFromCart: (state, action: PayloadAction<PayloadActionProps>) => {
      const { deviceId } = action.payload;

      const quantity = state!.items[deviceId];

      if (typeof quantity === 'number' && quantity > 0) {
        state!.items[deviceId] -= 1;
      }

    },
  },
});

export const selectCartDeviceQuantity = (state: AppStateType) => {
  const t = Object
    .values(state.cart.items)
    .reduce((sum, item) => sum + item, 0)

  return t;
}

export const { actionAddToCart, actionRemoveFromCart } = cartSlice.actions;

export default cartSlice.reducer;
