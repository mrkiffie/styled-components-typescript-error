# Error with `styled-components`'s typings

This is a minimal reproduction of an error I'm having.

```console
Failed to compile.

/path/to/repos/styled-components-typescript-error/node_modules/styled-components/typings/styled-components.d.ts
(76,48): Type 'keyof T' does not satisfy the constraint 'string'.
  Type 'string | number | symbol' is not assignable to type 'string'.
    Type 'number' is not assignable to type 'string'.
```

## Steps taken to replicate

### Create working instance

```sh
create-react-app --scripts-version=react-scripts-ts styled-components-typescript-error
cd styled-components-typescript-error
yarn add styled-components
```

### Import `styled-components`

I replicate the error by importing `styled-components`

```diff
diff --git a/src/App.tsx b/src/App.tsx
index cabcab7..1b697c6 100644
--- a/src/App.tsx
+++ b/src/App.tsx
@@ -1,15 +1,20 @@
 import * as React from "react";
+import styled from "styled-components";
 import "./App.css";

 import logo from "./logo.svg";

+const H1 = styled.h1`
+  color: red;
+`;
+
 class App extends React.Component {
   public render() {
     return (
       <div className="App">
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
-          <h1 className="App-title">Welcome to React</h1>
+          <H1 className="App-title">Welcome to React</H1>
         </header>
         <p className="App-intro">
           To get started, edit <code>src/App.tsx</code> and save to reload.
```

`H1` is only added and used to prevent linting errors.
