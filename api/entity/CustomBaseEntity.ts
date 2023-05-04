import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ICustomBaseEntity } from "../types/entity/ICustomBaseEntity";
import { ON_OFF_STATUS } from "../constants";

export class CustomBaseEntity implements ICustomBaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_date: Date;

    @UpdateDateColumn()
    updated_date: Date;

    @Column({
        type: "enum",
        enum: [ON_OFF_STATUS.OFF, ON_OFF_STATUS.ON],
        default: ON_OFF_STATUS.ON
    })
    active: ON_OFF_STATUS;


}