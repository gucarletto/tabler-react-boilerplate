import * as React from "react";
import { BrowserRouter as Router} from "react-router-dom";

import "tabler-react/dist/Tabler.css";

import Routes from './routes';

import { AuthProvider } from "./hooks/AuthContext";

type Props = {};

function App(props: Props) {
  return (
    <React.StrictMode>
      <Router>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App;