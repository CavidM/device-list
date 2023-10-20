import errors from './errors';

let messages = {
    [errors.INVALID_AUTHENTICATION_CREDENTIALS]: {
        auth: false,
        msg: 'Invalid authentication credentials'
    },
    [errors.DEVICE_NOT_FOUND]: {
        msg: 'device_not_found',
        detail: 'visit for more info https://www.test.com'
    },
    [errors.EMPTY_STOCK]: {
        msg: 'Stock is empty'
    }
}

export default messages;