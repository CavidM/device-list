import { makeExecutableSchema } from 'graphql-tools';

export default makeExecutableSchema({
  typeDefs: `
      type Query {
          deviceList: [Device]
          getDevice(id: Int!): Device
      }
      type Mutation {
      
          updateQuantity(
              id: Int!,
              quantity: Int!, 
          ): Device!   
      }
      type Device {
          id: ID!,
          title: String!,  
          description: String!,
          price: Int!,
          quantity: Int!,
      }
  `
});