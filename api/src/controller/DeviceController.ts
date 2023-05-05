import { getCustomRepository } from "typeorm";
import DeviceBll from "../bll/DeviceBll";
import BaseController from "./BaseController";
import DeviceRepository from "../dal/DeviceRepository";
import { IContext } from "../types/graphql/IGraphql";

export default class DeviceController extends BaseController {
    protected bll: DeviceBll;

    constructor() {
        super();
        this.bll = new DeviceBll(getCustomRepository(DeviceRepository));

        this.actionGetDeviceList = this.actionGetDeviceList.bind(this);
        this.actionGetDevice = this.actionGetDevice.bind(this);
    }

    public async actionGetDeviceList() {
        try {
            return await this.bll.getDeviceList();
        }
        catch (e) {
            this.catchError(e);
        }
    }

    public async actionGetDevice(args: { id: number }, context: IContext) {
        try {
            const { id } = args;
            await new Promise((res) => {
                setTimeout(() => { res(1) }, 1000)
            })
            return await this.bll.deviceDal.findOne(id);
        }
        catch (e) {
            this.catchError(e);
        }
    }
}