import errors from './errors';

let messages = {
    [errors.INVALID_AUTHENTICATION_CREDENTIALS]: {
        auth: false,
        msg: 'Invalid authentication credentials'
    },
    [errors.EMPTY_STOCK]: {
        msg: 'Stock is empty'
    }
}

export default messages;