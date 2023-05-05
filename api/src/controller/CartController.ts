import { getCustomRepository } from "typeorm";
import DeviceBll from "../bll/DeviceBll";
import BaseController from "./BaseController";
import DeviceRepository from "../dal/DeviceRepository";
import { IContext } from "../types/graphql/IGraphql";
import { WsEvents, ioClient } from "../services/webSocket";
import AuthWebSocket from "../decorator/AuthWebSocket";

export default class CartController extends BaseController {
  protected deviceBll: DeviceBll;

  constructor() {
    super()

    this.deviceBll = new DeviceBll(getCustomRepository(DeviceRepository));

    this.actionAddToCart = this.actionAddToCart.bind(this);
    this.actionRemoveFromCart = this.actionRemoveFromCart.bind(this);
  }

  @AuthWebSocket
  public async actionAddToCart(args: { deviceId: number }, context: IContext) {
    try {
      console.log('me: ', context.req.socketId)
      const { socketId } = context.req;
      const { deviceId } = args

      const device = await this.deviceBll.decreaseQuantity(deviceId);

      ioClient.except(socketId).emit<WsEvents>('quantityChanged', {
        device: {
          id: device.id,
          title: device.title
        },
        change: 'decreased'
      })

      return { deviceLeft: device.quantity }
    }
    catch (e) {
      return this.catchError(e);
    }
  }

  @AuthWebSocket
  public async actionRemoveFromCart(args: { deviceId: number }, context: IContext) {
    try {
      console.log('me: ', context.req.socketId)
      const { deviceId } = args

      const device = await this.deviceBll.encreaseQuantity(deviceId);

      const { socketId } = context.req;

      ioClient.except(socketId).emit<WsEvents>('quantityChanged', {
        device: {
          id: device.id,
          title: device.title
        },
        change: 'increased'
      })

      return { deviceLeft: device.quantity }
    }
    catch (e) {
      return this.catchError(e);
    }
  }
}