import inputValidationMessages from './responseMessage';
import { ValidationErrorItem } from "joi";

export default class httpResponse extends Error {

    public errors: any[];

    constructor() {

        super();

        this.errors = [];
    }

    /**
     * @type {Array}
     * example errors: [{
     *          status: 422,
     *          msg: 'Email or password is incorrect',
     *          detail: http://wwww.thisproject.com/api/doc/client/error/422
     *      }]
     */

    public createResponse = (code?: number, msg?: string) => {

        if (code) {
            let res = inputValidationMessages[code];

            res = Object.assign({ status: code }, res);

            return res;
        }
        else if (msg) {

            return { msg };
        }
    }

    public addError = (code: number = 0, msg?: string) => {

        let error = this.createResponse(code, msg);

        this.errors.push(error);

        this.message = JSON.stringify(this.errors);
    };

    public addErrors = (errors: ValidationErrorItem[]) => {

        errors.map((error) => {
            this.addError(undefined, error.message);
        });
    };

    public getError = (code: number, msg: string) => {

        let error = this.createResponse(code, msg);

        this.message = JSON.stringify([error]);

        return this;
    }

    public reset() {

        this.errors = [];
    }
}