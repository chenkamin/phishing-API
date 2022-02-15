import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./comps/Login";

function App() {
  return (
    // <Router>
    //   {/* <Routes> */}
    //     <Route path="/" exact render={() => <Login />} />

    //   {/* </Routes> */}
    // </Router>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
