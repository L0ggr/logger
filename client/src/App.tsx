import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import Button from "./components/Counter";

const GETUSER = gql`
  query Query($userId: ID) {
    user(id: $userId) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;

function App() {
  // NOTE(Ecy): Testing get user with ID
  const { loading, error, data } = useQuery(GETUSER, {
    variables: {
      userId: "61e0d190b6dfe648a2352b1e",
    },
  });

  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <h2> Get user: </h2>
        {loading || !data ? <p>Loading...</p> : <p>{data.user.id}</p>}
      </header>
    </div>
  );
}

export default App;
