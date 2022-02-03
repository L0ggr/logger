import { gql } from "apollo-server";
import {
  GetUser,
  AddUser,
  DeleteUser,
  UpdateUser,
  GetProject,
  AddProject,
  UpdateProject,
  DeleteProject,
} from "services";

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

  input ProjectMutation {
    name: String!
  }

  type Project {
    id: ID
    name: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    user(id: ID): User
    users(ids: [ID]): [User]
    project(id: ID): Project
    projects(ids: [ID]): [Project]
  }

  type Mutation {
    addUser(user: UserMutation!): User
    updateUser(id: ID!, user: UserMutation!): User
    deleteUser(id: ID!): User
    addProject(project: ProjectMutation!): Project
    updateProject(id: ID!, project: ProjectMutation!): Project
    deleteProject(id: ID!): Project
  }
`;

export const resolvers = {
  Query: {
    user: GetUser,
    project: GetProject,
    // users: GetUsers,
  },
  Mutation: {
    addUser: AddUser,
    updateUser: UpdateUser,
    deleteUser: DeleteUser,
    addProject: AddProject,
    updateProject: UpdateProject,
    deleteProject: DeleteProject,
  },
};
