import { ObjectSchema } from "joi";

export interface IEntityValidation<T> {
    load?: (obj: any) => T
    schema?: () => ObjectSchema
}