require("dotenv").config();
import { ApolloServer } from "apollo-server";
import { DatabaseInit } from "orm";
import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    phone: String
    createdAt: String
    updatedAt: String
  }

  input UserMutation {
    id: ID
    firstName: String!
    lastName: String!
    email: String!
    phone: String
    password: String!
  }

  type Query {
    user(id: ID): User
    users(ids: [ID]): [User]
  }

  type Mutation {
    putUser(user: UserMutation!): User
    deleteUser(id: ID!): [User]
  }
`;

export const resolvers = {
  Query: {
    // user: GetUser,
    // users: GetUsers,
  },
  Mutation: {
    // putUser: PutUser,
    // deleteUser: DeleteUser,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Initialize the server
(async function () {
  try {
    await DatabaseInit();
    const { url } = await server.listen();

    console.log(`🚀  Server ready at ${url}`);
  } catch (err) {
    console.log("Server failed to launch", err);
  }
})();
