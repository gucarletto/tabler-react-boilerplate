import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  HomePage
} from "./pages";

import {
  Error404
} from "./pages/exceptions
";

import "tabler-react/dist/Tabler.css";

type Props = {};

function App(props: Props) {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;