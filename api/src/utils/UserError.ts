import { ValidationErrorItem } from "joi";

export default class UserError extends Error {

    public code: number | null;
    public errors?: ValidationErrorItem[];
    public statusCode: number | null;

    constructor(code: number | null = null, msg: string = '', errors?: ValidationErrorItem[]) {
        super();

        this.code = code;
        this.statusCode = code;
        this.message = msg;
        this.errors = errors;
    }
}