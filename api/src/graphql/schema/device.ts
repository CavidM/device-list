import { makeExecutableSchema } from 'graphql-tools';

export default makeExecutableSchema({
    typeDefs: `
      type Query {
          deviceList: [Device]
          getDevice(id: Int!): DeviceType
      }
      union DeviceType = Error | Device
      type Mutation {
          updateQuantity(
              id: Int!,
              quantity: Int!, 
          ): Device!   
      }
      type Device {
          id: ID,
          title: String,  
          description: String,
          price: Int,
          quantity: Int,
      }
      type Error {
        status: Int,
        msg: String,
        detail: String
      }
  `
});