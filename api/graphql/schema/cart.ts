import { makeExecutableSchema } from 'graphql-tools';

export default makeExecutableSchema({
    typeDefs: `
      type Query {
         deviceQuantity: DeviceQuantity
      }
      type Mutation {

          addToCart(
              deviceId: Int!,
          ): DeviceQuantity!

          removeFromCart(
              deviceId: Int!
          ): DeviceQuantity!
      }
      type DeviceQuantity {
          deviceLeft: Int!
      }
  `
});