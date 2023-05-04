import DeviceRepository from "../dal/DeviceRepository";
import { IDevice } from "../types/entity/IDevice";
import UserError from "../utils/UserError";
import errorCodes from '../utils/http-response/errors';

export default class DeviceBll {
    public deviceDal: DeviceRepository;

    constructor(DeviceRepository: DeviceRepository) {
        this.deviceDal = DeviceRepository;
    }

    public async getDeviceList(): Promise<IDevice[]> {
        return this.deviceDal.getDeviceList();
    }

    public async encreaseQuantity(id: number): Promise<IDevice> {
        const device = await this.deviceDal.findOrFail(id);

        device.quantity += 1;

        await this.deviceDal.update({ id }, { quantity: device.quantity });

        return device;
    }

    public async decreaseQuantity(id: number): Promise<IDevice> {
        const device = await this.deviceDal.findOrFail(id);

        if (device.quantity === 0) {
            throw new UserError(errorCodes.EMPTY_STOCK)
        }

        device.quantity -= 1;

        await this.deviceDal.update({ id }, { quantity: device.quantity });

        return device;
    }
}