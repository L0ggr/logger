require("dotenv").config();
import { ApolloServer } from "apollo-server";
import { DatabaseInit } from "orm";
import { gql } from "apollo-server";
import { GetUser, AddUser, DeleteUser, UpdateUser } from "services";

export const typeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
    createdAt: String
    updatedAt: String
  }

  input UserMutation {
    name: String!
    email: String!
    password: String!
  }

  type Query {
    user(id: ID): User
    users(ids: [ID]): [User]
  }

  type Mutation {
    addUser(user: UserMutation!): User
    updateUser(id: ID!, user: UserMutation!): User
    deleteUser(id: ID!): User
  }
`;

export const resolvers = {
  Query: {
    user: GetUser,
    // users: GetUsers,
  },
  Mutation: {
    addUser: AddUser,
    updateUser: UpdateUser,
    deleteUser: DeleteUser,
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
