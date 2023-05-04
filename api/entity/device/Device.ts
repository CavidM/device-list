import {
    Column,
    Entity
} from "typeorm";
import { CustomBaseEntity } from "../CustomBaseEntity";
import { IDevice } from "../../types/entity/IDevice";

@Entity()
export class Device extends CustomBaseEntity implements IDevice {

    constructor(id?: number) {
        super();
        id && (this.id = id);
    }

    @Column()
    title: string;

    @Column()
    price: number;

    @Column()
    quantity: number;

    @Column()
    description: string;
}
