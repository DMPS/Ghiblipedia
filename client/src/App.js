import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import logo from "./logo.svg";
import "./App.css";
import ApolloClient from "apollo-boost";
import Films from "./Films/Films.jsx";
const client = new ApolloClient({
  uri: "http://localhost:4000"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Ghiblipedia</h1>
          </header>
          <Films />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
