import BaseController from "../controller/BaseController";
import { UnauthorizedError } from "type-graphql";
import Logger from "../utils/logger";
const jwt = require('jsonwebtoken');

export default function AuthWebSocket(target: BaseController, name: string, descriptor: PropertyDescriptor) {

  const original = descriptor.value;

  if (typeof original === 'function') {

    descriptor.value = async function (...args: any) {
      let ctx = args[1];

      try {
        let authStr = ctx.req.get('Authorization');

        if (!Boolean(authStr)) {

          throw new UnauthorizedError();
        }

        let token = authStr.split(' ')[1];
        let userJWT = jwt.verify(token, process.env.AUTH_SECRET);

        ctx.req.socketId = userJWT.socketId;

        return original.apply(this, args);

      } catch (e) {
        (new Logger()).error(e);
        throw new UnauthorizedError();
      }
    }
  }
  return descriptor;
};