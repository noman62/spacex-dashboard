import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Homepage/Home/Home';
import LaunchDetails from "./components/Homepage/LaunchDeatails/LaunchDetails";


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/launches/upcoming/:id">
            <LaunchDetails/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;
