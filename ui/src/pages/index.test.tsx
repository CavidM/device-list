import {
  render, screen, waitFor, cleanup,
} from '@dl/test.setup';
import userEvent from '@testing-library/user-event';

import Index from './index';

const user = userEvent.setup();

// 1. user opens the app and see the list of devices, their id, title, etc.
// 2. user click the first device and see all information about device,
//        buttons addToCart and removeFromCart, total items in cart
// 3. user opens any device and tries to add to Cart. User see item was added to cart.
//        then click remove from cart and sees "this items in cart" is 0 now.

test('Device list', async () => {
  render(<Index />);

  // User see device list
  await waitFor(() => {
    expect(screen.getByText('Apple Iphone 11')).toBeInTheDocument();
    expect(screen.getByText('Apple Iphone 12 red')).toBeInTheDocument();
    expect(screen.getByText('Apple Iphone 13 blue')).toBeInTheDocument();
  });

  user.click(screen.getByText('Apple Iphone 11'));

  // User see full information
  await waitFor(() => {
    expect(screen.getByText('Device info')).toBeInTheDocument();
    expect(screen.getByText('cool device')).toBeInTheDocument();
    expect(screen.getByText('$699')).toBeInTheDocument();
    expect(screen.getByText('add to cart')).toBeInTheDocument();
    expect(screen.getByText('remove from cart')).toBeInTheDocument();
  });

  await user.click(screen.getByText('remove from cart'));
  await waitFor(() => {
    expect(screen.getByText('There is no item in cart')).toBeInTheDocument();
  });

  // add to cart
  await user.click(screen.getByText('add to cart'));
  await waitFor(() => {
    expect(screen.getByTestId('total-quantity').innerHTML).toEqual('1');
    expect(screen.getByTestId('item-quantity').innerHTML).toEqual('1');
  });

  // remove from cart
  await user.click(screen.getByText('remove from cart'));
  await waitFor(() => {
    expect(screen.getByTestId('total-quantity').innerHTML).toEqual('0');
    expect(screen.getByTestId('item-quantity').innerHTML).toEqual('0');
  });
});
