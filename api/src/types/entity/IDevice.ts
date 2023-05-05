import { ICustomBaseEntity } from "./ICustomBaseEntity";

export interface IDevice extends ICustomBaseEntity {
    title: string
    price: number
    quantity: number
    description: string
}