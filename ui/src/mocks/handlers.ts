// src/mocks/handlers.js
import { graphql } from 'msw'
import { MocKGetDeviceList, MockGetDevice } from '@dl/mocks/api/MockDevice'
import { DeviceGetType, DeviceListGetType } from '@dl/types/device.type'
import { MockAddToCart, MockRemoveFromCart } from './api/MockCart';
import { CartAddMutationType, CartRemoveMutationType } from '@dl/types/cart.type';
import { QUERY_NAME_GET_DEVICE } from '@dl/components/device/device-edit/DeviceEdit.container';
import { QUERY_NAME_GET_DEVICE_LIST } from '@dl/components/device/device-list/DeviceList.container';
import { MUTATION_NAME_ADD_TO_CART } from '@dl/components/device/device-cart/DeviceCartAdd';
import { MUTATION_NAME_REMOVE_FROM_CART } from '@dl/components/device/device-cart/DeviceCartRemove';

export const handlers = [
  graphql.query<DeviceListGetType>(QUERY_NAME_GET_DEVICE_LIST, (req, res, ctx) => res(
    ctx.data(MocKGetDeviceList())
  )),

  graphql.query<DeviceGetType, { id: number }>(QUERY_NAME_GET_DEVICE, (req, res, ctx) => res(
    ctx.data(MockGetDevice(req.variables.id))
  )),

  graphql.mutation<CartAddMutationType, { deviceId: number }>(MUTATION_NAME_ADD_TO_CART, (req, res, ctx) => res(
    ctx.data(MockAddToCart(req.variables.deviceId))
  )),

  graphql.mutation<CartRemoveMutationType, { deviceId: number }>(MUTATION_NAME_REMOVE_FROM_CART, (req, res, ctx) => res(
    ctx.data(MockRemoveFromCart(req.variables.deviceId))
  ))
]

