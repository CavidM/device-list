import { EntityRepository, Repository } from "typeorm";
import { IDevice } from "../types/entity/IDevice";
import { Device } from "../entity/device/Device";
import UserError from "../utils/UserError";
import errors from "../utils/http-response/errors";

@EntityRepository(Device)
export default class DeviceRepository extends Repository<IDevice> {

    public async getDeviceList(): Promise<IDevice[]> {
        return await this.find({ order: { 'id': 'ASC' } });
    }

    public async findOrFail(id: number): Promise<IDevice | undefined> {
        const device = await this.findOne(id);

        if (!device) {
            throw new UserError(errors.DEVICE_NOT_FOUND)
        }

        return device;
    }
}