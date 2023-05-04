import { ON_OFF_STATUS } from "../../constants";

export interface ICustomBaseEntity {
    id?: number;
    created_date?: Date;
    updated_date?: Date;
    active?: ON_OFF_STATUS;
}
