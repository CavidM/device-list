import { IEntityValidation } from "../validation/IEntity";

export interface IDeviceQuantityUpdate extends IEntityValidation<IDeviceQuantityUpdate> {
    id: number;
    quantity: number;
}