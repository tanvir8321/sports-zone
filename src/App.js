import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/responsive.css';
import ExploreMore from "./components/ExploreMore/ExploreMore";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
function App() {
 
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/league/:id">
              <ExploreMore></ExploreMore>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
