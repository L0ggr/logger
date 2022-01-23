require("dotenv").config();
import { ApolloServer } from "apollo-server";
import { DatabaseInit } from "orm";
import { typeDefs, resolvers } from "interface";

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
