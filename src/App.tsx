import * as React from "react";
import styled from "styled-components";
import "./App.css";

import logo from "./logo.svg";

const H1 = styled.h1`
  color: red;
`;

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <H1 className="App-title">Welcome to React</H1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
