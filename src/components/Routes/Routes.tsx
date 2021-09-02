import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/**
 * Component Imports
 */
import { SearchPage } from "../SearchPage";
import { SearchResults } from "../SearchResults";
import { TVShow } from "../TVShow";

/**
 * Displays the component
 */
export const Routes: React.FC = () => {
  return (
    <Router>
      <Route path="/">
        <Switch>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route exact path="/search">
            <SearchResults />
          </Route>
          <Route exact path="/shows/:id">
            <TVShow />
          </Route>
          <Route path="*">
            <SearchPage />
          </Route>
        </Switch>
      </Route>
    </Router>
  );
};
